import { NavLink, useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark col-6 offset-3">
        <div class="container-fluid ">
          <div
            class="collapse navbar-collapse d-flex justify-content-center"
            id="navbarNav"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <NavLink
                  to="/"
                  style={{ textDecoration: "none" }}
                  className="nav-link"
                >
                  Home
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  to="/signup"
                  style={{ textDecoration: "none" }}
                  className="nav-link"
                >
                  Sign up
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  to="/signin"
                  style={{ textDecoration: "none" }}
                  className="nav-link"
                >
                  Sign in
                </NavLink>
              </li>
              <li class="nav-item">
                <a
                  onClick={() => {
                    localStorage.clear();
                    navigate("/signin");
                  }}
                  href="#"
                  style={{ textDecoration: "none" }}
                  className="nav-link"
                >
                  Log out
                </a>
              </li>
              <li class="nav-item">
                <NavLink
                  to="/userdata"
                  style={{ textDecoration: "none" }}
                  className="nav-link"
                >
                  Show Data
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
