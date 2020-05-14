import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { FaGithub, FaTwitter } from "react-icons/fa";

const NavbarWithLogo = styled.div`
	width: 100%;
	padding-top: 20px;
	display: grid;
	grid-template-columns: repeat(2, auto);
	align-items: center;
`;

const NavbarWithNavs = styled.div`
	display: grid;
	grid-template-columns: repeat(5, minmax(min-content, max-content));
	grid-column-gap: 1rem;
	white-space: nowrap;
	justify-self: end;
	align-items: center;
`;

const IconToExternalLink = styled.a`
	color: black;
	font-size: 25px;
`;

const Navbar = () => {
	return (
		<NavbarWithLogo>
			<Link href="/">
				<img
					src="/favicon.png"
					width={25}
					alt="just a orange square with rounded corners"
				/>
			</Link>
			<NavbarWithNavs>
				<Link href="/about">About</Link>
				<Link href="/blog">
					<a>Blog</a>
				</Link>
				<IconToExternalLink
					href="https://github.com/sreetamdas"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaGithub />
				</IconToExternalLink>
				<IconToExternalLink
					href="https://twitter.com/_SreetamDas"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaTwitter />
				</IconToExternalLink>
			</NavbarWithNavs>
		</NavbarWithLogo>
	);
};

export { Navbar };