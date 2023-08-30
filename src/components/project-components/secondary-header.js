import { UserOutlined } from "@ant-design/icons";
import { Container } from "../mini-components/container";
import { StyledTab } from "../mini-components/tab";
import { Input, Radio } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setInputValue } from "../../store/slices/searchInputSlice";

export const SecondaryHeader = ({ tab }) => {
  const navigate = useNavigate();

  let searchValue = useSelector((store) => store.searchValue.inputValue);
  let dispatch = useDispatch();

  const onChange = (e) => {
    navigate(`/admin/${e.target.value}`);
  };

  return (
    <Container className={"py-7 shadow mb-4 flex items-center justify-between"}>
      <StyledTab value={tab} onChange={onChange}>
        <Radio.Button value="dashboard">Dashboard</Radio.Button>
        <Radio.Button value="sponsors">Homiylar</Radio.Button>
        <Radio.Button value="students">Talabalar</Radio.Button>
      </StyledTab>

      <div>
        {tab !== "dashboard" ? (
          <Input
            size="large"
            placeholder="large size"
            value={searchValue}
            onChange={(e) => dispatch(setInputValue(e.target.value))}
            prefix={<UserOutlined />}
          />
        ) : (
          "yoq"
        )}
      </div>
    </Container>
  );
};
