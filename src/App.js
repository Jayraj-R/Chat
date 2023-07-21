import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import ChatBox from './components/ChatBox';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';

function App() {
	const user = useSelector((state) => state.user.value);

	return (
		<div className='flex flex-column h-screen position-relative'>
			<section className='w-screen z-1'>
				<Navbar />
			</section>
			{!user && !user?.errorCode ? <Welcome /> : <ChatBox />}
		</div>
	);
}

export default App;
