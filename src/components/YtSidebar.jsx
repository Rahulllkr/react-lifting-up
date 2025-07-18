// import React from "react";

// const YtSidebar = ({ handleChild }) => {
//   return (
//     <div style={{ display: "flex", flexDirection: "column" }}>
//       <button onClick={() => {handleChild("Home")}}>Home</button>
//       <button onClick={() => {handleChild("Profile")}}>Profile</button>
//       <button onClick={() => {handleChild("History")}}>History</button>
//       <button onClick={() => {handleChild("About")}}>About</button>
//     </div>
//   );
// };

// export default YtSidebar;

// import React from "react";

// const YtSidebar = ({ handlePage }) => {
//   const handleViewPort = (itemId) => {
//     handlePage(itemId);
//     console.log(itemId)
//   };

//   const sideBarItems = [
//     { id: "home", label: "Home" },
//     { id: "shorts", label: "Shorts" },
//     { id: "subsciptions", label: "Subsciptions" },
//     { id: "profile", label: "Profile" },
//     { id: "history", label: "History" },
//     { id: "about", label: "About" },
//   ];

//   return (
//     <div>
//       <h1>Sidebar</h1>
//       {sideBarItems.map((item) => {
//         return (
//           <button
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               padding: "10px",
//               fontSize: "20px",
//               backgroundColor: "blue",
//               color: "white",
//               borderRadius: "5px",
//               margin: "5px",
//             }}
//             key={item.id}
//             onClick={() => handleViewPort(item.label)}
//           >
//             {item.label}
//           </button>
//         );
//       })}
//     </div>
//   );
// };

// export default YtSidebar;


import React from 'react'

const YtSidebar = ({handleSideBar}) => {

    const handleViewport = (itemId) => {
        handleSideBar(itemId)
        // console.log(itemId)
    }

    const SideBarItem = [

        {id:"home",label:"Home"},
        {id:"shorts",label:"Shorts"},
        {id:"subscription",label:"Subscription"},
        {id:"profile",label:"Profile"},
        {id:"about",label:"About"},
    ]
  return (
    <div>

        <h1>SideBar Item</h1>
        {
            SideBarItem.map((item) => {
                return (
                    <button
                        key={item.id}
                        onClick={() => handleViewport(item.id)}
                        style={{
                            display: "block",
                            width: "auto",
                            padding: "12px",
                            margin: "8px 0",
                            backgroundColor: "#1976d2",
                            color: "#fff",
                            border: "none",
                            borderRadius: "6px",
                            fontSize: "18px",
                            cursor: "pointer",
                            textAlign: "left"
                        }}
                    >
                        {item.label}
                    </button>
                )

            })
        }
        
    </div>
  )
}

export default YtSidebar
