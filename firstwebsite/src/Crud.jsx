import React, { useState } from 'react'

const Crud = () => {
    let [name,setName] = useState('')
    let [age,setAge] = useState('')
    let [data,setData] = useState([])

    const saveData = (e)=>{
        e.preventDefault()
        setData(
            [
                ...data,
                {
                    "name":name,
                    "age":age
                }
            ]
        )
    }

    const ageData = (e)=>{
        setAge(e.target.value)
    }
  return (
    <div>
      <form action="#" method="post" name="frm" onSubmit={saveData}>
        <label htmlFor=''>Name</label>
        <input type="text" name="name" id="name" onChange={(e)=>setName(e.target.value)}/><br /><br />
        <label htmlFor=''>Age</label>
        <input type="number" name="age" id="age" onChange={ageData}/><br /><br />
        <input type="submit" value="Submit" /><br /><br />
      </form>

      <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                data.map((i,index)=>{
                    return (
                        <tr>
                            <td>{index +1}</td>
                            <td>{i.name}</td>
                            <td>{i.age}</td>
                            <td>Delete</td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
    </div>
  )
}

export default Crud
