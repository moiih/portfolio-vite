import './FlexProject.css';
import { motion } from 'motion/react';

function FlexProject() {
    return (
        // <div className="flex-project-main-container" style={{ minHeight: '100dvh' }}>
        <div className="flex-project-main-container">
            
                {/* MAY BE FOR A Filler Component before it */}
            {/* <div className='' style={{ lineHeight: '0.7rem' }}>
                <div>Let me show you a</div>
                <br />
                <div>small glimpse of my favourite project.</div>
            </div> */}

            <motion.div
                initial = {{ opacity: 0, y: 8 }}
                animate = {{ opacity: 1 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeIn' }}
                className='animation-container-flex-project'
            >
                <div className="left-text-flexProject">Survey</div>
                <div className="card-screenshots-flexProject"></div>
                <div className="right-text-flexProject">App</div>
            </motion.div>

        </div>
    );
}

export default FlexProject;
