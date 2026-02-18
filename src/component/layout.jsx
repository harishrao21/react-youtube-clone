// import Navbar from "./Navbar.jsx";
// import Sidebar from "./Sidebar.jsx";
// import Styles from "./Layout.module.css"

// function Layout({children}){
//     return (
//         <div className="container">
//             <Navbar />
//             <div className="main">
//                 <Sidebar/>
//                 <div className="content">
//                     {children}
//                 </div>
//             </div>
//         </div>
//     )
// }export default Layout;

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

function Layout() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.body}>
        <Sidebar />
        <main className={styles.content}>
          <Outlet /> {/* Home / Upload / Watch pages yaha render */}
        </main>
      </div>
    </div>
  );
}

export default Layout;
