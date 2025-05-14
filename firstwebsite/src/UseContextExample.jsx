import React, { createContext, useContext, useState } from "react";

const UserData = createContext();
const UseContextExample = () => {
const [name] = useState("Kuldeep");

  return (
    <div>
      <h4>comp1</h4>
      <h2>name is : {name}</h2>
      <UserData.Provider value={name}>
        <Comp2 />
      </UserData.Provider>
    </div>
  );
};

const Comp2 = () => {
  return (
    <div>
      <h4>comp2</h4>
      <Comp3 />
    </div>
  );
};

const Comp3 = () => {
  return (
    <div>
      <h4>comp3</h4>

      <Comp4 />
    </div>
  );
};

const Comp4 = () => {
    let name = useContext(UserData);
  return (
    <div>
      <h3>finally get value :- {name}</h3>
    </div>
  );
};

export default UseContextExample;
