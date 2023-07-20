import {
	CDropdown,
	CDropdownItem,
	CDropdownMenu,
	CDropdownToggle,
} from '@coreui/react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { FiUser } from 'react-icons/fi';
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
		<div className='flex justify-between px-5 py-3 bg-black text-white drop-shadow-xl items-center'>
			<section className='logo__section text-3xl'>Chat-e</section>
			{user ? (
				<section className='user__section stroke-5 hover:stroke-2'>
					{user.photoURL ? (
						<CDropdown>
							<CDropdownToggle
								caret={false}
								autoClose={true}
								variant='nav-item'
								style={{ padding: '0rem' }}
							>
								<img
									className='w-8 rounded-full'
									src={user.photoURL}
									alt={user.displayName}
								/>
							</CDropdownToggle>
							<CDropdownMenu>
								<CDropdownItem onClick={signOut}>Sign Out</CDropdownItem>
							</CDropdownMenu>
						</CDropdown>
					) : (
						<FiUser size={25} />
					)}
				</section>
			) : (
				<button
					className='signin__button rounded-full bg-white text-black md:px-5 px-3 py-1'
					onClick={googleSignIn}
				>
					Sign In
				</button>
			)}
		</div>
	);
};

export default Navbar;
