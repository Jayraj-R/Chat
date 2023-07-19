import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Navbar from './components/Navbar';

function App() {
	const user = useSelector((state) => state.user.value);
	console.log('APP', user);
	
	return (
		<div className='App container mx-auto flex-auto'>
			<section className='navbar_container container mx-auto'>
				<Navbar />
			</section>
			<div className='body__container container mx-auto flex flex-row h-screen'>
				<section className='left__pane__container container w-1/4'>
					Left pane
				</section>
				<section className='right__pane__container container bg-gray-light'>
					Right pane
				</section>
			</div>
		</div>
	);
}

export default App;
