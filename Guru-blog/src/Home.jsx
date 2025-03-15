import { useState } from "react";
import Bloglist from "./Bloglist";
import { useEffect } from "react";

const Home = () => {
  const[name, setName] = useState('mario');
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ]);
const handleDelete =(id)=>{
       const newBlogs = blogs.filter(blog => blog.id !== id);
       setBlogs(newBlogs)
}
  useEffect(()=>{
    console.log('useEffect render')
  },[name])
  return (
    <div className="home">
    <Bloglist headTitle = 'All blogs' blogs={blogs} handleDelete = {handleDelete}/>
   
    </div>
  );
}
 
export default Home;