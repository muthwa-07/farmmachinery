
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light shadow-sm mt-1">
   
        {/* Brand Logo */}
        <Link to="/" className="navbar-brand fw-bold">
           <img src="images/logo.jpeg" height='50px' width='50px' alt="" />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarcontents"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarcontents">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <b><Link to="/" className="nav-link">Machines</Link></b>
            </li>
            <li className="nav-item">
              <b><Link to="/fetchfertilizers" className="nav-link">Fertilizers</Link></b>
            </li>
            <li className="nav-item">
              <b><Link to="/addmachines" className="nav-link">Add machinery</Link></b>
            </li>
            <li className="nav-item">
              <b><Link to="/addfertilizers" className="nav-link">Add fertilizer</Link></b>
            </li>

          </ul>

          {/* Authorization Links (Aligned Right) */}
          <ul className="navbar-nav ms-auto">
          <li className="nav-item"></li>
          <li className="nav-item">
              <b><Link to="/chatbot" className="nav-link">
              
                       <img src="images/AI.png" alt="" height='50px' width='60px' />

              </Link></b>
            </li>
            <li className="nav-item">
              <b><Link to="/about" className="nav-link">About us</Link></b>
            </li>
            <li className="nav-item">
              <Link to="/signin" className="btn btn-outline-primary me-2">Sign IN</Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="btn btn-success">Join our community</Link>
            </li>
            
            {/* <li className="nav-item">
              <Link to="/signup" className="btn btn-primary">Sign UP</Link>
            </li> */}
          </ul>
        </div>
     
    </nav>
  );
};

export default Navbar;
