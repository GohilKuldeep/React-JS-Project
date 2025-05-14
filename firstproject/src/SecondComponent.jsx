import React, { useState } from 'react'

const SecondComponent = (props) => {

    // destructuring the props
 
    // const SecondComponent = ({myname,myage}) => {

        //useState hook
        // change the value using  useState hook
        const [count, setCount] = useState(0)
          let addCount = () => {
            setCount(count + 1)
          }

  return (
    <div>
      {/* <h3>Name  is  {myname}</h3>
      <h3>Age  is  {myage}</h3> */}

      <h3>Name  is  {props.myname}</h3>
      <h3>Age  is  {props.myage}</h3>
      <h3>Count  is  {count}</h3>

      {/* using created function */}
      <button onClick={addCount}>Add</button>

      {/* inline function */}

      <button onClick={()=>setCount(0)}>Reset</button>
      <button onClick={()=>setCount(count-1)}>Minus</button>
      
    </div>
  )
}

export default SecondComponent
