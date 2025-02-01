import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Cards({ link, tittle, text }) {
  return (
    <div
      className=" bg-gray-900 rounded-lg shadow-lg overflow-hidden  cursor-pointer max-w-xs perspective border-2  hover:border-blue-400 hover:border-2 h-full blocks"
      onClick={() => redirect()}
    >
      <img className=" object-cover p-1" src={link} alt="" />
      <div className="p-3">
        <h1 className="text-lg font-semibold">{tittle}</h1>
        <p className="text-md ">{text}</p>
      </div>
    </div>
  );
}

export default Cards;
