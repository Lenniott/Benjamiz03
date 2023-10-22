import React, { useState, useEffect } from "react";

const ToastComponent = ({ confirm, setConfirm }) => {
  const showToast = () => {
    setConfirm(true);
    const timeOut = setTimeout(() => {
      setConfirm(false);
    }, 5000);
    return () => clearTimeout(timeOut);
  };

  return (
    <>
      {confirm && (
        <div className="absolute bg-green-500 bottom-4 flex rounded-md gap-2 text-white fill-white p-2 pl-4 items-center w-3/5">
          {/* Your SVG and other content here */}
          <p className="grow">Modal successfully closed</p>
          <button
            label="close"
            className="relative grid place-items-center hover:bg-green-200"
            onClick={() => setConfirm(false)}
          >
            {/* Your close SVG here */}
          </button>
        </div>
      )}
    </>
  );
};

export default ToastComponent;
