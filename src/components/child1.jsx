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


// import React from 'react'

// const Child1 = ({handleChild}) => {

//   const handleParent = (event) => {
//     handleChild(event.target.value)

//   }
//   return (

    
//     <div style={{height:"200px",width:"100%",backgroundColor:"brown",textAlign:"center"}}>

//       <h2>Child Component</h2>
//       <input type="text" onChange={handleParent} placeholder='Default Value'/>
      
//     </div>
//   )
// }

// export default Child1


import React from 'react'

const Child1 = ({handlechilds}) => {
  const setOption = () => {
    handlechilds("Child 1")
  }
  return (
    <div style={{height:"100px",width:"100%",backgroundColor:"brown",textAlign:"center"}}>
      <h2>Child1 Component</h2>
      <button type='submit' onClick={setOption}>Click 1</button>
    </div>
  )
}

export default Child1