import React, { useState } from "react";
import ItemTable from "./itemTable";
import {list} from "../../utils/list";

const Table = () => {
  const [selectedCategory, setSelectedCategory] = useState("development");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredList = list.filter(item => item.category === selectedCategory);
  const totalPages = Math.ceil(filteredList.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredList.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="mb-4">
        <button className="px-4 py-2 m-2 bg-blue-500 text-white rounded" onClick={() => { setSelectedCategory("development"); setCurrentPage(1); }}>Development</button>
        <button className="px-4 py-2 m-2 bg-green-500 text-white rounded" onClick={() => { setSelectedCategory("designUIUX"); setCurrentPage(1); }}>Design/UIUX</button>
        <button className="px-4 py-2 m-2 bg-red-500 text-white rounded" onClick={() => { setSelectedCategory("audioVideo"); setCurrentPage(1); }}>Audio/Video</button>
        <button className="px-4 py-2 m-2 bg-yellow-500 text-white rounded" onClick={() => { setSelectedCategory("textDocument"); setCurrentPage(1); }}>Text Document</button>
      </div>
      <table className="w-3/4 text-left m-8 border border-gray-300">
        <thead className="uppercase bg-[#171717] text-[#e5e7eb]" style={{ backgroundColor: '#171717', color: '#e5e7eb' }}>
          <tr>
            <th className="py-0 text-center p-4 w-1/3">Tool</th>
            <th className="py-0 text-center p-4 w-1/3">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-500 bg-[#FFFFFF] text-[#171717]" style={{ backgroundColor: '#FFFFFF', color: '#171717' }}>
          {currentItems.map((item, index) => (
            <ItemTable key={index} title={item.tool.name} link={item.tool.link} description={item.tool.description} />
          ))}
        </tbody>
      </table>
      <div className="flex justify-between w-3/4">
        <button className="px-4 py-2 m-2 bg-gray-500 text-white rounded" onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</button>
        <button className="px-4 py-2 m-2 bg-gray-500 text-white rounded" onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  );
};

export default Table;