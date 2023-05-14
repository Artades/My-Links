/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
		domains: ["ivgam-links.vercel.app"],
		loader: "custom",
		path: "/",
	},
}

module.exports = nextConfig
