import Head from "next/head";
import { AboutProps } from "../interfaces/about.interface";
import React from "react";
import About from "../components/about/About";
import Grid from "@/components/grid/Grid";
import { LinkProps } from "../interfaces/link.interface";

export default function Home() {
	const [about, setAbout] = React.useState<AboutProps[]>([]);
	const [links, setLinks] = React.useState<LinkProps[]>([]);

	React.useEffect(() => {
		async function fetchData() {
			const response = await fetch("/api/about");
			const data = await response.json();
			setAbout(data.data);
		}
		async function fetchLinks() {
			const response = await fetch("/api/links");
			const data = await response.json();
			  setLinks(data.data as LinkProps[]);
}
		
		fetchData();
		fetchLinks();
	}, []);

	const data = [...about][0];

	return (
		<>
			<Head>
				<title>{data?.name}</title>
				<meta name="description" content="All usful links about me" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="container">
				<About data={data} />
				<Grid links={links} />
			</div>
		</>
	);
}
