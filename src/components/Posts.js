import { Link } from "react-router-dom";
const Posts = () => {
  return (
    <div className="posts">
      <h1>All posts</h1>
      <div className="posts-wrapper">
        <div className="single-post">
          <div className="post-image">
            <img src="/logo512.png" alt="logo" />
          </div>
          <div className="title">
            <h3>
              <Link to="/posts/hello">This is a sample</Link>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
