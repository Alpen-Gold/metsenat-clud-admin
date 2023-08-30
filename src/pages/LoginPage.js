import { useState } from "react";

export const LoginPage = ({ setUserActivited }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
    if (login === "3W" && password === "2023") setUserActivited(true);
  };

  return (
    <div className={"flex"}>
      <img
        src="https://img.freepik.com/premium-vector/blue-polygon-dark-background-square-social-template-vector_53876-170115.jpg"
        alt=""
        className={"hidden md:block w-[50%] h-[100vh] object-cover "}
      />
      <div
        className={
          " flex flex-col justify-center items-center h-[100vh] gap-[10px] w-[100%] md:w-[50%]"
        }
      >
        <h1 className="text-3xl font-bold underline mb-5 text-qizil">
          Login Page
        </h1>

        {/*<TextField*/}
        {/*  value={login}*/}
        {/*  onChange={(e) => setLogin(e.target.value)}*/}
        {/*  placeholder={"Login"}*/}
        {/*/>*/}
        {/*<TextField*/}
        {/*  value={password}*/}
        {/*  onChange={(e) => setPassword(e.target.value)}*/}
        {/*  placeholder={"Password"}*/}
        {/*  type={"password"}*/}
        {/*/>*/}
        <button
          onClick={submit}
          className={
            "px-8 py-2 font-bold text-white rounded-3xl bg-sky-500 hover:bg-sky-700 hover:shadow-2xl"
          }
        >
          Login
        </button>
      </div>
    </div>
  );
};
