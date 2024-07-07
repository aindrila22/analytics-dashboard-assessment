"use client";

import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/20/solid";
import React, { useState } from "react";

const Columns = ({ data }: any) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<any>({});
  const rowsPerPage = 20;

  // Create table headers from keys
  const headers = Object.keys(data[0] || {});

  // Filter data based on filters
  const filteredData = data.filter((row: any) => {
    return headers.every((header: any) => {
      if (!filters[header]) return true;
      return String(row[header])
        .toLowerCase()
        .includes(filters[header].toLowerCase());
    });
  });

  // Pagination logic
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentData = filteredData.slice(
    indexOfFirstRow,
    indexOfFirstRow + rowsPerPage
  );
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  const handleFilterChange = (header: string, value: string) => {
    setFilters({ ...filters, [header]: value });
    setCurrentPage(1); // Reset to first page when filters change
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-center w-full px-5">
        <div className="w-full text-green-400">Showing {rowsPerPage} datas</div>
        <div className="flex justify-end items-center w-full mb-4 text-yellow-200 space-x-4">
          <button
            className=" text-white text-xs bg-blue-900 rounded-md py-1 px-2 flex justify-center items-center"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <ChevronDoubleLeftIcon className="h-5 w-5" />{" "}
            <label> Previous</label>
          </button>
          <span className="text-lg">
            {" "}
            Page {currentPage} of {totalPages}{" "}
          </span>
          <button
            className=" text-white text-xs bg-blue-900 rounded-md py-1 px-2 flex justify-center items-center"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            <label> Next</label> <ChevronDoubleRightIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="px-10 w-full">
          <thead className="border border-gray-400">
            <tr className="border border-gray-400">
              {headers.map((header) => (
                <th
                  className="border-r border-gray-400 text-sky-400 text-sm font-bold px-6 w-full"
                  key={header}
                >
                  {header}
                  <input
                    type="text"
                    placeholder={`Filter ${header}`}
                    className="mt-2 block w-auto border border-gray-700 rounded-md p-1 shadow-sm outline-none"
                    value={filters[header] || ""}
                    onChange={(e) => handleFilterChange(header, e.target.value)}
                  />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentData.map((ele: any, idx: any) => (
              <tr key={idx}>
                {headers.map((header) => (
                  <td
                    className="border border-gray-500 text-white text-sm px-3 py-2"
                    key={header}
                  >
                    {ele[header]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between flex-col sm:flex-row items-center w-full my-10 px-5">
        <div className="w-full text-green-400">Showing {rowsPerPage} datas</div>
        <div className="flex justify-end items-center w-full mb-4 text-yellow-200 space-x-4">
          <button
            className="bg-blue-900 rounded-md text-white text-xs py-1 px-2 flex justify-center items-center"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <ChevronDoubleLeftIcon className="h-5 w-5" />{" "}
            <label> Previous</label>
          </button>
          <span className="text-lg">
            {" "}
            Page {currentPage} of {totalPages}{" "}
          </span>
          <button
            className="bg-blue-900 rounded-md text-white text-xs py-1 px-2 flex justify-center items-center"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            <label> Next</label> <ChevronDoubleRightIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Columns;
