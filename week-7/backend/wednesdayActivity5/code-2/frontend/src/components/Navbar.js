import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const flag = localStorage.getItem("token");
  const email = localStorage.getItem("email");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Dashboard</h1>
        </Link>
        <nav>
          {flag && (
            <div>
              <span>{email}</span>
              <button onClick={handleLogout}>Log out</button>
            </div>
          )}
          {!flag && (
            <div>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
