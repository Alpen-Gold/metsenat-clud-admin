import React, { useState } from "react";
import { Button, Drawer as AntdDrawer } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { open, close } from "../../store/slices/drawerSlice";
import { AiFillAppstore } from "react-icons/ai";

const Drawer = () => {
  const isOpen = useSelector((state) => state.drawer.open);
  const dispatch = useDispatch();

  const showDrawer = () => {
    dispatch(open());
  };
  const onClose = () => {
    dispatch(close());
  };
  return (
    <>
      <AntdDrawer
        title="Basic Drawer"
        placement="right"
        onClose={onClose}
        open={isOpen}
      >
        <div className={"bg-green-950 rounded"}>
          <img
            src="https://www.algorismic.uz/images/algorismic-02.svg"
            alt=""
          />
        </div>
        <AiFillAppstore />
      </AntdDrawer>
    </>
  );
};
export default Drawer;
