import React from 'react';
import ChatArea from './ChatArea';

const ChatBox = () => {
	return (
		<div className='flex flex-1 flex-row h-1'>
			{/* <section className='w-1/4 h-100'>
				<ChatList />
			</section> */}
			<section className='bg-gray-light w-100 h-100 flex flex-column'>
				<ChatArea />
			</section>
		</div>
	);
};

export default ChatBox;
