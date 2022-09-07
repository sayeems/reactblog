import axios from "axios";
import { useState, useEffect } from "react";
const Post = () => {
  return (
    <div className="single">
      <h1>Post title</h1>
      <img src="./logo512" alt="logo" />
      <div className="post-body"></div>
    </div>
  );
};

export default Post;
