import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import ChatBox from './components/ChatBox';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';

function App() {
	const user = useSelector((state) => state.user.value);

	return (
		<div className='flex flex-column p-0 m-0 w-screen h-screen'>
			<section className='navbar_container p-0 m-0 w-screen'>
				<Navbar />
			</section>
			{!user && !user?.errorCode ? <Welcome /> : <ChatBox />}
		</div>
	);
}

export default App;
