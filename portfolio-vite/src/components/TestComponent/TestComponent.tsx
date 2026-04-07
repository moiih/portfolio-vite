import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BlockingOverlay = ({ onAnimationComplete  }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      exit={{ opacity: 0, transition: { duration: 0.5, delay: 0.5 } }} // Add a delay to match content exit
      transition={{ duration: 0.5 }}
      // Use onAnimationComplete to signal the process is done
      onAnimationComplete={onAnimationComplete}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'black', // Semi-transparent overlay
        zIndex: 10, // Ensure it's above other content
        pointerEvents: 'auto', // It should catch all clicks
      }}
    />
  );
};

const PageContent = () => {
  // Your main page content here
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }} // Delay exit until overlay is fully visible/ready to exit
      style={{ padding: '20px' }}
    >
      <h1>Welcome!</h1>
      <button onClick={() => alert('Clicked!')}>Click Me</button>
      <p>Content is interactive now.</p>
    </motion.div>
  );
};

export default function TestComponent() {
  const [isLoading, setIsLoading] = useState(true);

  // Function to call when the overlay/page transition is complete
  const handleAnimationComplete = () => {
    // Only set loading to false after all animations are done
    // In this specific example, AnimatePresence manages timing automatically for children
    // but a manual state ensures everything is truly ready.
    if (isLoading) {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AnimatePresence mode="wait"> {/* mode="wait" ensures exit finishes before enter starts */}
        {isLoading ? (
          <BlockingOverlay key="overlay" onAnimationComplete={handleAnimationComplete} />
        ) : (
          <PageContent key="content" />
        )}
      </AnimatePresence>
      {/* While isLoading is true, interactions are inherently blocked by the overlay. 
      Alternatively, you could apply a 'pointerEvents: none' style to the body or a main wrapper div */}
      <style>{`
        body {
          pointer-events: ${isLoading ? 'none' : 'auto'};
        }
      `}</style>
    </>
  );
}
