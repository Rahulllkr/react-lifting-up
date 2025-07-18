// import React from "react";

// const YtViewPort = ({ page }) => {
//   let res;
//   switch (page) {
//     case "Home":
//       res = <h1>Home Page</h1>;
//       break;
//       case "Profile":
//       res = <h1>Profile Page</h1>;
//       break;
//       case "History":
//       res = <h1>History Page</h1>;
//       break;
//       case "About":
//       res = <h1>About Page</h1>;
//       break;

//     default:
//       break;
//   }

//   return <div>
//     <h1>{res}</h1>
//   </div>;
// };

// export default YtViewPort;



// import React from 'react'

// const YtViewport = ({page}) => {
//     let content;
//     if(page === "home"){
//         content = <h2>Welcome to Home Page</h2>
//     }else if(page === "shorts"){
//         content = <h2>Welcome to Shorts Page</h2>
//     }else if(page === "subsciptions"){
//         content = <h2>Welcome to Subscriptions Page</h2>
//     }else if(page === "profile"){
//         content = <h2>Welcome to Profile Page</h2>
//     }else if(page === "history"){
//         content = <h2>Welcome to History Page</h2>
//     }else if(page === "about"){
//         content = <h2>Welcome to About Page</h2>
//     }
//   return (
//     <div style={{display:"flex",flexDirection:"column",textAlign:"center"}}>

//         <h1>Main View</h1>
//         <h4>Active State : {page}</h4>
//         {content}
        
//     </div>
//   )
// }

// export default YtViewport




import React from 'react'

const YtViewport = ({page}) => {
    let content;
    if(page === "home"){
        content = <h2>Welcome to Home Page</h2>
    }else if(page === "shorts"){
        content = <h2>Welcome to Shorts page</h2>
    }else if(page === "subscription"){
        content = <h2>Welcome to Subscription Page</h2>
    }else if(page === "profile"){
        content = <h2>Welcome to Profile Page</h2>
    }else if(page === "about"){
        content = <h2>Welcome to About Page</h2>
    }
return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
            <h1>View Port</h1>
            <h4>Active State : {page}</h4>
            {content}
    </div>
)
}

export default YtViewport
