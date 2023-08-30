import { Container } from "../mini-components/container";
import { StyledTab } from "../mini-components/tab";
import { Button, Radio, Tag, Typography } from "antd";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";

export const CrudHeader = ({ title, onBack }) => {
  return (
    <Container className={"py-7 shadow flex items-center gap-3"}>
      <Button size={"small"} className={"border-0"} onClick={onBack}>
        <ArrowLeftOutlined />
      </Button>
      <Typography>{title}</Typography>
    </Container>
  );
};
