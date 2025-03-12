const Navbar = () => {
  return (
    <nav className="navbar">
      <h3>Guru Blog</h3>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create" 
        // style={{color: "white", backgroundColor:"#f1356d", borderRadius: '8px'}}
        >new blog</a>
      </div>
    </nav>
  );
};

export default Navbar;
