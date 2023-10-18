import React, { useState } from "react";

const AccountSummary = () => {
  const [num, setNum] = useState<number>(1);
  const increment = () => {
    setNum(num + 1);
  };

  const decrement = () => {
    if (num > 1) {
      setNum(num - 1);
    }
  };
  return (
    <div className="w-full  grid gap-3">
      <div className="w-full">
        <div className="w-full items-center text-center">
          <h4 className="text-2xl text-secondary-300 font-bold">
            Order Summary
          </h4>
        </div>
        <div className="w-full py-4 grid gap-5 border-x-0 border border-y-2 border-y-gray-600">
          <div className="flex items-center w-full gap-4 justify-between">
            <h3>Tech Innovators Summit Regular Ticket</h3>
            <div className="flex items-center gap-3">
              <button
                onClick={decrement}
                disabled={num == 1}
                className={`w-[32px] h-[32px] rounded-lg text-2xl font-bold text-white ${
                  num == 1 ? "bg-gray-300" : "bg-secondary-300"
                } `}
              >
                -
              </button>
              <p className="text-2xl text-secondary-300 font-bold">{num}</p>
              <button
                onClick={increment}
                className="w-[32px] h-[32px] rounded-lg text-2xl font-bold bg-secondary-300 text-white"
              >
                +
              </button>
            </div>
          </div>
          <div className="flex items-center w-full gap-4 justify-between">
            <h3>Sub-total</h3>
            <h3>₦20,000</h3>
          </div>
        </div>
      </div>
      <div className="w-full mt-3 flex items-center justify-between">
        <h3>Total:</h3>
        <h3 className="text-2xl text-secondary-300 font-bold">₦20,000</h3>
      </div>
      <div className="w-full flex items-center justify-center">
        <button className="text-base font-bold text-white bg-secondary-300 py-4 px-8 flex gap-[8px] items-center rounded-lg">
          <p>Register for this event</p>
        </button>
      </div>
    </div>
  );
};

export default AccountSummary;
