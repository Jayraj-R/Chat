import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserTo } from '../app/slices/userSlice';
import { auth } from '../firebase/firebase';

const Navbar = () => {
	const user = useSelector((state) => state.user.value);
	const dispatch = useDispatch();

	const googleSignIn = () => {
		const provider = new GoogleAuthProvider();

		signInWithPopup(auth, provider)
			.then((result) => {
				const user = result.user;
				dispatch(setUserTo(user.providerData[0]));
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				const email = error.customData.email;
				const credential = GoogleAuthProvider.credentialFromError(error);
				dispatch(setUserTo({ errorCode, errorMessage, email, credential }));
			});
	};

	const signOut = () => {
		auth.signOut();
		dispatch(setUserTo(null));
	};

	console.log('NAVBAR', user);

	return (
		<div className='container flex justify-between px-5 py-3 bg-black text-white drop-shadow-xl items-center'>
			<section className='logo__section text-3xl'>Chat-e</section>
			{user ? (
				<button onClick={signOut} className='sign-out' type='button'>
					Sign Out
				</button>
			) : (
				<button
					className='signin__button rounded-full bg-white text-black px-5 py-1'
					onClick={googleSignIn}
				>
					Sign In
				</button>
			)}
			<section className='user__section'> User</section>
		</div>
	);
};

export default Navbar;
