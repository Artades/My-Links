import { useOutside } from "@/hooks/useOutside";
import { AboutProps } from "@/interfaces/about.interface";
import React, { FC } from "react";
import Menu from "./Menu";
import Image from "next/image";
import imageLoader from "@/imageLoader";

interface Props {
	data: AboutProps;
}

const About: FC<Props> = ({ data }) => {
	const { isShowed, setIsShowed } = useOutside(false);
	const avatarUrl = data?.avatarUrl ? data?.avatarUrl : "";
	const blurDataURL = "BASE64_BLUR_DATA"; // Replace with the actual base64-encoded blur data

	return (
		<div className="w-full bg-zinc-800 rounded-md drop-shadow-lg">
			<Menu description={data?.description} isShowed={isShowed} />
			<div
				onClick={() => setIsShowed(!isShowed)}
				className="absolute top-2 right-2 bg-zinc-700 py-2 px-3 font-regular text-sm text-white rounded-md hover:opacity-60 cursor-pointer transition"
			>
				{isShowed ? "Esc" : "About me"}
			</div>

			<div className="flex flex-col w-full items-center h-full p-5">
				<Image
					alt=""
					src={avatarUrl}
					loading="lazy"
					loader={imageLoader}
					placeholder="blur"
					blurDataURL={blurDataURL}
					quality={100}
					width={40}
					height={40}
					className="w-40 h-40 rounded-full border-double border-4 border-sky-700"
				/>
				<h1 className="text-3xl text-white font-bold my-5 flex items-center">
					{data?.name}
					<img
						className="ml-3 w-5 h-5"
						src="/images/about/verificated.png"
						alt=""
					/>
				</h1>
				<div className="flex items-center">
					<a
						href={data?.email}
						rel="noreferrer"
						target="_blank"
						className="flex items-center py-2 px-7 text-md font-bold rounded-md text-white bg-blue-400 transition hover:shadow hover:bg-transparent hover:text-blue-500  border-2 border-blue-500"
					>
						<img className="w-5 h-5 mr-4" src="/images/about/mail.png" alt="" />{" "}
						<p>Email</p>
					</a>
					<a
						href={"https://ko-fi.com/ivgam"}
						rel="noreferrer"
						target="_blank"
						className="ml-3 flex items-center py-2 px-7 bg-rose-500 text-md font-bold rounded-md text-white hover:bg-transparent hover:text-rose-500 border-2 border-rose-600 transition hover:shadow"
					>
						<img
							className="w-5 h-5 mr-4"
							src="/images/about/donate.png"
							alt=""
						/>{" "}
						<p>Donate</p>
					</a>
				</div>
			</div>
		</div>
	);
};

export default About;
