import React, { Component } from 'react';
import { FaFacebook, FaTwitter,FaInstagram,FaLinkedinIn } from 'react-icons/fa';
import './Footer.css'; // Optional: for custom styling

class Footer extends Component {
  // Footer data stored as an array of objects
  footerData = [
    {
      // First column with logo and description
      title: "",
      content: [
        {
          type: 'image',
          src: 'https://www.achieversit.com/assets/images/logo-white.png', // Replace with your logo URL
          alt: 'Company Logo',
        },
        {
          type: 'text',
          text: 'We provides a widegroup of oppotunities for freshers and Experienced candidate who can develop their skills and buid their carrer oppotunities across multiple companies.',
        },
      ],
    },
    {
      title: 'COMPANY',
      links: ['Home', 'Placements', 'Corporate Training', 'Contact Us'],
    },
    {
      title: 'TRENDING COURSES',
      links: ['UI Development COURSE', 'Angular JS course', 'React JS Course', 'Digital Marketing Course','Python Course'],
    },
    {
      title: 'CONTACT INFO',
      links: ['#63,1st floor,18th Main','8th cross BTM 1st stage,Bangaloor','India-560029','India:+918431-040-457' ,'info@achiversit.com'],
       
    },
    
    {
      title: 'SOCIAL MEDIA',
      socialLinks: [
        { name: 'Facebook', icon: 'fab fa-facebook', url: 'https://facebook.com' },
        { name: 'Twitter', icon: 'fab fa-twitter', url: 'https://twitter.com' },
        { name: 'Instagram', icon: 'fab fa-instagram', url: 'https://instagram.com' },
        { name: 'LinkedIn', icon: 'fab fa-linkedin', url: 'https://linkedin.com'},
      ],
    },
  ];

  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer-columns">
            {this.footerData.map((section, index) => (
              <div className="footer-column" key={index}>
                <h4>{section.title}</h4>
                <ul>
                  {/* First column: logo and description */}
                  {section.content
                    ? section.content.map((item, idx) => (
                        <li key={idx}>
                          {item.type === 'image' ? (
                            <img
                              src={item.src}
                              alt={item.alt}
                              className="footer-logo"
                            />
                          ) : (
                            <p>{item.text}</p>
                          )}
                        </li>
                      ))
                    : section.links // For regular links
                    ? section.links.map((link, idx) => (
                        <li key={idx}>
                          <a href={`/${link.toLowerCase().replace(' ', '-')}`}>
                            {link}
                          </a>
                        </li>
                      ))
                    : section.socialLinks.map((social, idx) => (
                        <li key={idx}>
                          <a
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className={social.icon}></i> {social.name}
                          </a>
                        </li>
                      ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Your E-Commerce Platform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;


 