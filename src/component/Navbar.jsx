// Navbar.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(()=>{
    // localStorage operations can be added here if needed
  }, [])

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() === "") return;
    navigate(`/?search=${encodeURIComponent(query)}`);
    setQuery(""); // optional clear after search
  };

  return (
    <header className={styles.header}>
      <h1>MyBrand</h1>
      <form onSubmit={handleSearch} className={styles.searchForm}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search videos..."
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}

export default Navbar;
