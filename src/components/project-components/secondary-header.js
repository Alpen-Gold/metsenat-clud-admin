import { Container } from "../mini-components/container";
import { StyledTab } from "../mini-components/tab";
import { Radio } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

export const SecondaryHeader = ({ tab }) => {
  const navigate = useNavigate();

  const onChange = (e) => {
    navigate(`/admin/${e.target.value}`);
  };

  return (
    <Container className={"py-7 shadow mb-4"}>
      <StyledTab value={tab} onChange={onChange}>
        <Radio.Button value="dashboard">Dashboard</Radio.Button>
        <Radio.Button value="sponsors">Homiylar</Radio.Button>
        <Radio.Button value="students">Talabalar</Radio.Button>
      </StyledTab>
    </Container>
  );
};
