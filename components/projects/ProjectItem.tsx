import React, {FC} from 'react';
import {ProjectProps} from "@/interfaces/project.interface";

const ProjectItem: FC<ProjectProps> = ({name, description, created_at, owner, language}) => {
    const createdDate = new Date(created_at);
    const formattedDate = createdDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    return (
			<a
				href={`https://github.com/artades/${name}`}
				target={"_blank"}
				className={" cursor-pointer"}
			>
				<div className={"rounded-lg  h-[200px] w-full flex  "}>
					<div className={"w-full h-full flex flex-col items-start gap-1"}>
						<span className={"text-indigo-400 text-sm mb-2"}>{formattedDate}</span>
						<div className="flex items-center mb-3">
							<img
								src={owner.avatar_url}
								alt={owner.login}
								className="rounded-full p-1 border border-dashed border-indigo-600 mr-3"
								style={{ width: "50px", height: "50px" }}
							/>
							<p className={"text-md font-bold text-neutral-300 py-3"}>
								{name.toUpperCase()}
							</p>
						</div>

						<p className={"text-sm text-neutral-300 lg:max-w-[60%] "}>
							{description ? description : "No description"}
						</p>
						<span className="text-sm text-emerald-500 absolute bottom-3">{language}</span>
					</div>
				</div>
			</a>
		);
};

export default ProjectItem;