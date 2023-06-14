import React from "react";

const GridSkeletons = () => {
	return (
		<div className="z-1 h-full w-full rounded-md drop-shadow-lg my-10 p-5">
			<div className="w-full grid gap-3 h-full grid-cols-2 lg:grid-cols-4">
				{[...Array(12)].map((_, index) => {
					return (
						<div
							key={index}
							className="animate-pulse w-full h-[160px] bg-zinc-800 rounded-md"
						></div>
					);
				})}
			</div>
		</div>
	);
};

export default GridSkeletons;
