"use client";
import { useState, useEffect } from "react";

const Header = () => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<header
			className={`fixed w-full top-0 z-[100] p-6 transition-colors duration-300 ${
				scrolled ? "bg-pink-200 shadow-md" : "bg-transparent"
			}`}
		>
			<div className="container max-w-[1200px] mx-auto flex justify-between items-center">
				<h1>HarmoniaVita</h1>
				<nav className="space-x-4">
					<ul className="flex space-x-4">
						<li>
							<a href="/">Početna</a>
						</li>
						<li>
							<a href="/about">O nama</a>
						</li>
						<li>
							<a href="/services">Blog</a>
						</li>
						<li>
							<a href="/contact">Kontakt</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
