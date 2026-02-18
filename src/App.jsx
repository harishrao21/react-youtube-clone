
import { Routes, Route } from "react-router-dom";
import Layout from "./component/layout";  // 

import Home from "./pages/home";
import Profile from "./pages/profile";
import Upload from "./pages/upload";
import Watch from "./pages/Watch";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
       <Route path="watch/:id" element={<Watch />} />

        <Route path="upload" element={<Upload />} />
        <Route path="profiles" element={<Profile />} />
      </Route>
    </Routes>
  );
}

 export default App; // ✅ default export
