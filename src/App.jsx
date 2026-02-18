// import './App.css'
// import { Routes, Route } from "react-dom";
// import Layout from './component/layout.jsx';
// import Home from "./pages/home.jsx";
// import Profile from "./pages/profile";
// import Upload from "./pages/Upload";
// import Watch from "./pages/Watch";

// function App(){
//   return (
//     <Layout>
//       <Routes>
//       <Route path="/" element={<Home />}/>
//       <Route path="/watch/:id" element={<Watch />}/>
//       <Route path="/upload" element={<Upload />}/>
//       <Route path="/profiles" element={<Profile />}/> 
//       </Routes>
//     </Layout>
//   )
// }export default App;
import { Routes, Route } from "react-router-dom";
import Layout from "./component/layout";  // ✅ check path

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
