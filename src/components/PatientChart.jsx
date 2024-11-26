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
      name: "USA",
      OldPatient: 4000,
      NewPatient: 2400,
    },
    {
      name: "UK",
      OldPatient: 3000,
      NewPatient: 1398,
    },
    {
      name: "India",
      OldPatient: 2000,
      NewPatient: 9800,
    },
    {
      name: "UAE",
      OldPatient: 2780,
      NewPatient: 3908,
    },
    {
      name: "Cannada",
      OldPatient: 1890,
      NewPatient: 4800,
    },
    {
      name: "Others",
      OldPatient: 2390,
      NewPatient: 3800,
    },
  ];
  return (
    <>
      <div>
        <BarChart width={380} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="NewPatient" fill="#8884d8" />
          <Bar dataKey="OldPatient" fill="#82ca9d" />
        </BarChart>
      </div>
    </>
  );
}

export default PatientChart;
