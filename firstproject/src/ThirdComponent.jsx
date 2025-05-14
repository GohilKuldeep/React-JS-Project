import React, { useState } from 'react'

const ThirdComponent = () => {
    const [name,setName] = useState("Kuldeep")
  return (
    <div>
      <h3> Name :- {name}</h3>
      {/* <button onClick={()=>setName("xyzz")}></button> */}
    </div>
  )
}

export default ThirdComponent
