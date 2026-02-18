import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import styles from "./Sidebar.module.css";

function Sidebar() {

  // ✅ Initialize state directly from localStorage
  const [history] = useState(() => {
    return JSON.parse(localStorage.getItem("watchHistory")) || [];
  });

  return (
    <aside className={styles.sidebar}>
      <nav className={styles.navSection}>
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
      </nav>

      <hr />

      <div className={styles.historySection}>
        <h4> Watch History</h4>

        {history.length === 0 && (
          <p className={styles.noHistory}>No history yet</p>
        )}

        {history.map((video) => (
          <Link
            key={video.id}
            to={`/watch/${video.id}`}
            className={styles.historyItem}
          >
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
            />
            <p>{video.snippet.title}</p>
          </Link>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
