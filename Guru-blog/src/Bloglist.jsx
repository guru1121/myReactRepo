const Bloglist = ({blogs, headTitle, handleDelete}) => {

 
  return (
    <div>
        <h1>{headTitle}</h1>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <button onClick={()=>handleDelete(blog.id)}>delete</button>
        </div>
      ))}
    </div>
  );
};

export default Bloglist;
