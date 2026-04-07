import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import FlexProject from './components/FlexProject/FlexProject';
//import TestComponent from './components/TestComponent/TestComponent'
// import CodeCard from './components/CodeCard/CodeCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons';
// import { useEffect } from 'react';
import { useState } from 'react';


function App() {
	const [isToggleOn, setIsToggleOn] = useState(false);  // NOT passing the object, instead we will use the appropriate Icon-object based on the value of the (isToggleIcon) State Variable.

	function changeIcon() {
		setIsToggleOn( (prevState) => !prevState );  // if Previous State is 'false' then it will set new state to 'true' and vice-versa	
		console.log('(Using Method-2) toogleIcon -> ' + isToggleOn);
	}


	return(
		<div className={` app-main-container  ${ isToggleOn ? 'border-toggle' : '' } `}>

			<FontAwesomeIcon icon={ isToggleOn ? faToggleOn : faToggleOff }  className='toggle-icon' onClick={changeIcon}  size='2x' />
			
			<Navbar />
			<Hero />
			<About />
			<FlexProject />
			{/* <CodeCard /> */}

			{/* <TestComponent /> */}
			
		</div>
	);
}

export default App;