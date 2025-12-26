import { useState } from "react";

export const DerivedState = () => {

//   const users = ;
const [user , setUser] = useState([
    { name: "Alice", age: 25 },
    { name: "Bod", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "Angles", age: 45 },
  ]);


//   DerivedState
const userCount = user.length;
const AverageAge  = (user.reduce((curr ,  next) => curr + next.age , 0))/ userCount; 

console.log(userCount)
  return (
      <div className="main-div">
        <h1>User List</h1>
        <ul>
           {
            user.map((currElem,index) => {
                return(
                    <li key={index}>
                        {currElem.name} - {currElem.age}
                    </li>
                )
            })
           }
        </ul>
        <p>Total User : {userCount} </p>
        <p>Average Age : {AverageAge}</p>
      </div>
  );
};