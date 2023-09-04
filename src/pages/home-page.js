import * as React from "react";
import { useState } from "react";
import { Button, Checkbox, Col, Form, Input, Radio, Row } from "antd";
import { StyledTab } from "../components/mini-components/tab";
import { useDispatch, useSelector } from "react-redux";
import { addNewSponsor } from "../store/slices/sponsors";
import { useNavigate } from "react-router-dom";

// Component

function HomePage(props) {
  let [loginEmail, setLoginEmail] = useState("");
  let [loginPassword, setLoginPassword] = useState("");
  let [priceValue, setPriceValue] = useState(null);
  let [typeSponsor, setTypeSponsor] = useState("jismoniy");
  let navigate = useNavigate();

  let sponsors = useSelector((store) => store.sponsors.sponsors);
  let dispatch = useDispatch();

  const onFinish = (values) => {
    console.log("Success:", {
      ...values,
      price: priceValue,
    });

    console.log(sponsors);

    dispatch(addNewSponsor({ ...values, sponsorSum: priceValue }));

    console.log(sponsors);

    navigate("/admin/sponsors");
  };

  return (
    <>
      <Row>
        <Col span={14}>
          <div className="bg-white min-h-[100vh] p-10  px-28">
            <h1 className="mb-10">Homiy sifatida ariza topshirish</h1>

            <StyledTab>
              <Radio.Button
                value="dashboard"
                className=" min-w-[300px] text-center"
                onClick={() => setTypeSponsor("jismoniy")}
              >
                Jismoniy shaxs
              </Radio.Button>
              <Radio.Button
                value="sponsors"
                className=" min-w-[300px] text-center"
                onClick={() => setTypeSponsor("yuridik")}
              >
                Yuridik shaxs
              </Radio.Button>
            </StyledTab>

            <Form onFinish={onFinish} className="mt-10">
              <Form.Item
                label="F.I.Sh. (Familiya Ism Sharifingiz)"
                name="fullName"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Telefon raqamingiz"
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Telefon raqamingiz!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <div className=" mt-14">
                <label htmlFor="" className="font-bold">
                  To‘lov summasi
                </label>

                <div className="flex  items-center justify-center gap-6 mt-4">
                  <span
                    className="btn-style"
                    onClick={() => setPriceValue(1000000)}
                  >
                    1 000 000
                  </span>
                  <span
                    className="btn-style"
                    onClick={() => setPriceValue(5000000)}
                  >
                    5 000 000
                  </span>
                  <span
                    className="btn-style"
                    onClick={() => setPriceValue(7000000)}
                  >
                    7 000 000
                  </span>
                </div>

                <div className="flex  items-center justify-center gap-6 my-6">
                  <span
                    className="btn-style"
                    onClick={() => setPriceValue(10000000)}
                  >
                    10 000 000
                  </span>
                  <span
                    className="btn-style"
                    onClick={() => setPriceValue(30000000)}
                  >
                    30 000 000
                  </span>
                  <span className="btn-style">Boshqa</span>
                </div>
              </div>

              {typeSponsor === "yuridik" ? (
                <Form.Item label="Tashkilot nomi" name="projectName">
                  <Input />
                </Form.Item>
              ) : null}

              <Form.Item className="w-100 text-center">
                <Button
                  type="primary"
                  htmlType="submit"
                  className=" min-w-[100%]"
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>

        <Col span={10}>
          <div className="bg-[#F5F5F7] min-h-[100vh]  p-10  px-28">
            <p className="font-bold" style={{ fontSize: "20px" }}>
              Yuqori sinflarda bolalar shaxs boʻlib, jamoa boʻlib shakllanadi.
              Ayni oʻsha paytda ularni oʻzlari oʻrgangan muhitdan ajratib
              qoʻymaslik kerak.
            </p>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default HomePage;
