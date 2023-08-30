import * as React from "react";
import { useEffect } from "react";
import { useLocalStorageState } from "ahooks";
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { Button, ConfigProvider } from "antd";
import { Provider } from "react-redux";
import store from "./store";
import { Layout } from "./components/mini-components/layout";
import { Sponsors } from "./pages/sponsors";
import { Students } from "./pages/students";
import { Sponsor } from "./pages/sponsor";
import { Dashboard } from "./pages/dashboard";

function App() {
  const [userActivited, setUserActivited] = useLocalStorageState(
    "userActivited",
    { defaultValue: true }
  );
  const navigate = useNavigate();
  const location = useLocation();
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (userActivited && location.pathname === "/login") navigate("/");
    else if (!userActivited) navigate("/login");
  }, [userActivited]);

  console.log("App");

  return (
    <Provider store={store}>
      <ConfigProvider theme={{ token: {} }}>
        <Routes>
          <Route path={"admin"} element={<Layout />}>
            <Route path={"sponsors"} element={<Sponsors />}></Route>
            <Route path={"students"} element={<Students />}></Route>
            <Route path={"dashboard"} element={<Dashboard />}></Route>

            <Route path={"sponsors/:id"} element={<Sponsor />}></Route>
          </Route>
        </Routes>
      </ConfigProvider>
    </Provider>
  );
}

export default App;
