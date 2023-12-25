"use client";
import React, { useMemo } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, LabelList } from "recharts";

interface DataItem {
  name: string;
  value: number;
}

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Chart = ({ data }: { data: DataItem[] }) => {
  const pieChartData = useMemo(
    () =>
      data.map((_, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      )),
    []
  );

  return (
    <ResponsiveContainer
      width="100%"
      height={350}
      className="bg-black-200 rounded-lg md:mt-12 mt-4 mb-6"
    >
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={130}
          fill="#8884d8"
          dataKey="value"
        >
          {pieChartData}
          <LabelList dataKey="name" position="outside" />
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default Chart;
