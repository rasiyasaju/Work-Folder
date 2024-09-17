import React from 'react';
import './Card.css';
import { FaStar } from 'react-icons/fa'; // Star icon

// Array of course data
const courses = [
  {
    id: 1,
    title: 'ANGULAR DEVELOPMENT COURSE',
    description: 'Learn the basics of React JS, including components, state, and props.',
    reviews: 4.5,
    reviewCount: 123
  },
  {
    id: 2,
    title: 'ADVANCED JAVASCRIPT COURSE ',
    description: 'Deep dive into JavaScript concepts like closures, promises, async/await, and more.',
    reviews: 4.0,
    reviewCount: 98
  },
  {
    id: 3,
    title: 'MAIN STACK DEVELOPMENT COURSE',
    description: 'Master layout techniques using CSS Flexbox and Grid for modern web design.',
    reviews: 3.8,
    reviewCount: 87
  },
  {
    id: 4,
    title: 'WEBDEVELOPMENT COURSE',
    description: 'Build scalable backend applications using Node.js and Express framework.',
    reviews: 4.7,
    reviewCount: 150
  },
  {
    id: 5,
    title: 'UI DEVELOPMENT COURSE',
    description: 'Build scalable backend applications using Node.js and Express framework.',
    reviews: 4.7,
    reviewCount: 136
  },
  {
    id: 6,
    title: 'PYTHON DEVELOPMENT COURSE',
    description: 'Build scalable backend applications using Node.js and Express framework.',
    reviews: 4.7,
    reviewCount: 150
  },
  {
    id: 7,
    title: 'JAVA FULLSTACK DEVELOPMENT COURSE',
    description: 'Build scalable backend applications using Node.js and Express framework.',
    reviews: 4.7,
    reviewCount: 165
  },
  {
    id: 8,
    title: 'DIGITAL MARKETING COURSE',
    description: 'Build scalable backend applications using Node.js and Express framework.',
    reviews: 4.7,
    reviewCount: 156
  },
  
{
    id: 9,
    title: 'WORDPRESS DEVELOPMENT COURSE',
    description: 'Level up your JavaScript skills by learning TypeScript and static typing.',
    reviews: 4.9,
    reviewCount: 200
  }
];

// Helper function to render star ratings
const renderStars = (rating) => {
  const totalStars = 5;
  const filledStars = Math.round(rating);
  
  return (
    <>
      {[...Array(totalStars)].map((star, index) => (
        <FaStar
          key={index}
          className="star-icon"
          color={index < filledStars ? '#ffc107' : '#e4e5e9'} // Filled vs Empty star
        />
      ))}
    </>
  );
};

// CourseCard component
const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <div className="course-reviews">
        <div className="star-rating">
          {renderStars(course.reviews)}
        </div>
        <span>{course.reviews} ({course.reviewCount} reviews)</span>
      </div>
    </div>
  );
};

// Main App Component
const Card = () => {
  return (
    <div className="app">
      <h1>TRENDING COURSES</h1>
      <div className="course-list">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Card;
