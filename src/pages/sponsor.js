import { Container } from "../components/mini-components/container";
import React, { useMemo, useState } from "react";
import {
  Radio,
  Button,
  Table,
  Badge,
  Tag,
  Row,
  Col,
  Typography,
  Modal,
  Form,
  Input,
  Select,
} from "antd";
import imageBig from "../image/clip-work-searches 1.png";
import { SponsorsData } from "../data/sponsors";
import dayjs from "dayjs";
import { StyledTab } from "../components/mini-components/tab";
import { useDispatch, useSelector } from "react-redux";
import {
  EditOutlined,
  EyeOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { SecondaryHeader } from "../components/project-components/secondary-header";
import { CrudHeader } from "../components/project-components/crud-header";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useSponsor } from "../hooks/use-sponsor";
import { editSponsor } from "../store/slices/sponsors";
import { SponsorsSums } from "../data/sponsorsSum";
const { Title } = Typography;

const EditSponsorModal = () => {
  const navigate = useNavigate();
  let [typeJis, setTypeJis] = useState("");
  let [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { sponsor, sponsorIndex } = useSponsor();
  const [form] = Form.useForm();

  const handleChange = (value) => {
    console.log(value.value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
  };

  const handleOk = () => {
    setSearchParams({ edit: "" });
  };

  const handleCancel = () => {
    setSearchParams({ edit: "" });
  };

  const onFinish = (values) => {
    console.log("success", values);

    dispatch(
      editSponsor({
        data: { ...sponsor, ...values },
        index: sponsorIndex,
      })
    );

    setSearchParams({ edit: "" });
  };

  return (
    <Modal
      title="Homiy"
      open={searchParams.get("edit")}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Form
        form={form}
        layout="vertical"
        initialValues={{
          ...sponsor,
        }}
        onFinish={onFinish}
      >
        <Form.Item label="" name="type">
          <Radio.Group>
            <Radio.Button value="yuridik" onClick={() => setTypeJis("yuridik")}>
              Yuridik shaxs
            </Radio.Button>
            <Radio.Button
              value="jismoniy"
              onClick={() => setTypeJis("jismoniy")}
            >
              Jismoniy shaxs
            </Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="F.I.Sh. (Familiya Ism Sharifingiz)"
          rules={[
            {
              required: true,
              message:
                "F.I.Sh. (Familiya Ism Sharifingiz) ni kiritishingiz kerak",
            },
          ]}
          tooltip="F.I.Sh. (Familiya Ism Sharifingiz) ni kiritishingiz kerak"
          name={"fullName"}
        >
          <Input placeholder="input placeholder" />
        </Form.Item>

        <Form.Item
          label="Holati"
          name={"status"}
          tooltip={{
            title: "Holati to'lovi kiritishingiz kerak",
            icon: <InfoCircleOutlined />,
          }}
          rules={[
            { required: true, message: "Holatini  'lovi kiritishingiz kerak" },
          ]}
        >
          <Select
            labelInValue
            defaultValue={{
              value: sponsor?.status,
              label: sponsor?.status,
            }}
            onChange={handleChange}
            options={[
              {
                value: "Tastiqlangan",
                label: "Tastiqlangan",
              },
              {
                value: "Moderatsiyada",
                label: "Moderatsiyada",
              },
              {
                value: "Bekor qilingan",
                label: "Bekor qilingan ",
              },
              {
                value: "Yangi",
                label: "Yangi ",
              },
            ]}
          />
        </Form.Item>

        <Form.Item
          label="Telefon raqam"
          name={"phone"}
          tooltip={{
            title: "Telefon raqam kiritishingiz kerak",
            icon: <InfoCircleOutlined />,
          }}
          rules={[
            { required: true, message: "Telefon raqam kiritishingiz kerak" },
          ]}
        >
          <Input placeholder="input placeholder" />
        </Form.Item>

        <Form.Item
          label="Homiylik summasi"
          name={"sponsorSum"}
          tooltip={{
            title: "Homiylar to'lovi kiritishingiz kerak",
            icon: <InfoCircleOutlined />,
          }}
          rules={[
            { required: true, message: "Homiylar to'lovi kiritishingiz kerak" },
          ]}
        >
          <Select
            labelInValue
            defaultValue={{
              value: sponsor?.sponsorSum,
              label: sponsor?.sponsorSum,
            }}
            onChange={handleChange}
            options={SponsorsSums.map((item, index) => ({
              value: item.sponsorSum,
              label: item.sponsorSum,
            }))}
          />
        </Form.Item>

        <Form.Item
          label="To‘lov turi"
          name={"typePayment"}
          tooltip={{
            title: "Homiylar to'lovi kiritishingiz kerak",
            icon: <InfoCircleOutlined />,
          }}
          rules={[
            { required: true, message: "Homiylar to'lovi kiritishingiz kerak" },
          ]}
        >
          <Select
            labelInValue
            defaultValue={{
              value: sponsor?.typePayment,
              label: sponsor?.typePayment,
            }}
            onChange={handleChange}
            options={[
              {
                value: "payme",
                label: "Payme",
              },
              {
                value: "Uzum",
                label: "Uzum Bank",
              },
              {
                value: "Naqt",
                label: "Naqt Pul",
              },
            ]}
          />
        </Form.Item>

        {typeJis === "jismoniy" || sponsor?.projectName ? (
          <Form.Item
            label="Tashkilot nomi"
            name={"projectName"}
            tooltip={{
              title: "Homiylar to'lovi kiritishingiz kerak",
              icon: <InfoCircleOutlined />,
            }}
            rules={[
              {
                required: true,
                message: "Homiylar to'lovi kiritishingiz kerak",
              },
            ]}
          >
            <Select
              labelInValue
              defaultValue={{
                value: sponsor?.projectName,
                label: sponsor?.projectName,
              }}
              onChange={handleChange}
              options={[
                {
                  value: "Orient Group",
                  label: "Orient Group",
                },
                {
                  value: "Legendarus",
                  label: "Legendarus",
                },
                {
                  value: "Spartaq",
                  label: "Spartaq",
                },
              ]}
            />
          </Form.Item>
        ) : null}

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export const Sponsor = () => {
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();
  const { sponsor, sponsorIndex } = useSponsor();

  return (
    <>
      <EditSponsorModal />
      <CrudHeader
        onBack={() => navigate("/admin/sponsors")}
        title={
          <div className={"flex items-center"}>
            <Typography className={"mr-2 text-xl font-bold"}>
              {sponsor?.fullName}
            </Typography>
            <Tag color={"success"}>{sponsor?.status}</Tag>
          </div>
        }
      />
      <Container className={"py-10 bg-[#f5f5f7] sponsor_h relative"}>
        <Row>
          <Col
            xs={{ span: 24 }}
            md={{ span: 16, offset: 4 }}
            xl={{ span: 12, offset: 6 }}
          >
            <div className={"p-5  bg-white shadow "}>
              <div className={"flex items-center justify-between"}>
                <p level={5} className={"m-0  text-[17px] font-bold"}>
                  Homiy haqida
                </p>
                <button className="border-0 bg-transparent">
                  <Tag
                    color="blue"
                    className=" text-[16px] py-1 px-2 cursor-pointer"
                    onClick={() => {
                      setSearchParams({ edit: true });
                    }}
                  >
                    <EditOutlined /> Tahrirlash
                  </Tag>
                </button>
              </div>
              <div>
                <div className=" flex items-center gap-4 my-3 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="32"
                    viewBox="0 0 28 32"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_40_3938)">
                      <path
                        opacity="0.4"
                        d="M11.9594 25.9231L13 21.5L11 18H17L15 21.5L16.0406 25.9231L14 30L11.9594 25.9231ZM14 16C15.5823 16 17.129 15.5308 18.4446 14.6518C19.7602 13.7727 20.7855 12.5233 21.391 11.0615C21.9965 9.59966 22.155 7.99113 21.8463 6.43928C21.5376 4.88743 20.7757 3.46197 19.6569 2.34315C18.538 1.22433 17.1126 0.462403 15.5607 0.153721C14.0089 -0.15496 12.4003 0.00346625 10.9385 0.608967C9.47672 1.21447 8.22729 2.23985 7.34824 3.55544C6.46919 4.87104 6 6.41775 6 8C6 10.1217 6.84285 12.1566 8.34315 13.6569C9.84344 15.1572 11.8783 16 14 16Z"
                        fill="#2E5BFF"
                      />
                      <path
                        d="M19.9875 18.0376L14 30.0001L8.0125 18.0376C3.55625 18.2501 0 21.8938 0 26.4001V29.0001C0 29.7957 0.31607 30.5588 0.87868 31.1214C1.44129 31.684 2.20435 32.0001 3 32.0001H25C25.7956 32.0001 26.5587 31.684 27.1213 31.1214C27.6839 30.5588 28 29.7957 28 29.0001V26.4001C28 21.8938 24.4437 18.2501 19.9875 18.0376Z"
                        fill="#2E5BFF"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_40_3938">
                        <rect width="28" height="32" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <Typography className="d-flex items-center w-40 font-bold">
                    {sponsor?.fullName}
                  </Typography>
                </div>

                <div className="flex items-center justify-start  gap-32  mt-4">
                  <div>
                    <Typography className="text-[11px] text-gray-500">
                      TELEFON RAQAM
                    </Typography>
                    <Typography className="text-[16px] font-bold ">
                      {sponsor?.phone}
                    </Typography>
                  </div>

                  <div>
                    <Typography className="text-[11px] text-gray-500">
                      HOMIYLIK SUMMASI
                    </Typography>
                    <Typography className="text-[16px] font-bold">
                      {sponsor?.sponsorSum
                        ? Intl.NumberFormat("ru-RU").format(
                            sponsor?.sponsorSum
                          ) + " UZS"
                        : ""}
                    </Typography>
                  </div>
                </div>

                {/* {sponsor?.projectName ? (
                  <div className="mt-4">
                    <Typography className="text-[11px] text-gray-500">
                      TASHKILOT NOMI
                    </Typography>
                    <Typography className="text-[16px] font-bold ">
                      {sponsor?.projectName}
                    </Typography>
                  </div>
                ) : null} */}
              </div>
            </div>
          </Col>
        </Row>

        <img src={imageBig} alt="" className="absolute bottom-0  left-[25%]" />
      </Container>
    </>
  );
};
