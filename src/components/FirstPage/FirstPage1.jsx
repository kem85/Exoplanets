import React from 'react';
import  'react-router-dom';
import { motion } from 'framer-motion';
import './FirstPage.css'; // Custom CSS for styling

function FirstPage() {
  const history = useHistory();

  // Function to handle button click and navigate to Method1
  const handleJourneyClick = () => {
    history.push('/method1');
  };

  return (
    <div className="first-page-container">
      <motion.h1
        className="welcome-text"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        Welcome to ExoPlanets World
      </motion.h1>
      
      <motion.button
        className="journey-button"
        onClick={handleJourneyClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Let's Take a Journey to Discover More About ExoPlanets
      </motion.button>
    </div>
  );
}

export default FirstPage;
