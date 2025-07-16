// import React from "react";
import Child1 from "./child1";
import Child2 from './child2'

// const Parent = () => {
//   const [showModel, setShowModel] = useState(false);

//   return (
//     <div
//       style={{
//         height: "400px",
//         width: "400px",
//         backgroundColor: "blue",
//         textAlign: "center",
//         color: "white",
//       }}
//     >
//       <h1>Hello Coder</h1>
//       <Child1 setShowModel={setShowModel} />
//       {showModel && (
//         <div>
//           <h2>Model Content</h2>

//           <p>Here Is the some model content</p>
//         </div>
//       )}
//       {/* <Child2 name = {name}/> */}
//     </div>
//   );
// };

// export default Parent;

// import React,{useState} from 'react'

// const Parent = () => {

//   const [value,setValue] = useState("Default Value")

//   const handleChild = (e) => {
//     setValue(e);

//   }

//   return (
//     <div style={{height:"400px",width:"600px",backgroundColor:"greenyellow",textAlign:"center"}}>

//       <h1>Parent Component</h1>

//       <h3>{value}</h3>

//       <Child1 handleChild = {handleChild}/>
      
//     </div>
//   )
// }

// export default Parent

import React, { useState } from 'react'

const Parent = () => {
  const [option,setOption] = useState("")

  const handlechilds = (e) => {
    setOption(e)
  }
  return (
    <div style={{height:"400px",width:"600px",backgroundColor:"greenyellow",textAlign:"center"}}>

      <h1>Parent Component</h1>
      
      <Child1 handlechilds = {handlechilds}/>
      <Child2 handlechilds = {handlechilds}/>

      <h1>You Have Clicked {option}</h1>
    </div>
  )
}

export default Parent