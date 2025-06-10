import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { decrement, increment } from './CounterReducer'

const CounterComponent = () => {
    const count = useSelector((state) => state.Couter.count)
    const dispatch = useDispatch()
  return (
    <div>
      <h3>Count is {count}</h3>
      <button onClick={()=>dispatch(increment())}>Add</button>
      <button onClick={()=>dispatch(decrement())}>Minus</button>
    </div>
  )
}

export default CounterComponent
