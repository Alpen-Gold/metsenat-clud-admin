import { Header } from "./header";
import Drawer from "./drawer";
import * as React from "react";
import { Outlet } from "react-router-dom";

export const Layout = (props) => {
  return (
    <>
      <Header setUserActivited={props.setUserActivited} />
      <Drawer />
      <Outlet />
    </>
  );
};
