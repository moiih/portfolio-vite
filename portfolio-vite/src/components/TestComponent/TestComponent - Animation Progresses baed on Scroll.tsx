import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

function TestComponent() {

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    });
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
    const x = useTransform(scrollYProgress, [0, 1], [-100, 100]); // Animate horizontal position

  return (
    <>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '200vh' }}>
        <motion.div
        ref={targetRef}
        style={{ opacity, x }} // Apply the motion values
        >
            {/* Your content here */}
            <h1>Scroll me!</h1>
        </motion.div>
    </div>
    </>
  );
}

export default TestComponent;
