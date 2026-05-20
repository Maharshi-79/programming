import { useEffect } from "react";
import { NavLink ,useLocation} from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Header(){
  const location = useLocation();
  const isHome = location.pathname === "/";
  const redirect = useNavigate();

 
   const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("cart"); // optional
    alert("Logged out successfully ✅");
    navigate("/");
  };


    return(
        <>
            <div>
  {/* Basic */}
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  {/* Mobile Metas */}
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  {/* Site Metas */}
  <meta name="keywords" content />
  <meta name="description" content />
  <meta name="author" content />
  <link rel="shortcut icon" href="images/favicon.png" type />
  <title> Feane </title>
  {/* bootstrap core css */}
  <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
  {/*owl slider stylesheet */}
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
  {/* nice select  */}
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-nice-select/1.1.0/css/nice-select.min.css" integrity="sha512-CruCP+TD3yXzlvvijET8wV5WxxEh5H8P4cmz0RFbKK6FlZ2sYl3AEsKlLPHbniXKSrDdFewhbmBK5skbdsASbQ==" crossOrigin="anonymous" />
  {/* font awesome style */}
  <link href="css/font-awesome.min.css" rel="stylesheet" />
  {/* Custom styles for this template */}
  <link href="css/style.css" rel="stylesheet" />
  {/* responsive style */}
  <link href="css/responsive.css" rel="stylesheet" />

{/* Main Code */}

  <div className={isHome ? "hero_area" : "hero_area sub_page"}>
    <div className="bg-box">
      <img src="images/hero-bg.jpg" alt="Hero Background" />
    </div>
    {/* header section strats */}
   <header className="header_section">
  <div className="container">
    <nav className="navbar navbar-expand-lg custom_nav-container">
      
      {/* LOGO */}
      <NavLink className="navbar-brand" to="/">
        <span>Feane</span>
      </NavLink>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto">

          <li className="nav-item">
            <NavLink
              to="/"
              className="nav-link"
              end
            >
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/menu"
              className="nav-link"
            >
              Menu
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/about"
              className="nav-link"
            >
              About
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/book"
              className="nav-link"
            >
              Book Table
            </NavLink>
          </li>

        </ul>

        <div className="user_option">
          {
  user && user.role === "admin" && (
    <NavLink to="/admindashboard" className="user_link">
      <i className="fa fa-user" aria-hidden="true" />
    </NavLink>
  )
}

          <NavLink to="/cart" className="cart_link">
            {/* SVG stays same */}
           <i
  className="fa fa-shopping-cart cart_icon"
  aria-hidden="true"
  
/>
          </NavLink>

          <form className="form-inline">
            <button className="btn nav_search-btn" type="submit">
              <i className="fa fa-search" aria-hidden="true" />
            </button>
          </form>

          <NavLink to="/menu" className="order_online">
            Order Online
          </NavLink>
           { !user &&(
              <NavLink to="/login" className="order_online">
            Login
          </NavLink>)
           }
          {
            user && (
              <button className="order_online" onClick={handleLogout}>
                Logout
              </button>
            )
          }
        </div>
      </div>
    </nav>
  </div>
</header>
    {isHome && (<section className="slider_section ">
    <div id="customCarousel1" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="container ">
            <div className="row">
              <div className="col-md-7 col-lg-6 ">
                <div className="detail-box">
                  <h1>Fast Food Restaurant</h1>
                  <p>
                    Doloremque, itaque aperiam facilis rerum, commodi,
                    temporibus sapiente ad mollitia laborum quam quisquam esse
                    error unde. Tempora ex doloremque, labore, sunt repellat
                    dolore, iste magni quos nihil ducimus libero ipsam.
                  </p>
                  <div className="btn-box">
                    <a href="" className="btn1">
                      Order Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item ">
          <div className="container ">
            <div className="row">
              <div className="col-md-7 col-lg-6 ">
                <div className="detail-box">
                  <h1>Fast Food Restaurant</h1>
                  <p>
                    Doloremque, itaque aperiam facilis rerum, commodi,
                    temporibus sapiente ad mollitia laborum quam quisquam esse
                    error unde. Tempora ex doloremque, labore, sunt repellat
                    dolore, iste magni quos nihil ducimus libero ipsam.
                  </p>
                  <div className="btn-box">
                    <a href="" className="btn1">
                      Order Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="container ">
            <div className="row">
              <div className="col-md-7 col-lg-6 ">
                <div className="detail-box">
                  <h1>Fast Food Restaurant</h1>
                  <p>
                    Doloremque, itaque aperiam facilis rerum, commodi,
                    temporibus sapiente ad mollitia laborum quam quisquam esse
                    error unde. Tempora ex doloremque, labore, sunt repellat
                    dolore, iste magni quos nihil ducimus libero ipsam.
                  </p>
                  <div className="btn-box">
                    <a href="" className="btn1">
                      Order Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <ol className="carousel-indicators">
          <li
            data-target="#customCarousel1"
            data-slide-to={0}
            className="active"
          />
          <li data-target="#customCarousel1" data-slide-to={1} />
          <li data-target="#customCarousel1" data-slide-to={2} />
        </ol>
      </div>
    </div>
  </section>
 )}
  </div></div>

        </>
    )
}