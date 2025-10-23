import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDesktopMenu = () => {
    setIsDesktopMenuOpen(!isDesktopMenuOpen);
  };

  return (
    <header>
      <nav>
        <div id="nav-part2">
          <h4><Link to="/">Home</Link></h4>
          <h4><Link to="/">Contact</Link></h4>
          <h4><Link to="/">Services</Link></h4>
          <div className="search-container">
            <input type="text" className="searchinput" placeholder="Search..." />
            <button className="search-button">Search</button>
          </div>
        </div>
      </nav>

      {/* Desktop Menu */}
      <div id="desktop-menubar">
        <label>
          <input 
            type="checkbox" 
            checked={isDesktopMenuOpen}
            onChange={toggleDesktopMenu}
          />
          <div className="toggle">
            <span className="top_line common"></span>
            <span className="middle_line common"></span>
            <span className="bottom_line common"></span>
          </div>
          <div className="slide">
            <ul>
              <li><Link to="/"><i className="fas fa-home"></i>Home</Link></li>
              <li><Link to="/"><i className="fas fa-phone"></i>Contact</Link></li>
              <li><Link to="/"><i className="fas fa-first-aid"></i>Services</Link></li>
              <li><Link to="/login"><i className="fas fa-user"></i>Login</Link></li>
            </ul>
          </div>
        </label>
      </div>

      {/* Mobile Menu */}
      <div id="menubar">
        <label>
          <input 
            type="checkbox" 
            checked={isMenuOpen}
            onChange={toggleMenu}
          />
          <div className="toggle">
            <span className="top_line common"></span>
            <span className="middle_line common"></span>
            <span className="bottom_line common"></span>
          </div>
          <div className="slide">
            <ul>
              <li><Link to="/"><i className="fas fa-home"></i>Home</Link></li>
              <li><Link to="/"><i className="fas fa-phone"></i>Contact</Link></li>
              <li><Link to="/"><i className="fas fa-first-aid"></i>Services</Link></li>
              <li><Link to="/login"><i className="fas fa-user"></i>Login</Link></li>
            </ul>
          </div>
        </label>
      </div>
    </header>
  );
};

export default Header;

