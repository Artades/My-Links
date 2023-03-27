import { NextApiRequest, NextApiResponse } from 'next';

const about = [
	{
	name: "Ivgam's Links",
	avatarUrl: "/images/about/avatar.jpg",
	email: "artemijgalaj@gmail.com",
	description: "Hello, my name is Artyom and i'm 18"
	}
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({ data: about });
}