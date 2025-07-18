// import React, { useState } from 'react'
import YtSidebar from './ytSidebar';
import YtViewport from './ytViewPort';

// const YouTube = () => {
//     const [page,setPage] = useState("")
//     const handleChild = (e) => {
//         setPage(e);

//     }
//   return (
//     <div>
//         <YtViewPort page = {page}/>
//         <YtSidebar handleChild = {handleChild}/>
//     </div>
//   )
// }

// export default YouTube



// import React, { useState } from 'react'

// const YouTube = () => {
//     const [page,setPage] = useState("");

//     const handlePage = (name) => {
//         setPage(name)
//     }

    

//   return (

    

//     <div>
//         <YtSidebar handlePage = {handlePage}/>
//         <YtViewport page = {page}/>
//     </div> 
//   )
// }

// export default YouTube

import React, { useState } from 'react'

const YouTube = () => {

    const [page,setPage] = useState("")

    const handleSideBar = (pageName) => {
        setPage(pageName);
    }



  return (
    <div>
        <YtSidebar handleSideBar = {handleSideBar}/>
        <YtViewport page = {page}/>
    </div>
  )
}

export default YouTube