import React, { Component } from 'react';
import './Header.css'; // Import the CSS file

class Header extends Component {
  // Define an array of menu items as an array of objects
  state = {
    menuItems: [
      { name: 'Home', link: '/' },
      { name: 'AboutUs', link: '/aboutus' },
      { name: 'AllCourses', link: '/allcourses' },
      { name: 'Placements', link: '/placements' },
      { name: 'Internship', link: '/internship' },
      { name: 'ExistingStudents', link: '/existingstudents' },
      { name: 'Reviews', link: '/reviews' },
      { name: 'Blog', link: '/blog' }
    ]
  };

  render() {
    return (
      <header className="header">
        {/* Display the logo */}
        <div className="logo">
          <img src="https://www.achieversit.com/assets/images/logo-white.png" alt="Logo" />
        </div>

        {/* Use map to iterate over the array of items and display them */}
        <nav className="nav-menu">
          <ul>
            {this.state.menuItems.map((item, index) => (
              <li key={index}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
