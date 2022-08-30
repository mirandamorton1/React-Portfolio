import React, { useState } from 'react';
import Navigation from './Navigation';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Resume from '../pages/Resume';
import Contact from '../pages/Contact';
// import Footer from '../components/Footer'

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About') {
        return <About />;
    }
    if (currentPage === 'Portfolio') {
        return <Portfolio  />;
    }
    if (currentPage === 'Resume') {
      return <Resume  />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <main>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>
      {renderPage()}
      </div>
      {/* <Footer/> */}
    </main>
  );
}