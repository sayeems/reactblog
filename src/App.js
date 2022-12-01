import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "./App.css";
import Posts from "./components/Posts";
import Post from "./components/Post";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="appBody">
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/sample" element={<Home name="Anthony" />} />
          <Route path="/posts/:slug" element={<Post />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
