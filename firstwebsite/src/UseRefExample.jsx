import React, { useRef, useState } from 'react'

const UseRefExample = () => {
    const [count, setCount] = useState(0);

    let secondCount = useRef(10);
    const increment = () => {

        setCount(count + 1);
        secondCount.current += 1;
    }
  return (
    <div>
      <h2>Count --- {count}</h2>
      <button onClick={increment}>Add</button>
      <h2>secondCount --- {secondCount.current}</h2>
      
    </div>
  )
}

export default UseRefExample
