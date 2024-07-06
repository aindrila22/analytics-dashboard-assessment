
import React from 'react';
import { XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer, BarChart, Bar } from 'recharts';

const CustomBarChart = ({ data }:any) => {
  const processedData = data.reduce((acc:any, curr:any) => {
    const year = curr["Model Year"];
    const range = curr["Electric Range"];
    if (!acc[year]) acc[year] = { year, totalRange: 0, count: 0 };
    acc[year].totalRange += range;
    acc[year].count += 1;
    return acc;
  }, {});

  const chartData = Object.values(processedData).map((item:any) => ({
    year: item.year,
    averageRange: item.totalRange / item.count,
  }));

  return (
    <ResponsiveContainer width="100%" height={500}>
    <BarChart data={chartData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
      <XAxis dataKey="year" />
      <YAxis />
      <Tooltip />
      <Legend />
      <CartesianGrid stroke="#8884d8" />

      <Bar dataKey="averageRange" fill="#2386aa" />
    </BarChart>
    </ResponsiveContainer>
  );
};

export default CustomBarChart;
