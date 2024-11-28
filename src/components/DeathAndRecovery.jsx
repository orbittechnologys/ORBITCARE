import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function PatientChart() {
  const data = [
    {
      name: "Jan",
      Death: 4000,
      Recovery: 2400,
    },
    {
      name: "Feb",
      Death: 3000,
      Recovery: 1398,
    },
    {
      name: "Mar",
      Death: 2000,
      Recovery: 4000,
    },
    {
      name: "Apr",
      Death: 2780,
      Recovery: 3908,
    },
    {
      name: "May",
      Death: 2390,
      Recovery: 7800,
    },
    {
      name: "June",
      Death: 1890,
      Recovery: 7000,
    },
  ];
  return (
    <>
      <div>
        <BarChart width={380} height={320} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          {/* <YAxis /> */}
          <Tooltip />
          <Legend />
          <Bar dataKey="Recovery" fill="#8884d8" />
          <Bar dataKey="Death" fill="#82ca9d" />
        </BarChart>
      </div>
    </>
  );
}

export default PatientChart;
