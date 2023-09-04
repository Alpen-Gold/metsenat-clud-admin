import { Container } from "../components/mini-components/container";
import React, { useEffect, useMemo, useState } from "react";
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
// import { useSponsor } from "../hooks/use-student";
import { editSponsor } from "../store/slices/sponsors";
import { SponsorsSums } from "../data/sponsorsSum";
import { useStudent } from "../hooks/use-student";
import { StudentHeader } from "../components/project-components/crud-header-student";
import { OtmData } from "../data/univerType";
import {
  setStudentSponserIndex,
  editStudent,
  newSponsorAdd,
  setEditSponsorValue,
  setEditPaidSponsorValue,
  editSponsorClick,
  editFullSponsor,
  deleteStudentSponsor,
} from "../store/slices/students";
import { Label } from "recharts";
const { Title } = Typography;

const EditSponsorModal = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let [typeJis, setTypeJis] = useState("");
  let [paidSponsorValue, setPaidSponsorValue] = useState("");
  let [newSponsorValue, setNewSponsorValue] = useState(
    SponsorsData[0].fullName
  );

  let [searchParams, setSearchParams] = useSearchParams();
  const { student, studentIndex } = useStudent();
  const [form] = Form.useForm();
  let { studentSponsorIndex, editSponsorValue, editPaidSponsorValue } =
    useSelector((store) => store.students);

  let [clickSponsorIndex, setClickSponsorIndex] = useState(studentSponsorIndex);

  useEffect(() => {
    setClickSponsorIndex(studentSponsorIndex);
  }, [studentSponsorIndex]);

  const handleOk = () => {
    setSearchParams({});
  };

  const handleCancel = () => {
    setSearchParams({});
  };

  const onFinish = (values) => {
    console.log("success", values);

    dispatch(
      editStudent({
        data: { ...student, ...values },
        index: studentIndex,
      })
    );

    setSearchParams({});
  };

  const handleChange = (value) => {
    setNewSponsorValue(value);
  };

  const addNewSponsor = () => {
    dispatch(
      newSponsorAdd({
        newSponsorValue: newSponsorValue,
        paidSponsorValue: paidSponsorValue,
        studentIndex: studentIndex,
      })
    );

    setPaidSponsorValue(null);
    setNewSponsorValue(SponsorsData[0].fullName);
    setSearchParams({});
  };

  return (
    <Modal
      title="Tahrirlash"
      open={
        searchParams.get("edit") ||
        searchParams.get("editSponsor") ||
        searchParams.get("addSponsor")
      }
      onOk={handleOk}
      onCancel={handleCancel}
    >
      {searchParams.get("edit") ? (
        <Form
          form={form}
          layout="vertical"
          initialValues={{
            ...student,
          }}
          onFinish={onFinish}
        >
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
            label="To‘lov turi"
            name={"univerType"}
            tooltip={{
              title: "OTM kiritishingiz kerak",
              icon: <InfoCircleOutlined />,
            }}
            rules={[{ required: true, message: "OTM kiritishingiz kerak" }]}
          >
            <Select
              options={OtmData.map((item, index) => ({
                value: item.value,
                label: item.label,
              }))}
            />
          </Form.Item>

          <Form.Item
            label="Kontrakt miqdori"
            name={"kontraktSum"}
            tooltip={{
              title: "Kontrakt miqdori kiritishingiz kerak",
              icon: <InfoCircleOutlined />,
            }}
            rules={[
              {
                required: true,
                message: "Kontrakt miqdori kiritishingiz kerak",
              },
            ]}
          >
            <Input placeholder="input placeholder" />
          </Form.Item>

          <Form.Item className=" text-end">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      ) : searchParams.get("addSponsor") ? (
        <>
          <label htmlFor="add-sponsor" className="">
            F.I.Sh. (Familiya Ism Sharifingiz)
          </label>

          <Select
            className="mt-2"
            style={{
              width: "100%",
            }}
            value={newSponsorValue}
            onChange={handleChange}
            options={SponsorsData.map((item, index) => {
              return {
                value: item.fullName,
                label: item.fullName,
              };
            })}
          />

          <div className="mt-7">
            <label htmlFor="add-sponsor" className="">
              Ajratilingan summa
            </label>

            <Input
              placeholder="Summani kiriting . . ."
              id="add-sponsor"
              className="mt-2"
              value={paidSponsorValue}
              onChange={(e) => setPaidSponsorValue(e.target.value)}
            />
          </div>

          <Button className=" mt-14  " onClick={() => addNewSponsor()}>
            Submit
          </Button>
        </>
      ) : (
        <>
          <label htmlFor="add-sponsor" className="">
            F.I.Sh. (Familiya Ism Sharifingiz)
          </label>

          <Select
            className="mt-2"
            style={{
              width: "100%",
            }}
            value={editSponsorValue}
            onChange={(e) => dispatch(setEditSponsorValue(e))}
            options={SponsorsData.map((item, index) => {
              return {
                value: item.fullName,
                label: item.fullName,
              };
            })}
          />

          <div className="mt-7">
            <label htmlFor="add-sponsor" className="">
              Ajratilingan summa
            </label>

            <Input
              placeholder="Summani kiriting . . ."
              id="add-sponsor"
              className="mt-2"
              value={editPaidSponsorValue}
              onChange={(e) =>
                dispatch(setEditPaidSponsorValue(e.target.value))
              }
            />
          </div>

          <div className="flex items-center justify-between">
            <Button
              className=" mt-14  "
              onClick={() => (
                dispatch(deleteStudentSponsor(studentIndex)),
                setSearchParams({})
              )}
            >
              Delete
            </Button>

            <Button
              className=" mt-14  "
              onClick={() => (
                dispatch(editFullSponsor(studentIndex)), setSearchParams({})
              )}
            >
              Submit
            </Button>
          </div>
        </>
      )}
    </Modal>
  );
};

