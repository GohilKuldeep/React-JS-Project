import React,{useMemo, useState} from 'react'

const UseMemoExample = () => {
    const [count,setCount] = useState(10)
    const [num,setNum] = useState(1)


    const addCalculation = (count) => {
        console.log('Calculating...');
        
        for(let i = 0; i < 10000; i++) {
            count += i
        }
        return count
    }
    const calc = useMemo(() => {
        return addCalculation(count)
    },[count])

    const addCount = () => {    
        console.log('Count is clicked');
        
        setCount(count + 1)
    }
    const addNum = () => {
        console.log('Num is clicked');
        setNum(num + 1)
    }
  return (
    <div>
      <h3>Count is -- {count}</h3>
      <button onClick={addCount}>Add Counter</button>
      <h3>Number is -- {num}</h3>
      <button onClick={addNum}>Add Number</button>
        <h3>Calculation is -- {calc}</h3>
    </div>
  )
}

export default UseMemoExample
