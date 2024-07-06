
import React from "react";
import {
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

const CustomAreaChart = ({ data }: any) => {
  const cityCounts = data.reduce((acc: any, curr: any) => {
    const city = curr.City;
    if (!acc[city]) acc[city] = 0;
    acc[city] += 1;
    return acc;
  }, {});

  const chartData = Object.keys(cityCounts).map((city) => ({
    name: city,
    count: cityCounts[city],
  }));

  return (
    <div className="max-w-7xl w-full flex flex-col justify-between text-[#7f7e79] items-start ">
      <div className="w-full px-10">
        <ResponsiveContainer width="100%" height={500}>
          <AreaChart
            data={chartData}
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
          >
            <XAxis dataKey="name" fill="#fff"/>
            <YAxis fill="#fff"/>
            <Tooltip />
            <Legend />
            <CartesianGrid stroke="#7f7e79" />
            <Area type="monotone" dataKey="count" stroke="#f5d63b" fill="#f5d63b" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CustomAreaChart;

