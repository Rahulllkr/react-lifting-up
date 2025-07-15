// const Child1 = ({setName}) => {

//   return (
//     <div>
//         <h2>Hello Coder</h2>
//         <input type="text" onChange={(event)=> setName(event.target.value)}  placeholder='Enter Your Name'/>
//         <hr />
//     </div>
//   )
// }

// export default Child1

// import React from "react";

// const Child1 = ({ setShowModel }) => {
//   return (
//     <div
//       style={{
//         height: "100px",
//         width: "100%",
//         backgroundColor: "brown",
//         textAlign: "center",
//         alignItems: "center",
//       }}
//     >
//       <h3>Child Component</h3>
//       <button type="submit" onClick={() => setShowModel(true)}>
//         Show Model
//       </button>
//     </div>
//   );
// };

// export default Child1;


import React from 'react'

const Child1 = ({handle}) => {

    const handleInputValue = (event) => {

        handle(event.target.value)

    }

  return (
    <div style={{height:"100px",width:"100%",textAlign:"center",backgroundColor:"brown"}}>

        <h2>Child Component</h2>
        <input type="text" onChange={handleInputValue} placeholder='Default Value'/>
        
    </div>
  )
}

export default Child1
