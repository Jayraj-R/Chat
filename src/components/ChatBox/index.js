import React from 'react';
import ChatArea from './ChatArea';
import ChatList from './ChatList';

const ChatBox = () => {
	return (
		<div className='body__container flex flex-1 flex-row p-0 m-0 w-screen'>
			<section className='left__pane__container container w-1/4'>
				<ChatList />
			</section>
			<section className='right__pane__container container bg-gray-light p-0 m-0'>
				<ChatArea />
			</section>
		</div>
	);
};

export default ChatBox;
