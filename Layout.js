import { Outlet, Link } from "react-router-dom";
const Layout = () => {
    return (
      <>
       <nav class="navbar navbar-expand-lg navbar-light bg-warning">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Padaku</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <button class="btn"><Link to="/">Home</Link></button>
        </li>
        <li class="nav-item">
          <button class="btn"><Link to="/Login">Login</Link></button>
        </li>
        <li class="nav-item dropdown">
          <button class="btn"><Link to="/Register">Register</Link></button>
        </li>
        <li class="nav-item">
          <button class="btn"><Link to="/NoPage">About us</Link></button>
        </li>
      </ul>
    </div>
  </div>
</nav>
  
        <Outlet />
      </>
    );
  };
  
  export default Layout;