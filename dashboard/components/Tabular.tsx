"use client";

import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Image from "next/image";
import CustomBarChart from "./charts/BarChart";
import Columns from "./table/Columns";
import Link from "next/link";

const Tabular = () => {
    const [data, setData] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(true);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("/api/vehicles");
          const data = await response.json();
          setData(data.limitedResults);
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
      <Sidebar id="tabular"/>
      <div className="w-full">
        <div className="flex justify-between items-center w-full">
            <label>
              {" "}
              <h1 className="text-gray-400 text-xl my-10 px-6">
              Electric Vehicle Dashboard (Tabular Data)
              </h1>
            </label>
            <Link className="text-xs block lg:hidden px-4 text-gray-400 hover:underline hover:underline-offset-4" href={"/"}>
              Home
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
         <div className="grid place-items-center max-w-7xl mx-auto w-full px-5 md:px-0">
             <Columns data={data} />
         </div>
        )}
      </div>
    </div>
  </div>
  )
}

export default Tabular