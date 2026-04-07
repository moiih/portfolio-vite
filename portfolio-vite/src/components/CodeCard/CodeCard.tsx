import './CodeCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faCube, faMagnifyingGlass, faCodeBranch, faGear, faBorderAll } from '@fortawesome/free-solid-svg-icons';
import { faCopy } from '@fortawesome/free-regular-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';

function CodeCard() {
    return (
        // Code Card Outer Wrapper Container
        // <div className='code-card-outer-wrapper'>
            <div className='code-template-container  code-template'>
                <div className="code-top-title-bar">
                    <div className="code-top-bar">
                        <FontAwesomeIcon icon={faCircle} color='#FF605C' />
                        <FontAwesomeIcon icon={faCircle} color='#FFBD44' />
                        <FontAwesomeIcon icon={faCircle} color='#00CA4E' /> 
                    </div>
                </div>

                <div className="code-bottom-left-side-bar">
                    <div className="code-side-bar">
                        <div className='code-toolbar-left-strip-col-1'>
                            <div style={{ marginLeft: '1px', marginTop: '5px' }}> 
                                <FontAwesomeIcon icon={faCopy} size='sm' />
                            </div>
                            <div style={{ marginLeft: '1px', marginTop: '8px' }}> 
                                <FontAwesomeIcon icon={faMagnifyingGlass} size='sm' />
                            </div> 
                            <div style={{ marginLeft: '1px', marginTop: '8px' }}> 
                                <FontAwesomeIcon icon={faCodeBranch} size='sm' />
                            </div> 
                            <div style={{ marginLeft: '1px', marginTop: '8px' }}> 
                                <FontAwesomeIcon icon={faBorderAll} size='sm' />
                            </div>
                            <div style={{ marginLeft: '1px', marginTop: '36px' }}> 
                                <FontAwesomeIcon icon={faGear} size='sm' className='settings-gear-icon' />
                            </div>
                        </div>
                    </div>
                    {/* Code Side bar Ends Here X */}
                </div>


                <div className='code-bottom-right-code-bar'>
                    {/* Code Breadcrum */}
                    <div className='code-breadcrum' style={{ backgroundColor: "rgb(99, 114, 255)", width: "fit-content"}}>
                        <div className='breadcrum' style={{ fontWeight: "500", fontFamily: "cursive", padding: "2px" }}>
                            &nbsp;...src &#62; 
                            <FontAwesomeIcon icon={faCube} style={{ fontSize: '12.5px', marginLeft: '3px' }} />component &#62; 
                            feel &#62; 
                            <FontAwesomeIcon icon={faReact} style={{ marginLeft: '3px' }} />happy.jsx&nbsp;
                        </div>
                    </div>
                    {/* Code Breadcrum Ends Here X*/}
                    

                    {/* Code Spans */}
                    <div className="code-spans" style={{ paddingTop: "20px" }}>
                        <span className="code-line-1">1 &nbsp; 
                            <span> 
                                <span style={{ color: '#085fff' }}>function</span>&nbsp;
                                <span style={{ color: '#FFBD44' }}>dear</span> 
                                <span style={{ color: '#eaff00' }}>&#40;</span>
                                employer
                                <span style={{ color: '#eaff00' }}>&#41;</span>
                                &nbsp;&#123;
                            </span> 
                        </span> <br/>

                        <span className="code-line-2">2 &nbsp; 
                            <span style={{ paddingLeft: "15px"  }}> 
                                if&nbsp; 
                                <span style={{ color: '#eaff00' }}>&#40;</span>
                                <span style={{ color: '#e600ff' }}>&nbsp;company</span>
                                &#46;
                                <span style={{ color: '#2adc03' }}>needs</span>
                                &nbsp;&#61;&#61;&#61; &#39;
                                <span style={{ color: '#ebfe22' }}>versatility</span>
                                &#39;&nbsp; 
                                <span style={{ color: '#eaff00' }}>&#41;</span>
                                &nbsp;&#123; 
                            </span> 
                        </span> <br/>
                        
                        <span className="code-line-3">3 &nbsp; 
                            <span style={{ paddingLeft: "42px"  }}> 
                                <span style={{ color: '#ca3535'  }}>your</span>
                                &#46;
                                <span style={{ color: '#00c3ff'  }}>search</span>
                                &nbsp;&#61;&nbsp;
                                <span style={{ color: '#FFBD44'  }}>stops</span>
                                <span style={{ color: '#eaff00' }}>&#40;</span>
                                &#39;
                                <span style={{ color: ''  }}>now</span>
                                &#39;
                                <span style={{ color: '#eaff00' }}>&#41;</span>
                            </span> 
                        </span> <br/>

                        <span className="code-line-4">4 &nbsp; 
                            <span style={{ paddingLeft: "46px"  }}> 
                                hire
                                <span style={{ color: '#eaff00' }}>&#40;</span>
                                <span style={{ color: '#65ff12' }}>me</span>
                                &#46;
                                <span>dev</span>
                                <span style={{ color: '#eaff00' }}>&#41;</span>
                            </span> 
                        </span> <br/>

                        <span className="code-line-2">5 &nbsp; <span style={{ paddingLeft: "15px"  }}> &#125; </span> </span> <br/>
                        <span className="code-line-1">6 &nbsp; <span> &#125; </span> </span> <br/>
                        <br />                        
                    </div>
                    {/* Code Spans End Here X */}

                </div>
            </div>
        // </div>
    );
}

export default CodeCard;
