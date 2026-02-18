import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          isActive ? styles.active : styles.link
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/upload"
        className={({ isActive }) =>
          isActive ? styles.active : styles.link
        }
      >
        Upload
      </NavLink>

      <NavLink
        to="/profiles"
        className={({ isActive }) =>
          isActive ? styles.active : styles.link
        }
      >
        Profile
      </NavLink>
    </aside>
  );
}

export default Sidebar;  // ✅ default export
