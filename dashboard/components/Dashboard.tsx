"use client";

import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import CustomBarChart from "./charts/BarChart";

import Tabs from "./Tabs";
import Image from "next/image";
import Link from "next/link";

const Dashboard = () => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/vehicle_list");
        const data = await response.json();
        setData(data.results.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  console.log(data);
  return (
    <div>
      <Navbar />

      <div className="flex justify-start items-start w-full">
        <Sidebar id="barchart" />
        <div className="w-full">
          <Tabs id="barchart" />
          <div className="flex justify-between items-center w-full">
            <label>
              {" "}
              <h1 className="text-gray-400 text-xl my-10 px-6">
                Electric Vehicle Dashboard (Avg Range / Year)
              </h1>
            </label>
            <Link className="text-xs px-4 text-gray-400 hover:underline hover:underline-offset-4" href={"/tabular"}>
              Check on Tabular Data
            </Link>
          </div>
          {loading ? (
            <div className="pt-20 grid place-items-center">
              <Image
                src={"/loading.gif"}
                alt="loading..."
                width={80}
                height={80}
              />
            </div>
          ) : (
            <CustomBarChart data={data} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
