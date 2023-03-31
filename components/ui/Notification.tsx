import React from 'react';

const Notification = ({color}:{color:string}) => {
    return (
			<div className='cursor-pointer'>
				<span className="relative flex h-4 w-4 ">
					<span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${color} opacity-75 `}></span>
					<span className={`relative inline-flex rounded-full h-4 w-4 ${color}`}></span>
				</span>
			</div>
		);
};

export default Notification;