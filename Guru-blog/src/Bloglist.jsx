const Bloglist = ({blogs, headTitle}) => {

 
  return (
    <div>
        <h1>{headTitle}</h1>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Bloglist;
