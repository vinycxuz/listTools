import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemTable from "./itemTable";
import Button from "../button";
import { FaSortAlphaUp } from "react-icons/fa";

const Table = () => {
  const [selectedCategory, setSelectedCategory] = useState("development");
  const [currentPage, setCurrentPage] = useState(1);
  const [tools, setTools] = useState([]);
  const [isSorted, setIsSorted] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchTools = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/tools");
        setTools(response.data);
      } catch (error) {
        console.error("Error fetching tools:", error);
      }
    };

    fetchTools();
  }, []);

  const filteredList = tools.filter(item => 
    item.category === selectedCategory &&
    (item.tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     item.tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
     item.tool.link.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const sortedList = isSorted ? [...filteredList].sort((a, b) => a.tool.name.localeCompare(b.tool.name)) : filteredList;
  const totalPages = Math.ceil(sortedList.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = sortedList.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSort = () => {
    setIsSorted(!isSorted);
  };

  return (
    <div className="flex flex-col items-center min-h-screen">
      <input 
        type="text" 
        placeholder="Search..." 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        className="mb-4 p-2 font-mono border border-gray-300 rounded-[5px] bg-[#171717] text-[#e5e7eb]"
      />
      <div className="mb-4">
        <Button text="Development" onClick={() => { setSelectedCategory("development"); setCurrentPage(1); }} />
        <Button text="Design/UIUX" onClick={() => { setSelectedCategory("designUIUX"); setCurrentPage(1); }} />
        <Button text="Audio/Video" onClick={() => { setSelectedCategory("audioVideo"); setCurrentPage(1); }} />
        <Button text="Text Document" onClick={() => { setSelectedCategory("textDocument"); setCurrentPage(1); }} />
      </div>
      
      <div className="flex">
        <p className="font-mono py-0 text-center p-4 text-[#e5e7eb]">{selectedCategory}</p>
      </div>
      
      
      <table className="w-3/4 text-left font-mono m-8 border-none">
        <thead className="uppercase bg-[#171717] text-[#e5e7eb]" style={{ backgroundColor: '#171717', color: '#e5e7eb' }}>
          <tr>
            <th className="py-0 text-center p-4 w-1/3 border border-gray-300">Tool<Button text={<FaSortAlphaUp />} onClick={handleSort} /></th>
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