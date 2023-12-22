"use client";

import React from "react";
import "./Spinner.css";
const Spinner = () => {
  return (
    <div className="m-auto flex justify-center items-center w-full h-full">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
