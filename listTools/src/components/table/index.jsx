import React from "react"; 

const Table = ({title, link, description}) => {
  return (
    <div className="relative overflow-hidden shadow-md rounded-lg">
      <table className="table-fixed w-full text-left">
        <thead className="uppercase bg-[#6b7280] text-[#e5e7eb]" style={{ backgroundColor: '#6b7280', color: '#e5e7eb' }}>
          <tr>
            <th className="py-0 text-center p-4" contentEditable="true">Tool</th>
            <th className="py-0 text-center p-4" contentEditable="true">LINK</th>
            <th className="py-0 text-center p-4" contentEditable="true">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-500 bg-[#FFFFFF] text-[#6b7280]" style={{ backgroundColor: '#FFFFFF', color: '#6b7280' }}>
          <tr className="py-1">
            <td className="py-1 text-center p-4" contentEditable="true">{title}</td>
            <td className="py-1 text-center p-4" contentEditable="true">{link}</td>
            <td className="py-1 text-center p-4" contentEditable="true">{description}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table;
