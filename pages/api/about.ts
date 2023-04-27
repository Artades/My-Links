import { NextApiRequest, NextApiResponse } from "next";

const about = [
	{
		name: "Artyom's Links",
		avatarUrl: "/images/about/avatar.jpg",
		email:
			"mailto:artemijgalaj@gmail.com",
		description:
			"Hi there!👋 My name's Artyom, i'm a web developer who thrives on raising the bar for what's possible with cutting-edge technologies. I've been on this journey since the age of 16, and I've spent countless hours honing my skills in HTML, CSS, and JS. Along the way, I've also immersed myself in Node.js, database design, and other exciting tools and technologies. Today, I have great expirience in JavaScript, TypeScript, React, and React Native, and I'm always looking for ways to deliver engaging, innovative web experiences. Take a look at my apps to see some of my most impressive projects, as possible you can support me by links below and let's raise the bar together, my freind!😇 🚀 ",
	},
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	res.status(200).json({ data: about });
}
