
export default function Navbar() {
  return (
  
    <>
      {/* <div>
      <h2>Navbar</h2>
      <img src="/assets/nav/menuIcon.png" alt='toggle menu'/>
     </div> */}
     <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container">
    <a className="navbar-brand text-white fw-bold" href="/">Portfolio</a>
    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon text-dark"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#experince">Experience</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#skills">Our Skills</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#ourproject">Project</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#ourcontact">Contact</a>
        </li>
       
      
      </ul>
      
    </div>
  </div>
</nav>
    </>
  )
}
