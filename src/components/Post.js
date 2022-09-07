import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const param = useParams();
  const [loading, setloading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchPost = async () => {
      // set loading true
      setloading(true);
      // TODO: use environment variables
      const data = await axios.get(
        `https://dev-reactblog-be.pantheonsite.io/wp-json/wp/v2/posts?slug=${param.slug}&_embed`
      );
      // set data
      setData(data.data[0]);
      console.log(data.data[0]);
      //   set loading to false
      setloading(false);
    };
    fetchPost();
  }, [param]);

  return (
    <div className="single-wrapper">
      {!loading && (
        <div className="single">
          <h1 className="single-title">{data.title.rendered}</h1>
          <div className="single-content">
            <img
              src={data._embedded["wp:featuredmedia"]["0"].source_url}
              alt="logo"
            />
            <div
              className="post-body"
              dangerouslySetInnerHTML={{ __html: data.content.rendered }}
            ></div>
          </div>
        </div>
      )}
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default Post;
