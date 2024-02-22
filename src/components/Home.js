import React, { useEffect, useState } from 'react';

const Home = () => {
  // Define an array of meaningful messages
  const messages = [
    "Welcome to our website!",
    "Learn new skills and grow with us!",
  ];

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [currentMessage, setCurrentMessage] = useState("");

  // useEffect hook to manage the typewriting effect
  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (currentMessage.length < messages[currentMessageIndex].length) {
        // Display one character at a time
        setCurrentMessage((prev) => messages[currentMessageIndex].substring(0, prev.length + 1));
      } else {
        // Once the message is fully typed, clear the interval and move to the next message
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentMessage(""); // Clear the current message
          setCurrentMessageIndex((prev) => (prev + 1) % messages.length); // Move to the next message
        }, 1000); // Delay before displaying the next message
      }
    }, 50); // Typing speed

    // Cleanup function to clear the interval
    return () => clearInterval(typingInterval);
  }, [currentMessage, currentMessageIndex, messages]);

  return (
    <div className="home-container">
      <div className="typewriter">
        <h1>{currentMessage}</h1>
      </div>
      <p className="explanation">
        Enhance your React skills by exploring our website and discovering innovative solutions!
      </p>
    </div>
  );
};

export default Home;