export const Student = () => {
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();
  const { student, studentIndex } = useStudent();
  let dispatch = useDispatch();

  let students = useSelector((store) => store.students.students);

  return (
    <>
      <EditSponsorModal />
      <StudentHeader
        onBack={() => navigate("/admin/students")}
        title={
          <div className={"flex items-center justify-between   flex-1"}>
            <Typography className={"mr-2 text-xl font-bold"}>
              {student?.fullName}
            </Typography>
            <Tag
              color="blue"
              className=" text-[16px] py-1 px-2 cursor-pointer "
              onClick={() => {
                setSearchParams({ addSponsor: true });
              }}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M19.9999 11.9999H4.00007"
                    stroke="#3365FC"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 4V19.9999"
                    stroke="#3365FC"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              Homiy qo‘shish
            </Tag>
          </div>
        }
      />
      <Container className={"pt-10 pb-0 bg-[#f5f5f7] sponsor_h relative"}>
        <Row>
          <Col
            xs={{ span: 24 }}
            md={{ span: 16, offset: 4 }}
            xl={{ span: 12, offset: 6 }}
          >
            <div className={"p-5  bg-white shadow "}>
              <div className={"flex items-center justify-between"}>
                <p level={5} className={"m-0  text-[17px] font-bold"}>
                  Talaba haqida
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

              <Tag color="blue" className="my-4">
                Asosiy ma’lumotlar
              </Tag>

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
                    {student?.fullName}
                  </Typography>
                </div>

                <div>
                  <Typography className="text-[11px] text-gray-500">
                    TELEFON RAQAM
                  </Typography>
                  <Typography className="text-[16px] font-bold ">
                    {student?.phone}
                  </Typography>
                </div>

                <Tag color="blue" className="my-5 ">
                  O‘qish joyi haqida ma’lumot
                </Tag>

                <div className="flex items-center justify-start gap-36 mt-4">
                  <div>
                    <div className="mb-5">
                      <Typography className="text-[11px] text-gray-500">
                        OTM
                      </Typography>
                      <Typography className="text-[16px] font-bold ">
                        {student?.univerType}
                      </Typography>
                    </div>

                    <div>
                      <Typography className="text-[11px] text-gray-500">
                        Ajratilingan summa
                      </Typography>
                      <Typography className="text-[16px] font-bold ">
                        {Intl.NumberFormat("en-En").format(student?.sponsorSum)}
                        UZS
                      </Typography>
                    </div>
                  </div>

                  <div>
                    <div className="mb-5">
                      <Typography className="text-[11px] text-gray-500">
                        Talabalik turi
                      </Typography>
                      <Typography className="text-[16px] font-bold ">
                        {student?.statusStudents}
                      </Typography>
                    </div>

                    <div>
                      <Typography className="text-[11px] text-gray-500">
                        Kontrakt miqdori
                      </Typography>
                      <Typography className="text-[16px] font-bold ">
                        {Intl.NumberFormat("en-En").format(
                          student?.kontraktSum
                        )}
                        UZS
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <img
          src={imageBig}
          alt=""
          className="absolute bottom-0  hidden  left-[25%]"
        />
      </Container>

      <Container>
        <Row>
          <Col
            xs={{ span: 24 }}
            md={{ span: 16, offset: 4 }}
            xl={{ span: 12, offset: 6 }}
          >
            <div className="p-5  bg-white shadow">
              <div className={" flex items-center justify-between mb-5"}>
                <p level={5} className={"m-0  text-[17px] font-bold"}>
                  Talabaga homiylar
                </p>

                <Tag
                  color="blue"
                  className=" text-[16px] py-1 px-2 cursor-pointer"
                  onClick={() => {
                    setSearchParams({ addSponsor: true });
                  }}
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M19.9999 11.9999H4.00007"
                        stroke="#3365FC"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12 4V19.9999"
                        stroke="#3365FC"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  Homiy qo‘shish
                </Tag>
              </div>
              <div>
                <table className="w-[100%] ">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>f.i.sh</th>
                      <th>Ajratilingan summa</th>
                      <th>Amallar</th>
                    </tr>
                  </thead>

                  <tbody>
                    {students[studentIndex]?.sponsorsStudent.map(
                      (item, index) => (
                        <tr key={index}>
                          <td className=" text-center font-bold">{index}</td>
                          <td className=" text-center font-bold">
                            {item.sponsorFullName}
                          </td>
                          <td className=" text-center font-bold">
                            {Intl.NumberFormat("en-En").format(
                              item.sponsorPrice
                            )}
                            <span className="font-bold text-gray-400 ms-2">
                              UZS
                            </span>
                          </td>
                          <td
                            className=" text-center"
                            onClick={() => (
                              setSearchParams({ editSponsor: true }),
                              dispatch(
                                setStudentSponserIndex({
                                  indexSponsor: index,
                                })
                              ),
                              dispatch(editSponsorClick(studentIndex))
                            )}
                          >
                            <Tag
                              color="blue"
                              className=" text-[16px] py-1 px-2 cursor-pointer"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <g clip-path="url(#clip0_31_1979)">
                                  <path
                                    d="M9 7H6C5.46957 7 4.96086 7.21071 4.58579 7.58579C4.21071 7.96086 4 8.46957 4 9V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H15C15.5304 20 16.0391 19.7893 16.4142 19.4142C16.7893 19.0391 17 18.5304 17 18V15"
                                    stroke="#3467FF"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M9 15H12L20.5 6.49998C20.8978 6.10216 21.1213 5.56259 21.1213 4.99998C21.1213 4.43737 20.8978 3.89781 20.5 3.49998C20.1022 3.10216 19.5626 2.87866 19 2.87866C18.4374 2.87866 17.8978 3.10216 17.5 3.49998L9 12V15Z"
                                    stroke="#3467FF"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M16 5L19 8"
                                    stroke="#3467FF"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_31_1979">
                                    <rect width="24" height="24" fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </Tag>
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
