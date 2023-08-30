import { Header } from "./header";
import Drawer from "./drawer";
import * as React from "react";
import { Outlet } from "react-router-dom";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Drawer />
      <Outlet />
    </>
  );
};
