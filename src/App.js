import './App.css';
import Navbar from './components/Navbar';
import { auth } from './firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function App() {
	const [user] = useAuthState(auth);
	return (
		<div className='App container mx-auto flex-auto'>
			<section className='navbar_container container mx-auto'>
				<Navbar />
			</section>
			<div className='body__container container mx-auto flex flex-row h-screen'>
				{!user ? 'Welcome' : 'ChatBox'}
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
