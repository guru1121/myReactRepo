import { useState } from "react";
import Bloglist from "./Bloglist";
import { useEffect } from "react";

const Home = () => {
  const [name, setName] = useState("mario");
  const [blogs, setBlogs] = useState(null);
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setBlogs(data)
      });
  }, []);

  return (
    <div className="home">
     { blogs && <Bloglist
        headTitle="All blogs"
        blogs={blogs}
        handleDelete={handleDelete}
      />}
    </div>
  );
};

export default Home;
