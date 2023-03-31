import { LinkProps } from "@/interfaces/link.interface";
import React, { FC } from 'react';
import Notification from "../ui/Notification";

const GridItem:FC<{link: LinkProps}> = ({link}) => {
    return (
			<a href={link?.path} target="_blank" className="cursor-pointer">
				<div
					className={`w-full h-[160px] ease-in-out  duration-400 rounded-[20px_0_20px_0] transition border border-sky-300 bg-gradient-to-r ${link.gradient.from} ${link.gradient.to} bg-left
					hover:scale-[1.11] hover:bg-gradient-to-l hover:opacity-90
					`}
				>
					{  link?.recent.status === true &&  link?.recent.color
					
					?
					(<Notification color={link?.recent.color}/>) 
					: 
					''
					} 
					<div className="w-full h-full flex flex-col items-center justify-between py-3 ">
						<div className=" w-full flex items-center justify-center">
							<img
								src={link?.imageUrl}
								className="h-[60px] w-[60px] "
								alt="Link"
							/>
						</div>
						<p className="text-xl text-white">{link?.title}</p>
					</div>
				</div>
			</a>
		);
};

export default GridItem;