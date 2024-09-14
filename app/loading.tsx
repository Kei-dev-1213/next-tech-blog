import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center" style={{ height: "calc(100vh - 150px)" }}>
      <span className="loading loading-bars loading-lg block"></span>
    </div>
  );
};

export default Loading;
