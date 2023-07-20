import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Navbar from './components/Navbar';

function App() {
	const user = useSelector((state) => state.user.value);
	console.log('APP', user);
	
	return (
		<div className='App flex-auto p-0 m-0 w-screen'>
			<section className='navbar_container p-0 m-0 w-screen'>
				<Navbar />
			</section>
			<div className='body__container flex flex-row h-screen p-0 m-0 w-screen'>
				<section className='left__pane__container container w-1/4'>
					Left pane
				</section>
				<section className='right__pane__container container bg-gray-light p-0 m-0'>
					Right pane
				</section>
			</div>
		</div>
	);
}

export default App;
