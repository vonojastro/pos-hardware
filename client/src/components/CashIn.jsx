import React, { useEffect, useState } from "react";

const InitialBalanceForm = ({ setAmount, setName, setDescription, submitHandler,  setProfit}) => {
  const [onethousand, setOnethousand] = useState(0);
  const [fivehundred, setFivehundred] = useState(0);
  const [twohundred, setTwohundred] = useState(0);
  const [onehundred, setOnehundred] = useState(0);
  const [fifthy, setFifthy] = useState(0);
  const [twenty, setTwenty] = useState(0);
  const [coins, setCoins] = useState(0);

  const initialTotal =
    onethousand +
    fivehundred +
    twohundred +
    onehundred +
    fifthy +
    twenty +
    coins;

  useEffect(() => {
    setAmount(initialTotal);
    setName("Cash In");
    setDescription("Cash In");
    setProfit(0)
  }, [initialTotal, setAmount, setName, setDescription, setProfit]);

  return (
    <>
      <div className="grid grid-cols-2  gap-5 items-center">
        <div className="flex flex-col gap-2">
          <p className="font-bold">₱ 1,000</p>
          <input
            type="number"
            id="amount"
            placeholder="pcs"
            className="border p-2"
            onChange={(e) => setOnethousand(e.target.value * 1000)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-bold">₱ 500</p>
          <input
            type="number"
            id="amount"
            placeholder="pcs"
            className="border p-2 "
            onChange={(e) => setFivehundred(e.target.value * 500)}
          />
        </div>
      </div>
      {/* row 2 */}
      <div className="grid grid-cols-2 justify-end gap-5 items-center  ">
        <div className="flex flex-col gap-2">
          <p className="font-bold">₱ 200</p>
          <input
            type="number"
            id="amount"
            placeholder="pcs"
            className="border p-2 "
            onChange={(e) => setTwohundred(e.target.value * 200)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-bold">₱ 100</p>
          <input
            type="number"
            id="amount"
            placeholder="pcs"
            className="border p-2 "
            onChange={(e) => setOnehundred(e.target.value * 100)}
          />
        </div>
      </div>
      {/* row 3 */}
      <div className="grid grid-cols-2 justify-end gap-5 items-center ">
        <div className="flex flex-col gap-2">
          <p className="font-bold">₱ 50</p>
          <input
            type="number"
            id="amount"
            placeholder="pcs"
            className="border p-2"
            onChange={(e) => setFifthy(e.target.value * 50)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-bold">₱ 20</p>
          <input
            type="number"
            id="amount"
            placeholder="pcs"
            className="border p-2 "
            onChange={(e) => setTwenty(e.target.value * 20)}
          />
        </div>
      </div>
      {/* row 4 */}
      <div className="grid grid-cols-2 justify-end gap-5 items-center ">
        <div className="flex flex-col gap-2 ">
          <p className="font-bold">coins</p>
          <input
            type="number"
            id="amount"
            placeholder="pcs"
            className="border p-2 "
            onChange={(e) => setCoins(e.target.value * 1)}
          />
        </div>
      </div>

      <button className="p-3 bg-[#60A3D9] hover:bg-blue-300 text-white" onClick={submitHandler}>
        Confirm
      </button>
    </>
  );
};

export default InitialBalanceForm;
