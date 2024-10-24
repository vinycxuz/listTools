import React, { useState } from "react";
import ItemTable from "./itemTable";
import { list } from "../../utils/list";
import Button from "../button";

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
        <Button text="Development" onClick={() => { setSelectedCategory("development"); setCurrentPage(1); }} />
        <Button text="Design/UIUX" onClick={() => { setSelectedCategory("designUIUX"); setCurrentPage(1); }} />
        <Button text="Audio/Video" onClick={() => { setSelectedCategory("audioVideo"); setCurrentPage(1); }} />
        <Button text="Text Document" onClick={() => { setSelectedCategory("textDocument"); setCurrentPage(1); }} />
      </div>
      <table className="w-3/4 text-left font-mono m-8 border-none">
        <thead className="uppercase bg-[#171717] text-[#e5e7eb]" style={{ backgroundColor: '#171717', color: '#e5e7eb' }}>
          <tr>
            <th className="py-0 text-center p-4 w-1/3 border border-gray-300">Tool</th>
            <th className="py-0 text-center p-4 w-1/3 border border-gray-300">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-500 bg-[#171717] text-[#ffffff]" style={{ backgroundColor: '#171717', color: '#ffffff' }}>
          {currentItems.map((item, index) => (
            <ItemTable key={index} title={item.tool.name} link={item.tool.link} description={item.tool.description} />
          ))}
        </tbody>
      </table>
      <div className="flex justify-between w-3/4">
        <Button text="Previous" onClick={handlePreviousPage} disabled={currentPage === 1} />
        <Button text="Next" onClick={handleNextPage} disabled={currentPage === totalPages} />
      </div>
    </div>
  );
};

export default Table;