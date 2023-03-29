import React from "react";


const Menu = ({
	isShowed,
	description,
}: {
	isShowed: boolean;
	description: string;
}) => {
	return (
		<div
			className={`
			absolute
			right-0 top-0
			animate-scaleIn
            overflow-hidden
            px-5
			 py-4
			  bg-black 
            flex
			 items-start
			rounded-md
			flex-col 
			h-auto
			lg:w-[28rem]
			
               ${isShowed ? "flex" : "hidden"}
            `}
		>
			<span className="text-lg text-sky-700 font-bold">About Me</span>
			<hr className="w-full bg-sky-700 opacity-70 my-2" />
			<p className="text-sm text-neutral-200 ">{description}</p>
		</div>
	);
};

export default Menu;
