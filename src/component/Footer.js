const Footer = () => {
  
  const Hash = "#";
  return (
    <footer className="text-muted py-5">
    <div className="container">
      <p className="float-end mb-1">
        <a href={Hash}>Back to top</a>
      </p>
      <p className="mb-0">My Portfolio &copy; {(new Date()).getFullYear()}</p>
    </div>
  </footer>
  );
    
  };
export default Footer;