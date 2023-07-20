import {
	collection,
	limit,
	onSnapshot,
	orderBy,
	query,
} from 'firebase/firestore';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { db } from '../../../firebase/firebase';
import { firebaseTimestampToTime } from '../../../utils/timeUtils';

const Chats = () => {
	const user = useSelector((state) => state.user.value);
	const [messages, setMessages] = useState([]);
	const scroll = useRef();

	useEffect(() => {
		const q = query(
			collection(db, 'messages'),
			orderBy('createdAt', 'desc'),
			limit(50)
		);
		const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
			const fetchedMessages = [];
			QuerySnapshot.forEach((doc) => {
				fetchedMessages.push({ ...doc.data(), id: doc.id });
			});
			const sortedMessages = fetchedMessages.sort(
				(a, b) => a.createdAt - b.createdAt
			);
			setMessages(sortedMessages);
		});
		return () => unsubscribe;
	}, []);

	useEffect(() => {
		console.log('BEFORE');
		scroll.current?.scrollIntoView({ behavior: 'smooth' });
		console.log('AFTER');
	}, [messages]);

	console.log(scroll.current);

	return (
		<div className='bg-blue-light w-100 flex flex-column items-center px-3 py-2 gap-2 overflow-auto h-100'>
			{messages?.map((message) => (
				<div
					className={`flex justify-center items-center gap-3 text-left ${
						message.uid === user.uid
							? 'self-end flex-row-reverse'
							: 'self-start'
					}`}
				>
					<img
						className='w-10 h-10 rounded-full drop-shadow-md'
						src={message.avatar}
						alt='avatar'
					/>
					<div
						className={`w-fit max-w-xs py-1 drop-shadow-md rounded-md ${
							message.uid === user.uid
								? 'curr-user-message rounded-tr-none pr-2 pl-3 bg-brown-light'
								: 'other-user-message rounded-tl-none pr-3 pl-2  bg-white'
						}`}
					>
						<p className='text-gray text-xs'>{message.name}</p>
						<p className='text-black'>{message.text}</p>
						<p className='text-gray text-xs text-right'>
							{firebaseTimestampToTime(message.createdAt)}
						</p>
					</div>
				</div>
			))}
			<span ref={scroll}></span>
		</div>
	);
};

export default Chats;
