const Navbar = ({setCategory}) => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
   <span className="badge bg-light text-dark fs-4  navbar-brand">Headline Hub</span>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
  <div className="nav-link" onClick={() => setCategory("general")} style={{ cursor: "pointer" }}>General</div>
</li>

        <li className="nav-item">
          <div className="nav-link" onClick={()=> setCategory("technology")} style={{ cursor: "pointer" }}>Technology</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=> setCategory("business")}  style={{ cursor: "pointer" }}>Business</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=> setCategory("health")}  style={{ cursor: "pointer" }}>Health</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=> setCategory("science")}  style={{ cursor: "pointer" }}>Science</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=> setCategory("sport")} style={{ cursor: "pointer" }}>Sport</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=> setCategory("entertainment")} style={{ cursor: "pointer" }}>Entertainment</div>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar