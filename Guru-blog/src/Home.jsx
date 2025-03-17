import { useState } from "react";
import Bloglist from "./Bloglist";
import { useEffect } from "react";
import useFetch from "./useFetch";

const Home = () => {
  const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')



  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // };


  return (
    <div className="home">
      {error && <div>{error}</div> }
      {isPending && <div>Loading...</div> }

      {/* if blogs is true then it takes value initially its value is null */}
     { blogs && <Bloglist headTitle="All blogs" blogs={blogs} />}
    </div>
  );
};

export default Home;
