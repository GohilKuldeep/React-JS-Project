import React from 'react'
import './Custom.css'
const FirstComp = () => {
    const myStyle = {
        color: 'blue', 
        backgroundColor: 'lightblue',
        fontSize: '30px'
    }
  return (
    <>
    <div>
      <h2 style={{color:'red',backgroundColor:'yellow'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis labore possimus aspernatur iusto veritatis ducimus veniam, fugit architecto, cumque maiores aliquam molestiae voluptates.</h2>
    <h4 style={myStyle}>gdgdgd dsgsgg dgsg</h4>
    </div>
    <h3 className='box'>sdgsg dsgdgs faffdsggsdg</h3>
    </>
  )
}

export default FirstComp
