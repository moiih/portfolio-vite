import './About.css';
import aboutMe_image from '../../assets/dummy-1.png';
import Logo from '../../assets/logos/logos.ts';
import { useState } from 'react';



/*
    Today's Task(s) =>  - Add Hovering Animation Effect to the Logos. (Done ☑️)

                        - Add Dell EMC & Cohesity Logos if feel the requirement. (Decision-interim)

                        - Create a Different Cursor Pointer for the site. (To be done...Around ending)

                        - Break the Logos into Groups of 4-4 into 3 rows    (Does not seem necessary as of now)
                            & also add a Magic Window(Box) on the Right Side 
                            with Image Background and Tranparent Logo Text over it.
                        
                        - Add a Active Tab Chasing wrapper-box/pill in the table section 
                            which goes from one table cell to another by following the 
                            Active Tab coordinates.

                        - Were you able to chase/expand the "jQuery" & "HTML5" Logos ? 
                            A little tricky, right ? But possible!
                            KUDOS for expansing all items ;-)
                            
*/



// Main 'About' Component
function About() {

    const [visibleAboutSection, setVisibleAboutSection] = useState('skills');
    const [activeLogoName, setActiveLogoName] = useState('javascript');

    const logoStyleTransition = (isLogoActive: boolean) => ({
        // opacity: isLogoActive ? 1 : 0,
        // width: isLogoActive ? 'auto' : '0',
        // transition: 'all 0.3s ease-in-out'
        // transition: '0.5s',

        marginLeft: isLogoActive ? '9px' : '0px',
        marginRight: isLogoActive ? '3px' : '0px', 
        opacity: isLogoActive ? 1 : 0,
        transform: isLogoActive ? 'translateX(0)' : 'translateX(-10px)',
        // width: isLogoActive ? '200px' : '0px', 
        maxWidth: isLogoActive ? '200px' : '0px', 
        overflow: 'hidden',  // Can be skipped, but just for safety
        whiteSpace: 'nowrap',
        // transition: 'all 0.4s ease-in-out',
        transition: 'all 0.6s ease-in-out',
        display: 'inline-block',  // Can be skipped, but just for safety (fallback)
        verticalAlign: 'middle'  // Can be skipped, but just to be double sure (fallback)
    });

    // Method to change the visibility of the About Sections (like Skills, Edu., Exp.) on 'onClick' event
    function changeVisibleAboutSection(aboutSection: string) {
        setVisibleAboutSection(aboutSection);
        // setIsInfoVisible( (prevState) => !prevState );
    }

    // Function to show the clicked/hovered Logo Name against the Logo
    function changeActiveLogoName(active_logo_name: string) {
        setActiveLogoName(active_logo_name);
    }

    return (
        // <div className="aboutMe-main-container" style={{ minHeight: '100dvh' }}>
        <div className="aboutMe-main-container">
            <h1 className='aboutMe-title'>About Me</h1>
            <div className='aboutMe-description-container'>

                {/* To Make the About Imahe and Description Part Flex(ible) for smaller screens(mobile phones) */}
                <div className="flex-wrapper-img-description">
                    {/* About Image */}
                    <img src={aboutMe_image} alt="About_Me Image" className='aboutMe-image' />

                    {/* <p> 
                            (Answer for some FAQ)
                            I have tendency to gain more knowledge about any technology I am work on, so that I can start building from scratch and have full control over each and very element in the products. 
                            I see every obstacle as a challenge and am very determined to tackle it and find a solution.
                    </p> */}

                    {/* About Description */}
                    <div className='paragraphs-main-aboutMe'>
                        <p className='para-1-aboutMe'>
                        I am a web developer. I have keen interest in leveraging the web technologies to create 
                        interactive web-experiences for people. Originality and uniqueness are two of my strong strengths 
                        which I use heavily in my projects to make them look a bit different from the traditional ones.
                        </p>
                        <p className='para-2-aboutMe'>
                            I am capable of writing both the frontend and the backend part of any web application, along with 
                            creating and managing the schema and operations of the database to support the app.
                        </p>

                        <div className="info-strip-aboutMe">
                            <div className="section-aboutMe skills-section-aboutMe" onClick={() => changeVisibleAboutSection('skills')}>
                                <span className='skills-title-aboutMe strip-title'>
                                    {/* Skills */}
                                    {/* Skills & Tech Stack */}
                                    Tools & Tech
                                    {/* <a className={`${(visibleAboutSection!=='skills') ? 'hover-underline': ''}`}>Tools & Tech</a> */}
                                    <div style={{ borderBottom: '2px solid yellow' }} className={`magic-underline ${(visibleAboutSection==='skills') ? 'active-tab': ''}`}></div>
                                </span>
                            </div>
                            <div className="section-aboutMe education-section-aboutMe" onClick={() => changeVisibleAboutSection('education')}>
                                <span className='edu-title-aboutMe strip-title'>
                                    Education
                                    {/* <a className={`${(visibleAboutSection!=='education') ? 'hover-underline': ''}`}>Education</a> */}
                                    <div style={{ borderBottom: '2px solid yellow' }} className={`magic-underline ${(visibleAboutSection==='education') ? 'active-tab': ''}`}></div>
                                </span>
                            </div>
                            <div className="section-aboutMe experience-section-aboutMe" onClick={() => changeVisibleAboutSection('experience')}>
                                <span className='exp-title-aboutMe strip-title'>
                                    Experience
                                    {/* <a className={`${(visibleAboutSection!=='experience') ? 'hover-underline': ''}`}>Experience</a> */}
                                    <div style={{ borderBottom: '2px solid yellow' }} className={`magic-underline ${(visibleAboutSection==='experience') ? 'active-tab': ''}`}></div>
                                </span>
                            </div>
                        </div>
                        

                        {/* Applying LOGIC for Conditionally 'visibiling' the About Sections based on the above 'onClick(s)' */}
                        <div className='info-description-aboutMe'>
                            

                            {/* ---------- Skills Data (LOGOS) Section ---------- */}
                            {  
                                // ShortCircuiting -->  (true && expression => expression (renders expressions)) 
                                //                                        [ AND ]
                                //                      (false && expression => false (renders nothing))
                                (visibleAboutSection === 'skills') && (

                                    <div className='skills-description-aboutMe float-down-effect'>
                                        <div className='skills-logo-wrapper' onMouseEnter={() => changeActiveLogoName('django')}>
                                            <img src={Logo.django_logo} alt="Django-Logo" className='skills-logo' />
                                            {/* { activeLogoName === 'django' ? <span style={{ transition: '2s' }}>Django</span> : '' } */}
                                            <span style={logoStyleTransition(activeLogoName === 'django')}>Django</span>
                                        </div>
                                        <div className='skills-logo-wrapper' onMouseEnter={() => changeActiveLogoName('react')}>
                                            <img src={Logo.react_logo} alt="React-Logo" className='skills-logo' />
                                            {/* { activeLogoName === 'react' ? <span style={{ transition: '2s' }}>React</span> : '' } */}
                                            <span style={logoStyleTransition(activeLogoName === 'react')}>React</span>
                                        </div>
                                        <div className='skills-logo-wrapper' onMouseEnter={() => changeActiveLogoName('javascript')}>
                                            <img src={Logo.javascript_logo} alt="JavaScript-Logo" className='skills-logo' />
                                            <span style={logoStyleTransition(activeLogoName === 'javascript')}>JavaScript</span>
                                        </div>
                                        <div className='skills-logo-wrapper' onMouseEnter={() => changeActiveLogoName('typescript')}>
                                            <img src={Logo.typescript_logo} alt="TypeScript-Logo" className='skills-logo' />
                                            <span style={logoStyleTransition(activeLogoName === 'typescript')}>TypeScript</span>
                                        </div>
                                        <div className='skills-logo-wrapper' onMouseEnter={() => changeActiveLogoName('django_rest')}>
                                            <img src={Logo.django_REST_logo} alt="Django-REST-Logo" className='skills-logo' />
                                            <span style={logoStyleTransition(activeLogoName === 'django_rest')}>Django-REST Framework</span>
                                        </div>
                                        <div className='skills-logo-wrapper' onMouseEnter={() => changeActiveLogoName('jquery')}>
                                            <img src={Logo.jquery_logo} alt="jQuery-Logo" className='skills-logo' /> 
                                            <span style={logoStyleTransition(activeLogoName === 'jquery')}>jQuery</span>
                                        </div>
                                        <div className='skills-logo-wrapper' onMouseEnter={() => changeActiveLogoName('html5')}>
                                            <img src={Logo.HTML5_logo} alt="HTML5-Logo" className='skills-logo' />
                                            <span style={logoStyleTransition(activeLogoName === 'html5')}>HTML 5</span>
                                        </div>
                                        <div className='skills-logo-wrapper' onMouseEnter={() => changeActiveLogoName('css3')}>
                                            <img src={Logo.CSS3_logo} alt="CSS3-Logo" className='skills-logo' />
                                            <span style={logoStyleTransition(activeLogoName === 'css3')}>CSS 3</span>
                                        </div>
                                        <div className='skills-logo-wrapper' onMouseEnter={() => changeActiveLogoName('mysql')}>
                                            <img src={Logo.MySQL_logo} alt="MySQL-Logo" className='skills-logo' />
                                            <span style={logoStyleTransition(activeLogoName === 'mysql')}>MySQL Database</span>
                                        </div>
                                        <div className='skills-logo-wrapper' onMouseEnter={() => changeActiveLogoName('c_lang')}>
                                            <img src={Logo.c_logo} alt="C-Logo" className='skills-logo' />
                                            <span style={logoStyleTransition(activeLogoName === 'c_lang')}>'C' Language</span>
                                        </div>
                                        <div className='skills-logo-wrapper' onMouseEnter={() => changeActiveLogoName('cpp_lang')}>
                                            <img src={Logo.cpp_logo} alt="Cpp-Logo" className='skills-logo' />
                                            <span style={logoStyleTransition(activeLogoName === 'cpp_lang')}>"C++" Language</span>
                                        </div>
                                        <div className='skills-logo-wrapper' onMouseEnter={() => changeActiveLogoName('java')}>
                                            <img src={Logo.java_logo} alt="Java-Logo" className='skills-logo' />
                                            <span style={logoStyleTransition(activeLogoName === 'java')}>Java</span>
                                        </div>
                                        <div className='skills-logo-wrapper' onMouseEnter={() => changeActiveLogoName('python')}>
                                            <img src={Logo.python_logo} alt="Python-Logo" className='skills-logo' />
                                            <span style={logoStyleTransition(activeLogoName === 'python')}>Python</span>
                                        </div>
                                        <div className='skills-logo-wrapper' onMouseEnter={() => changeActiveLogoName('scripting')}>
                                            <img src={Logo.scripting_logo} alt="Scripting-Logo" className='skills-logo' />
                                            <span style={logoStyleTransition(activeLogoName === 'scripting')}>Scripting</span>
                                        </div>
                                    </div>
                                )
                            }


                            {/* ---------- Education Data (YEARS) Section ---------- */}
                            {
                                (visibleAboutSection === 'education') && (

                                    <div className="education-description-aboutMe float-down-effect">
                                        <div>
                                            <span className='gradient-year'>2023 - 2025</span>
                                            <p className='year-paragraph'>Master of Computer Applications</p>
                                            {/* <p>Master of Computer Applications &#40;MCA&#41;</p> */}
                                        </div>
                                        <div>
                                            <span className='gradient-year'>2021 - 2023</span>
                                            <p className='year-paragraph'>Worked in an IT Job</p>
                                        </div>
                                        <div>
                                            <span className='gradient-year'>2018 - 2021</span>
                                            <p className='year-paragraph'>Bachelor of Computer Applications</p>
                                            {/* <p>Bachelor of Computer Applications &#40;BCA&#41;</p> */}
                                        </div>
                                    </div>
                                )
                            }


                            {/* ---------- EXPERIENCE Data (TABLE) Section ---------- */}
                            {
                                (visibleAboutSection === 'experience') && (
                                    
                                    <div className="experience-description-aboutMe float-down-effect">
                                        <div>
                                            <span className='gradient-year'>2021 - 2023</span>

                                            <table className='experience-desc-table'>
                                                <tbody>
                                                    <tr>
                                                        <td className='experience-desc-heads'>Organisation</td>
                                                        <td className='experience-desc-data'>Tata Consultancy Services</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='experience-desc-heads'>Worked as</td>
                                                        <td  className='experience-desc-data'>Backup Support Engineer</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='experience-desc-heads'>Duration</td>
                                                        <td  className='experience-desc-data'>2 Years</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='experience-desc-heads'>Technologies & Tools I worked on</td>
                                                        {/* <td className='experience-desc-heads' style={{ lineHeight: '1.4rem' }}>
                                                            Technologies & Tools 
                                                            <p>I worked on</p>
                                                        </td> */}
                                                        <td  className='experience-desc-data'>
                                                            <ul className='exp-tech-tool-list'>
                                                                <li>- Dell EMC Data Protection Suit: Avamar, Networker, DPA</li>
                                                                <li>- Cohesity: Data Security & Management Software</li>
                                                                <li>- Virtual Machines & Windows Servers</li>
                                                            </ul>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                        </div>
                                    </div>
                                )
                            }

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default About;
