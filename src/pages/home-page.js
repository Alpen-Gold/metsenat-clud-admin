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
    <div className="bg-white">
      <div
        className={"flex justify-between items-center  pt-2 px-20 z-50 mb-4"}
        style={{
          boxShadow: "1px 7px 12px -11px rgba(0, 0, 0, 0.2)",
          background: "white",
        }}
      >
        <div className={"flex items-center gap-3 "}>
          <img
            src={require("../image/Group 18785.png")}
            alt="logo"
            className=" w-[100%]"
          />
        </div>
        <div>
          <ul className={"flex items-center gap-6 "}>
            <li className={"cursor-pointer font-[500]"}>Asosiy</li>
            <li className={"cursor-pointer font-[500]"}>Grantlar</li>
            <li className={"cursor-pointer font-[500]"}>Soliq imtiyozlari</li>
            <li
              className={"flex items-center gap-1 cursor-pointer font-[500]"}
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
      <div className="flex bg-white">
        <div
          style={{
            minHeight: "calc(100vh - 13vh)",
            width: "60%",
            padding: "0 80px",

            background: "white",
          }}
        >
          <Typography
            className={"font-[500]"}
            style={{ fontSize: 40, width: 500 }}
          >
            Homiy sifatida ariza topshirish
          </Typography>

          <Form onFinish={onFinish}>
            <div className={"flex items-center mt-5"}>
              <div
                className={
                  "border border-blue-500 py-3 text-center rounded-s cursor-pointer uppercase"
                }
                style={{
                  backgroundColor: typeSponsor === "jismoniy" ? "#36F" : "#fff",
                  color: typeSponsor === "jismoniy" ? "#fff" : "#36F",
                  width: "50%",
                  border:
                    typeSponsor === "jismoniy"
                      ? "1px solid #36F"
                      : "1px solid #36F",
                }}
                onClick={() => setTypeSponsor("jismoniy")}
              >
                <p className="text-[12px] p-0 m-0">Jismoniy shaxs</p>
              </div>
              <div
                className={
                  "border border-blue-500 py-3 text-center rounded-e cursor-pointer uppercase"
                }
                style={{
                  backgroundColor: typeSponsor === "yuridik" ? "#36F" : "#fff",
                  color: typeSponsor === "yuridik" ? "#fff" : "#36F",
                  border:
                    typeSponsor === "yuridik"
                      ? "1px solid #36F"
                      : "1px solid #36F",
                  width: "50%",
                }}
                onClick={() => setTypeSponsor("yuridik")}
              >
                <p className="text-[12px] p-0 m-0">Yuridik shaxs</p>
              </div>
            </div>

            <div className={"mt-5"}>
              <div>
                <label className={"font-[500]"}>
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
                <label className={"font-[500]"}>
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
            <Typography className={"mt-3 mb-2 font-[500]"}>
              To‘lov summasi
            </Typography>
            <div
              style={{ width: "100%" }}
              className={"flex flex-wrap gap-4 justify-between  "}
            >
              <Button
                style={{
                  minWidth: "200px",
                  minHeight: "61px",
                  fontWeight: "bold",
                  border: priceValue === 1000000 ? "2px solid blue" : "",
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
                  minWidth: "200px",
                  minHeight: "61px",
                  fontWeight: "bold",
                  border: priceValue === 5000000 ? "2px solid blue" : "",
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
                  minWidth: "200px",
                  minHeight: "61px",
                  fontWeight: "bold",
                  border: priceValue === 7000000 ? "2px solid blue" : "",
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
                  minWidth: "200px",
                  minHeight: "61px",
                  fontWeight: "bold",
                  border: priceValue === 10000000 ? "2px solid blue" : "",
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
                  minWidth: "200px",
                  minHeight: "61px",
                  fontWeight: "bold",
                  border: priceValue === 30000000 ? "2px solid blue" : "",
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
                  minWidth: "200px",
                  minHeight: "61px",
                  fontWeight: "bold",
                  border: priceValue === "Boshqa" ? "2px solid blue" : "",
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
                <label className={"font-[500]"}>
                  Tashkilot nomi
                  <Form.Item name="projectName">
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
            width: "40%",
            minHeight: "calc(100vh - 13vh)",
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
              <div className="  h-[440px]">
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={require("../image/clip-work-searches 1 (1).png")}
                  alt="rasm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
