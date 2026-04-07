//import CodeCard from '../CodeCard/CodeCard';
import './Hero.css';
import profile_image from '../../assets/react.svg';


function Hero() {
    return (
       
        // Main-Container
        // <div className="hero-main-container" style={{ minHeight: 'calc(100dvh - 6rem)' }}>
        <div className="hero-main-container">
            <br />

            <img src={profile_image} alt="Profile Image" className='hero-profile-image' />
            {/* -------  Intro Container  ------- */}
            <div className="hero-intro-outer-wrapper">
                <h1 className='hero-intro-line-1'><span>I'm Mohit Singh,</span> a Backend Developer based in India.</h1>
                <p className='hero-intro-line-2'>I am a Tech Enthusiast and I love to turn people's imagination into useful, interactive, & impactful web products.</p>
            </div>

            <div className="hero-buttons-container">
                <div className='hero-contact-button'>Connect with me</div>
                <div className='hero-resume-button'>My resume</div>
            </div>

            {/* CodeCard: UI Component */}
            {/* <CodeCard /> */}

        </div>
    );
}

export default Hero;
