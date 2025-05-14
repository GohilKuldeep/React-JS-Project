import React, { useEffect, useState } from "react";

const LifecycleFunction = () => {
  let [count, setCount] = useState(10);

  useEffect(() => {
    setTimeout(() => {
      setCount(25);
    }, 3000);
  });

  return (
    <div>
      <h4>Count is {count}</h4>
    </div>
  );
};

export default LifecycleFunction;
