import './App.css';

function App() {
	return (
		<div className='App container mx-auto flex-auto'>
			<section
				className='navbar_container container mx-auto'
				style={{ background: 'pink' }}
			>
				Navbar
			</section>
			<div className='body__container container mx-auto flex flex-row h-screen'>
				<section
					className='left__pane__container container'
					style={{ background: 'blue' }}
				>
					Left pane
				</section>
				<section
					className='right__pane__container container'
					style={{ background: 'green' }}
				>
					Right pane
				</section>
			</div>
		</div>
	);
}

export default App;
