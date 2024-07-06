// src/components/Charts/PieChart.js
import React from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  Cell,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const CustomPieChart = ({ data }: any) => {
  const typesCount = data.reduce((acc: any, curr: any) => {
    const type = curr["Electric Vehicle Type"];
    if (!acc[type]) acc[type] = 0;
    acc[type] += 1;
    return acc;
  }, {});

  const chartData = Object.keys(typesCount).map((type, index) => ({
    name: type,
    value: typesCount[type],
    fill: COLORS[index % COLORS.length],
  }));

  return (
    <ResponsiveContainer width="100%" height={450}>
      <PieChart>
        <Pie
          dataKey="value"
          isAnimationActive={true}
          data={chartData}
          cx="50%"
          cy="50%"
          outerRadius={190}
          fill="#8884d8"
          label
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.fill} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CustomPieChart;
