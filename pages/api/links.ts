import { NextApiRequest, NextApiResponse } from "next";

const links = [
		{
		id: 1,
		title: "Flux",
		path: "https://fluux.vercel.app",
		imageUrl: "/images/links/flux.png",
		gradient: {
			from: "from-violet-500",
			to: "to-fuchsia-500",
		},
		recent: {
			status: true,
			color: "bg-indigo-500",
		},
	},
	{
		id: 2,
		title: "Telegram",
		path: "https://t.me/ive_got_a_migraine",
		imageUrl: "/images/links/telegram.png",
		gradient: {
			from: "from-cyan-300",
			to: "to-blue-500",
		},
		recent: {
			status: false,
		},
	},
	{
		id: 3,
		title: "Github",
		path: "https://github.com/artades",
		imageUrl: "/images/links/github.png",
		gradient: {
			from: "from-indigo-500",
			to: "to-blue-400",
		},
		recent: {
			status: false,
		},
	},
	{
		id: 4,
		title: "Instagram",
		path: "https://instagram.com/_ive_got_a_migraine",
		imageUrl: "/images/links/instagram.png",
		gradient: {
			from: "from-violet-500",
			to: "to-pink-400",
		},
		recent: {
			status: false,
		},
	},
	{
		id: 5,
		title: "Vitae (beta)",
		path: "https://vitae-beta.vercel.app",
		imageUrl: "/images/links/vitae-beta.png",
		gradient: {
			from: "from-sky-700",
			to: "to-blue-500",
		},
		recent: {
			status: true,
			color: "bg-sky-500",
		},
	},
	{
		id: 6,
		title: "Twitter",
		path: "https://twitter.com/ivgam_",
		imageUrl: "/images/links/twitter.svg",
		gradient: {
			from: "from-slate-300",
			to: "to-sky-500",
		},
		recent: {
			status: false,
		},
	},
	{
		id: 7,
		title: "Discord: #3639",
		path: "https://discord.com",
		imageUrl: "/images/links/discord.png",
		gradient: {
			from: "from-purple-300",
			to: "to-indigo-600",
		},
		recent: {
			status: false,
		},
	},
	{
		id: 8,
		title: "Vkontakte",
		path: "https://vk.com/ivgam",
		imageUrl: "/images/links/vk.svg",
		gradient: {
			from: "from-sky-300",
			to: "to-blue-400",
		},
		recent: {
			status: false,
		},
	},
	{
		id: 9,
		title: "Rick & Morty",
		path: "https://rm-ivgam.vercel.app",
		imageUrl: "/images/links/rm-ivgam.png",
		gradient: {
			from: "from-green-300",
			to: "to-sky-400",
		},
		recent: {
			status: true,
			color: "bg-green-500",
		},
	},
	{
		id: 10,
		title: "Green Yera",
		path: "https://green-yera.vercel.app",
		imageUrl: "/images/links/greenyera.png",
		gradient: {
			from: "from-slate-600",
			to: "to-emerald-400",
		},
		recent: {
			status: true,
			color: "bg-slate-600",
		},
	},

{
		id: 11,
		title: "Softlix",
		path: "https://softlix-gules.vercel.app",
		imageUrl: "/images/links/icons8-popcorn-96 (1).png",
		gradient: {
			from: "from-purple-600",
			to: "to-rose-500",
		},
		recent: {
			status: true,
			color: "bg-red-500",
		},
	},
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	res.status(200).json({ data: links });
}
