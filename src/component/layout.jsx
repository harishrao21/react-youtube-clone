import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";   // 🔥 add this
import styles from "./Layout.module.css";

function Layout() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.main}>
        <Sidebar />
        <div className={styles.content}>
          <Outlet />   {/* 🔥 VERY IMPORTANT */}
        </div>
      </div>
    </div>
  );
}

export default Layout;
