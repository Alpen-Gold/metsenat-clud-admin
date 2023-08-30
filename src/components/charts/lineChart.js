import { useSelector } from "react-redux";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

let RechardExample = () => {
  let studentsData = useSelector((state) => state.students.students);
  let sponsorsData = useSelector((state) => state.sponsors.sponsors);

  let data = [
    { name: "Yanvar", students: 21, sponsors: 22 },
    { name: "Fevral", students: 31, sponsors: 27 },
    { name: "Mart", students: 41, sponsors: 35 },
    { name: "Aprel", students: 51, sponsors: 67 },
    { name: "May", students: 95, sponsors: 80 },
    { name: "Iyun", students: 120, sponsors: 140 },
    { name: "Iyul", students: 130, sponsors: 160 },
    { name: "Avgust", students: 150, sponsors: 140 },
    { name: "Sentabr", students: 230, sponsors: 190 },
    { name: "Oktabr", students: 250, sponsors: 265 },
    { name: "Noyabr", students: 190, sponsors: 240 },
    {
      name: "Dekabr",
      students: studentsData.length,
      sponsors: sponsorsData.length,
    },
  ];

  return (
    <div className="w-100  bg-white">
      <LineChart width={1200} height={300} data={data}>
        <Line
          type="monotone"
          dataKey="students"
          stroke="#2196f3"
          strokeWidth="3px"
        />
        <Line
          type="monotone"
          dataKey="sponsors"
          stroke="#f44236"
          strokeWidth="3px"
        />
        <CartesianGrid stroke="grey" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default RechardExample;
