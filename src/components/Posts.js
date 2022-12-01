import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const Posts = () => {
  // state to store fetched posts
  const [posts, setPosts] = useState([]);
  // state to determine if the data is being fetched or not
  const [loading, setLoading] = useState(true);
  // fetch data from WordPress
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      // const data = await axios.get(
      //   // TODO: abstract the url with environment variables
      //   `https://live-reactblog-be.pantheonsite.io/wp-json/wp/v2/posts?_embed`
      // );
      const response = await fetch(
        "https://live-reactblog-be.pantheonsite.io/wp-json/wp/v2/posts?_embed",
        {
          method: "GET",
          headers: { "Content-type": "application/json" },
          withCredentials: false,
        }
      );
      const data = await response.json();
      setPosts(data);
      setLoading(false);
    };
    fetchPosts();
  }, []);
  // function to convert date
  const formatDate = (givenDate) => {
    let theDate = new Date(givenDate);
    let options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return theDate.toLocaleDateString("en-US", options);
  };
  return (
    <div className="posts">
      <h1>All posts</h1>
      <div className="posts-wrapper">
        {!loading &&
          posts.map((post) => (
            <div className="single-post" key={post.slug}>
              <div className="post-image">
                <img
                  src={post._embedded["wp:featuredmedia"]["0"].source_url}
                  alt="logo"
                />
                <div className="info">
                  <p className="date">{formatDate(post.date)}</p>
                  <img src={post._embedded.author[0].avatar_urls[96]} alt="" />
                </div>
              </div>
              <div className="title">
                <h3>
                  <Link to={`/posts/${post.slug}`}>{post.title.rendered}</Link>
                </h3>
              </div>
            </div>
          ))}
        {loading && <p>Loading...</p>}
      </div>
    </div>
  );
};

export default Posts;
