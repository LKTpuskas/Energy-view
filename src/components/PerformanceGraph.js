import React from "react";
import {
  LineChart,
  Legend,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";
import ContentWrapper from "./ContentWrapper";
import { DescriptionTitle } from "../App";

const data = [
  {
    name: "200",
    uv: 40,
    pv: 2,
    amt: 24
  },
  {
    name: "300",
    uv: 30,
    pv: 1,
    amt: 22
  },
  {
    name: "400",
    uv: 20,
    pv: 9,
    amt: 29
  },
  {
    name: "500",
    uv: 78,
    pv: 3,
    amt: 20
  }
];

const PerformanceGraph = () => {
  return (
    <ContentWrapper>
      <DescriptionTitle
        customStyle={`margin-bottom: 20px`}
        title="Performance"
      />
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </ContentWrapper>
  );
};

export default PerformanceGraph;
