import React from "react";

const ItemTable = ({ title, link, description }) => {
  return (
    <tr className="py-1 hover:text-xl">
      <td className="py-1 text-left p-4 w-1/3 "><a href={link} target="_blank" rel="noopener noreferrer">{title}</a></td>
      <td className="py-1 text-left p-4 w-1/3 ">{description}</td>
    </tr>
  );
};

export default ItemTable;