import { CButton, CFormInput } from '@coreui/react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react';
import { FiSend } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { db } from '../../../firebase/firebase';

const MessagingArea = () => {
	const user = useSelector((state) => state.user.value);
	const [message, setMessage] = useState('');

	const handleKeyPress = (event) => {
		if (event.key === 'Enter') {
			sendMessage(event);
		}
	};

	const sendMessage = async (event) => {
		event.preventDefault();
		if (message.trim() === '') {
			alert('Enter valid message');
			return;
		}
		await addDoc(collection(db, 'messages'), {
			text: message,
			name: user.displayName,
			avatar: user.photoURL,
			createdAt: serverTimestamp(),
			uid: user.uid,
		});
		setMessage('');
	};

	return (
		<div className='h-fit py-3 flex justify-center items-center gap-2'>
			<CFormInput
				className='w-4/5'
				type='text'
				placeholder='Message...'
				value={message}
				onChange={(e) => setMessage(e.target.value)}
				onKeyDown={handleKeyPress}
			/>
			<CButton
				className='h-100 flex justify-center items-center'
				color='success'
				shape='rounded-circle'
				size='sm'
				variant='ghost'
				onClick={sendMessage}
			>
				<FiSend size='20' />
			</CButton>
		</div>
	);
};

export default MessagingArea;
