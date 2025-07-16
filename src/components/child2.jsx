// import React from 'react'

// const Child2 = ({name}) => {
//   return (
//     <div>
//         <h2>{name}</h2>
//     </div>
//   )
// }

// export default Child2


import React from 'react'

const Child2 = ({handlechilds}) => {
    const setOption = () => {
        handlechilds("Child 2")
    }
  return (
    <div style={{height:"100px",width:"100%",backgroundColor:"skyBlue",textAlign:"center"}}>

      <h2>Child 2 Component</h2>
      <button type='submit' onClick={setOption}>Click 2</button>
        
    </div>
  )
}

export default Child2