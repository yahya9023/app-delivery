import React from 'react'
// import './css/bootstrap.min.css'
// import './css/style.css'

function home() {
  
      return (
        <>
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Live Dinner Restaurant - Responsive HTML5 Template</title>
  <meta name="keywords" content="" />
  <meta name="description" content="" />
  <meta name="author" content="" />
  <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" />
  <link rel="apple-touch-icon" href="images/apple-touch-icon.png" />
  {/* <link rel="stylesheet" href="css/bootstrap.min.css" /> */}
  {/* <link rel="stylesheet" href="css/style.css" /> */}
  {/* <link rel="stylesheet" href="css/responsive.css" />
  <link rel="stylesheet" href="css/custom.css" /> */}
  <header className="top-navbar">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="index.html">
          <img src="images/logo.png" alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbars-rs-food"
          aria-controls="navbars-rs-food"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbars-rs-food">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="index.html">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="menu.html">
                Menu
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="about.html">
                About
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdown-a"
                data-toggle="dropdown"
              >
                Pages
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdown-a">
                <a className="dropdown-item" href="reservation.html">
                  Reservation
                </a>
                <a className="dropdown-item" href="stuff.html">
                  Stuff
                </a>
                <a className="dropdown-item" href="gallery.html">
                  Gallery
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdown-a"
                data-toggle="dropdown"
              >
                Blog
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdown-a">
                <a className="dropdown-item" href="blog.html">
                  blog
                </a>
                <a className="dropdown-item" href="blog-details.html">
                  blog Single
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact.html">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</>

      );

}

export default home