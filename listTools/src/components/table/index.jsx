import React, { useState } from "react";
import ItemTable from "./itemTable";

const list = [
  {
    "category": "development",
    "tool": {
      "name": "Theano",
      "link": "http://deeplearning.net/software/theano/",
      "description": "Biblioteca para cálculos matemáticos em redes neurais e deep learning."
    }
  },
  {
    "category": "development",
    "tool": {
      "name": "CNTK",
      "link": "https://docs.microsoft.com/en-us/cognitive-toolkit/",
      "description": "Toolkit de deep learning da Microsoft, conhecido por sua eficiência."
    }
  },
  {
    "category": "designUIUX",
    "tool": {
      "name": "Figma",
      "link": "https://www.figma.com/",
      "description": "Ferramenta colaborativa de design de interfaces e prototipagem."
    }
  },
  {
    "category": "designUIUX",
    "tool": {
      "name": "Adobe XD",
      "link": "https://www.adobe.com/products/xd.html",
      "description": "Ferramenta de design de experiência de usuário e interfaces."
    }
  },
  {
    "category": "audioVideo",
    "tool": {
      "name": "Sonix",
      "link": "https://sonix.ai/",
      "description": "Ferramenta de transcrição automática de áudio para texto com precisão."
    }
  },
  {
    "category": "textDocument",
    "tool": {
      "name": "Grammarly",
      "link": "https://www.grammarly.com/",
      "description": "Ferramenta AI que corrige gramática e sugere melhorias no estilo de escrita."
    }
  },
  {
    "category": "textDocument",
    "tool": {
      "name": "QuillBot",
      "link": "https://quillbot.com/",
      "description": "Parafraseador e reescritor de textos usando inteligência artificial."
    }
  },
];

const Table = () => {
  const [selectedCategory, setSelectedCategory] = useState("development");

  const filteredList = list.filter(item => item.category === selectedCategory);

  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="mb-4">
        <button className="px-4 py-2 m-2 bg-blue-500 text-white rounded" onClick={() => setSelectedCategory("development")}>Development</button>
        <button className="px-4 py-2 m-2 bg-green-500 text-white rounded" onClick={() => setSelectedCategory("designUIUX")}>Design/UIUX</button>
        <button className="px-4 py-2 m-2 bg-red-500 text-white rounded" onClick={() => setSelectedCategory("audioVideo")}>Audio/Video</button>
        <button className="px-4 py-2 m-2 bg-yellow-500 text-white rounded" onClick={() => setSelectedCategory("textDocument")}>Text Document</button>
      </div>
      <table className="w-3/4 text-left m-8 border border-gray-300">
        <thead className="uppercase bg-[#171717] text-[#e5e7eb]" style={{ backgroundColor: '#171717', color: '#e5e7eb' }}>
          <tr>
            <th className="py-0 text-center p-4 w-1/3">Tool</th>
            <th className="py-0 text-center p-4 w-1/3">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-500 bg-[#FFFFFF] text-[#171717]" style={{ backgroundColor: '#FFFFFF', color: '#171717' }}>
          {filteredList.map((item, index) => (
            <ItemTable key={index} title={item.tool.name} link={item.tool.link} description={item.tool.description} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;