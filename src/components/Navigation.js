import React from 'react';
import Nav from 'react-bootstrap/nav'
// const styles = {
//   item: {
//     color: "white",
//   },
//   // header: {
//   //   backgroundColor: "lightblue"
//   // }
// };

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Navigation({ currentPage, handlePageChange }) {
  return (
    <header>
      <h1>Miranda Morton</h1>
      <Nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
      <ul className= "navbar-nav ms-auto mb-2">
        <li className="nav-item">
          <button
            href="#about"
            onClick={() => handlePageChange('About')}
            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About
          </button>
        </li>
        <li className="nav-item">
          <button
            href="#portfolio"
            onClick={() => handlePageChange('Portfolio')}
            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={currentPage === 'Portfolio' ?  'nav-link active' : 'nav-link'}
          >
            Portfolio
          </button>
        </li>
        <li className="nav-item">
          <button
            href="#resume"
            onClick={() => handlePageChange('Resume')}
            // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </button>
        </li>
        <li className="nav-item">
          <button
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </button>
        </li>
      </ul>
      </div>
      </Nav>
    </header>
  );
}

export default Navigation;