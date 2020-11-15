import React, { useState } from "react";

const Counter = () => {
  const handleIncreament = () => {
    setCount((previous) => previous + 1);
  };

  function handleDecreament(params) {
    console.log(params);
    if (count === 0) return;
    setCount(count - 1);
  }

  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <div
        style={{
          backgroundColor: "red",
        }}
      >
        ini adalah app : {count}
      </div>
      <button onClick={handleIncreament} className="btn btn-primary">
        Increament
      </button>
      <button onClick={() => handleDecreament("hello")} className="button-oke">
        Decreament
      </button>
    </div>
  );
};

export default Counter;
