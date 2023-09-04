import { InfoCircleOutlined, UserOutlined } from "@ant-design/icons";

import {
  Button,
  Checkbox,
  Col,
  Form,
  Input,
  Radio,
  Row,
  Select,
  Typography,
} from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../components/mini-components/container";
import { StudentHeader } from "../components/project-components/crud-header-student";
import { OtmData } from "../data/univerType";
import { addNewStudent } from "../store/slices/students";

export const AddStudent = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  let [itemValue, setItemValue] = useState({
    fullName: "",
    statusStudents: "",
    univerType: "",
    kontraktSum: 0,
    phone: "",
  });

  let dispatch = useDispatch();

  const onFinish = (value) => {
    dispatch(addNewStudent(value));

    navigate("/admin/students");
    console.log(value);
  };

  return (
    <>
      <StudentHeader
        onBack={() => navigate("/admin/students")}
        title={
          <div className={"flex items-center justify-between   flex-1"}>
            <Typography className={"mr-2 text-xl font-bold"}>
              Talaba qo‘shish
            </Typography>
          </div>
        }
      />
      <Container>
        <Row>
          <Col
            xs={{ span: 24 }}
            md={{ span: 16, offset: 4 }}
            xl={{ span: 12, offset: 6 }}
          >
            <div className="p-5 bg-white shadow my-5">
              <Form
                layout="vertical"
                initialValues={{
                  ...itemValue,
                }}
                onFinish={onFinish}
              >
                <div className="flex items-center justify-between gap-4">
                  <Form.Item
                    label="F.I.Sh. (Familiya Ism Sharif)"
                    name={"fullName"}
                    className=" flex-1"
                    rules={[
                      {
                        required: true,
                        message: "Please input your fullName!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    label="Telefon raqam"
                    name={"phone"}
                    className=" flex-1"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Phone!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </div>

                <Form.Item
                  label="OTM"
                  name={"univerType"}
                  tooltip={{
                    title: "OTM tanlashingiz kerak",
                    icon: <InfoCircleOutlined />,
                  }}
                  rules={[
                    { required: true, message: "OTM kiritishingiz kerak" },
                  ]}
                >
                  <Select
                    placeholder="OTM ni tanlang"
                    options={OtmData.map((item, index) => ({
                      value: item.value,
                      label: item.label,
                    }))}
                  />
                </Form.Item>

                <div className="flex items-center justify-between gap-4">
                  <Form.Item
                    label="Talabalik turi"
                    name={"statusStudents"}
                    className=" flex-1"
                    tooltip={{
                      title: "Talabalik turi tanlashingiz kerak",
                      icon: <InfoCircleOutlined />,
                    }}
                    rules={[
                      {
                        required: true,
                        message: "Talabalik turi kiritishingiz kerak",
                      },
                    ]}
                  >
                    <Select
                      options={[
                        { value: "Magist", label: "Magistr" },
                        { value: "Bakalavr", label: "Bakalavr" },
                        { value: "Budjet", label: "Budjet" },
                      ]}
                      //   defaultValue="Magist"
                    />
                  </Form.Item>

                  <Form.Item
                    label="Kontrakt summa"
                    name={"kontraktSum"}
                    className=" flex-1"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Phone!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </div>

                <Form.Item className="w-100 flex justify-end">
                  <Button type="primary" htmlType="submit">
                    + Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
