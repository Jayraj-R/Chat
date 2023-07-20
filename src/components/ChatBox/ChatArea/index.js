import React from 'react';
import Chats from './Chats';
import MessagingArea from './MessagingArea';

const ChatArea = () => {
	return (
		<div className='flex flex-column items-center h-100 w-100'>
			<Chats /> <MessagingArea />
		</div>
	);
};

export default ChatArea;
