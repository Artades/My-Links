import { LinkProps } from "@/interfaces/link.interface";
import React, { FC } from "react";
import GridItem from "./GridItem";

const Grid: FC<{ links: LinkProps[] }> = ({ links }) => {
	

	return (
		<div className="z-1  h-full w-full rounded-md drop-shadow-lg my-5 p-1">
			<div className="w-full grid gap-3  h-full grid-cols-2 lg:grid-cols-4 ">
				{links.map((link: any) => {
					return <GridItem key={link?.id} link={link} />;
				})}
			</div>
		</div>
	);
};

export default Grid;
