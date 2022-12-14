import React from "react";
import { useEffect } from "react";

const OthersForm = ({ setAmount, setName, setDescription, submitHandler, setProfit }) => {

useEffect(() => {
  setProfit(0)
}, [setProfit])

  return (
    <>
      <label htmlFor="name" className="">
        <input
          type="text"
          id="name"
          placeholder="Enter Product"
          className="border p-2 w-full"
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label htmlFor="amount" className="">
        <input
          type="number"
          id="amount"
          placeholder="Enter Amount "
          className="border p-2 w-full"
          onChange={(e) => setAmount(e.target.value)}
        />
      </label>

      <label htmlFor="description" className="">
        <input
          type="text"
          id="description"
          placeholder="Enter (Date, Name, Brand, Description) "
          className="border p-2 w-full"
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>

      <button className="p-3 bg-[#60A3D9] hover:bg-blue-300 text-white" onClick={submitHandler}>
        Confirm
      </button>
    </>
  );
};

export default OthersForm;
