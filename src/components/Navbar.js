import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebase';

const Navbar = () => {
	const [user] = useAuthState(auth);
	const provider = new GoogleAuthProvider();
	const googleSignIn = () => {
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider)
			.then((result) => {
				// This gives a Google Access Token. Can use it to access the Google API.
				const credential = GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;
				// The signed-in user info.
				const user = result.user;
				console.log('SUCCESS', credential, token, user);
			})
			.catch((error) => {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				// The email of the user's account used.
				const email = error.customData.email;
				// The AuthCredential type that was used.
				const credential = GoogleAuthProvider.credentialFromError(error);
				console.log('FAIL', errorCode, errorMessage, email, credential);
			});
	};

	const signOut = () => {
		auth.signOut();
	};

	console.log('NAVBAR', auth, provider);

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
