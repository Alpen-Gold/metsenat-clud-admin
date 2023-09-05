import * as React from "react";
import { useState } from "react";
import {
  Button,
  Checkbox,
  Col,
  Form,
  Input,
  Radio,
  Row,
  Typography,
} from "antd";
import { StyledTab } from "../components/mini-components/tab";
import { useDispatch, useSelector } from "react-redux";
import { addNewSponsor } from "../store/slices/sponsors";
import { useNavigate } from "react-router-dom";

// Component

function HomePage(props) {
  let [loginEmail, setLoginEmail] = useState("");
  let [loginPassword, setLoginPassword] = useState("");
  // let [priceValue, setPriceValue] = useState(1000000);
  let [typeSponsor, setTypeSponsor] = useState("jismoniy");
  let sponsors = useSelector((store) => store.sponsors.sponsors);
  const [priceValue, setPriceValue] = useState(1000000);
  const [activeButton, setActiveButton] = useState(null);
  const [another, setAnother] = useState(false);

  let navigate = useNavigate();
  let dispatch = useDispatch();

  const onFinish = (values) => {
    console.log("Success:", {
      ...values,
      price: priceValue,
    });

    console.log(sponsors);

    dispatch(addNewSponsor({ ...values, sponsorSum: priceValue }));

    console.log(sponsors);

    // navigate("/admin/sponsors");
  };

  return (
    <>
      <nav className="flex items-center justify-between">
        <div className=""></div>
      </nav>

      {/* <Row>
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
                    className={`btn-style ${
                      activeButton === 1000000 ? "activeBtn" : ""
                    }`}
                    onClick={() => {
                      setPriceValue(1000000);
                      setActiveButton(1000000);
                    }}
                  >
                    1 000 000
                  </span>
                  <span
                    className={`btn-style ${
                      activeButton === 5000000 ? "activeBtn" : ""
                    }`}
                    onClick={() => {
                      setPriceValue(5000000);
                      setActiveButton(5000000);
                    }}
                  >
                    5 000 000
                  </span>
                  <span
                    className={`btn-style ${
                      activeButton === 7000000 ? "activeBtn" : ""
                    }`}
                    onClick={() => {
                      setPriceValue(7000000);
                      setActiveButton(7000000);
                    }}
                  >
                    7 000 000
                  </span>
                </div>

                <div className="flex  items-center justify-center gap-6 my-6">
                  <span
                    className={`btn-style ${
                      activeButton === 10000000 ? "activeBtn" : ""
                    }`}
                    onClick={() => {
                      setPriceValue(10000000);
                      setActiveButton(10000000);
                    }}
                  >
                    10 000 000
                  </span>
                  <span
                    className={`btn-style ${
                      activeButton === 30000000 ? "activeBtn" : ""
                    }`}
                    onClick={() => {
                      setPriceValue(30000000);
                      setActiveButton(30000000);
                    }}
                  >
                    30 000 000
                  </span>
                  <span
                    className={`btn-style ${
                      activeButton === "Boshqa" ? "activeBtn" : ""
                    }`}
                  >
                    Boshqa
                  </span>
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
      </Row> */}

      {/* element --------------------------------------------------- */}

      <div
        className={"flex justify-between items-center py-5 px-20"}
        style={{
          boxShadow: "1px 7px 12px -11px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div className={"flex items-center gap-3"}>
          <img src={require("../image/Group 18785.png")} alt="logo" />
          <div
            className={"py-1 px-2"}
            style={{ backgroundColor: "#E94A47", borderRadius: 5 }}
          >
            <Typography
              style={{ fontSize: 10, color: "#fff", fontWeight: "bold" }}
            >
              CLUB
            </Typography>
          </div>
        </div>
        <div>
          <ul className={"flex items-center gap-5"}>
            <li className={"cursor-pointer"}>Asosiy</li>
            <li className={"cursor-pointer"}>Grantlar</li>
            <li className={"cursor-pointer"}>Soliq imtiyozlari</li>
            <li
              className={"flex items-center gap-1 cursor-pointer"}
              onClick={() => navigate("/admin")}
            >
              Kirish
            </li>
            <li>
              <Button className={"border-2 border-blue-600 text-blue-600"}>
                Ro‘yxatdan o’tish
              </Button>
            </li>
          </ul>
        </div>
      </div>
      <div className={"flex"}>
        <div
          style={{
            height: "calc(100vh - 10vh)",
            width: "70%",
            padding: "50px 80px",
          }}
        >
          <Typography
            className={"font-bold"}
            style={{ fontSize: 40, width: 500 }}
          >
            Homiy sifatida ariza topshirish
          </Typography>

          <Form onFinish={onFinish}>
            <div className={"flex items-center mt-5"}>
              <div
                className={
                  "border border-blue-500 py-2 text-center rounded-s cursor-pointer"
                }
                style={{
                  backgroundColor: typeSponsor === "jismoniy" ? "#36F" : "#fff",
                  color: typeSponsor === "jismoniy" ? "#fff" : "black",
                  width: "50%",
                }}
                onClick={() => setTypeSponsor("jismoniy")}
              >
                Jismoniy shaxs
              </div>
              <div
                className={
                  "border border-blue-500 py-2 text-center rounded-e cursor-pointer"
                }
                style={{
                  backgroundColor: typeSponsor === "yuridik" ? "#36F" : "#fff",
                  color: typeSponsor === "yuridik" ? "#fff" : "black",
                  width: "50%",
                }}
                onClick={() => setTypeSponsor("yuridik")}
              >
                Yuridik shaxs
              </div>
            </div>

            <div className={"mt-5"}>
              <div>
                <label className={"text-bold"}>
                  F.I.Sh. (Familiya Ism Sharifingiz)
                  <Form.Item
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
                </label>
              </div>
              <div className={"mt-5"}>
                <label className={"text-bold"}>
                  Telefon raqamingiz
                  <Form.Item
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
                </label>
              </div>
            </div>
            <Typography className={"mt-3 font-bold"}>To‘lov summasi</Typography>
            <div style={{ width: "100%" }} className={"flex flex-wrap gap-2"}>
              <Button
                style={{
                  width: "32%",
                  fontWeight: "bold",
                  border: priceValue === 1000000 ? "1px solid blue" : "",
                }}
                onClick={() => {
                  setAnother(false);
                  setPriceValue(1000000);
                }}
              >
                1 000 000
                <span
                  style={{
                    fontSize: 10,
                    marginInlineStart: 2,
                    color: "#2E5BFF",
                  }}
                >
                  UZS
                </span>
              </Button>
              <Button
                style={{
                  width: "32%",
                  fontWeight: "bold",
                  border: priceValue === 5000000 ? "1px solid blue" : "",
                }}
                onClick={() => {
                  setAnother(false);
                  setPriceValue(5000000);
                }}
              >
                5 000 000
                <span
                  style={{
                    fontSize: 10,
                    marginInlineStart: 2,
                    color: "#2E5BFF",
                  }}
                >
                  UZS
                </span>
              </Button>
              <Button
                style={{
                  width: "32%",
                  fontWeight: "bold",
                  border: priceValue === 7000000 ? "1px solid blue" : "",
                }}
                onClick={() => {
                  setAnother(false);
                  setPriceValue(7000000);
                }}
              >
                7 000 000
                <span
                  style={{
                    fontSize: 10,
                    marginInlineStart: 2,
                    color: "#2E5BFF",
                  }}
                >
                  UZS
                </span>
              </Button>
              <Button
                style={{
                  width: "32%",
                  fontWeight: "bold",
                  border: priceValue === 10000000 ? "1px solid blue" : "",
                }}
                onClick={() => {
                  setAnother(false);
                  setPriceValue(10000000);
                }}
              >
                10 000 000
                <span
                  style={{
                    fontSize: 10,
                    marginInlineStart: 2,
                    color: "#2E5BFF",
                  }}
                >
                  UZS
                </span>
              </Button>
              <Button
                style={{
                  width: "32%",
                  fontWeight: "bold",
                  border: priceValue === 30000000 ? "1px solid blue" : "",
                }}
                onClick={() => {
                  setAnother(false);
                  setPriceValue(30000000);
                }}
              >
                30 000 000
                <span
                  style={{
                    fontSize: 10,
                    marginInlineStart: 2,
                    color: "#2E5BFF",
                  }}
                >
                  UZS
                </span>
              </Button>
              <Button
                style={{
                  width: "32%",
                  fontWeight: "bold",
                  border: priceValue === "Boshqa" ? "1px solid blue" : "",
                }}
                onClick={() => {
                  setAnother(true);
                  setPriceValue("Boshqa");
                }}
              >
                BOSHQA
              </Button>
              {another ? (
                <Input onChange={(e) => setPriceValue(e.target.value)} />
              ) : null}
            </div>
            {typeSponsor === "yuridik" && (
              <div className={"mt-5"}>
                <label className={"text-bold"}>
                  Tashkilot nomi
                  <Form.Item label="Tashkilot nomi" name="projectName">
                    <Input />
                  </Form.Item>
                </label>
              </div>
            )}

            <Form.Item className="w-100 text-center">
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  backgroundColor: "#2E5BFF",
                  color: "#fff",
                  width: "100%",
                  marginTop: 20,
                }}
              >
                Yuborish
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div
          style={{
            backgroundColor: "#F5F5F7",
            width: "30%",
            height: "calc(100vh - 10vh)",
          }}
        >
          <div>
            <div style={{ padding: 40 }}>
              <Typography style={{ fontSize: 20, fontWeight: "bold" }}>
                Yuqori sinflarda bolalar shaxs boʻlib, jamoa boʻlib shakllanadi.
                Ayni oʻsha paytda ularni oʻzlari oʻrgangan muhitdan ajratib
                qoʻymaslik kerak.
              </Typography>
              <div className={"flex items-center gap-5 mt-5"}>
                <img
                  style={{
                    width: 50,
                    height: 50,
                    objectFit: "cover",
                    borderRadius: 15,
                  }}
                  src="https://president.uz/uploads/0d737f64-7ed9-dae5-b4b4-4e922162cc8b_lists_6457.jpg"
                  alt="rasm"
                />
                <div>
                  <Typography style={{ fontWeight: "bold" }}>
                    Shavkat Mirziyoyev
                  </Typography>
                  <Typography>O‘zbekiston Respublikasi Prezidenti</Typography>
                </div>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-end",
                height: "52vh",
              }}
            >
              <img
                style={{ width: "100%" }}
                src={require("../image/clip-work-searches 1 (1).png")}
                alt="rasm"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
