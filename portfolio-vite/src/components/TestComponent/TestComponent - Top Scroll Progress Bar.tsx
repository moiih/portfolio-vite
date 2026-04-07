import './TestComponent.css';
import { motion, useScroll, useTransform } from 'framer-motion';

function TestComponent() {
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ width }} // Apply the animated width
      />
      {/* Add long content here to enable scrolling */}
      <div style={{ height: '200vh' }}>
        Scroll down to see the progress bar fill up!
      </div>
    </>
  );
}

export default TestComponent;
