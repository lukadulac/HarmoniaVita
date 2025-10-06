"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
	const [scrolled, setScrolled] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const headerRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);

			if (isOpen && headerRef.current) {
				const headerHeight = headerRef.current.offsetHeight;
				document.documentElement.style.setProperty(
					"--header-height",
					`${headerHeight}px`
				);
			}
		};

		if (headerRef.current) {
			const headerHeight = headerRef.current.offsetHeight;
			document.documentElement.style.setProperty(
				"--header-height",
				`${headerHeight}px`
			);
		}

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [isOpen]);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
		document.body.style.overflow = !isOpen ? "hidden" : "auto";
	};

	const closeMenu = () => {
		setIsOpen(false);
		document.body.style.overflow = "auto";
	};

	return (
		<header
			ref={headerRef}
			className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
				scrolled
					? "bg-hv-gold backdrop-blur-md shadow-md py-3"
					: "bg-transparent py-4"
			}`}
		>
			<div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
				<Link href="/" className="flex items-center gap-2">
					<Image
						src="/HarmoniaVitaLogo.png"
						alt="Logo"
						width={100}
						height={100}
						className="object-contain rounded-full"
						priority
					/>
				</Link>

				{/* Desktop navigacija */}
				<nav className="hidden md:block">
					<ul className="flex items-center space-x-8 text-gray-700 font-medium">
						<li>
							<Link
								href="/"
								className="relative text-white text-bold text-xl hover:text-hv-green-dark transition-colors duration-200
	after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-hv-green-dark after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
							>
								Početna
							</Link>
						</li>
						<li>
							<Link
								href="/onama"
								className="relative text-gray-700 text-bold text-xl hover:text-hv-green-dark transition-colors duration-200
	after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-hv-green-dark after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
							>
								O nama
							</Link>
						</li>
						<li>
							<Link
								href="/usluge"
								className="relative text-gray-700 text-bold text-xl hover:text-hv-green-dark transition-colors duration-200
	after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-hv-green-dark after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
							>
								Usluge
							</Link>
						</li>
						<li>
							<Link
								href="/blog"
								className="relative text-gray-700 text-bold text-xl hover:text-hv-green-dark transition-colors duration-200
	after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-hv-green-dark after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
							>
								Blog
							</Link>
						</li>
						<li>
							<Link
								href="/kontakt"
								className="relative text-gray-700 text-bold text-xl hover:text-hv-green-dark transition-colors duration-200
	after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-hv-green-dark after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
							>
								Kontakt
							</Link>
						</li>
					</ul>
				</nav>

				{/* Hamburger dugme (mobilni) */}
				<div className="md:hidden flex items-center">
					<button
						onClick={toggleMenu}
						className="relative w-8 h-8 flex items-center justify-center focus:outline-none group"
						aria-label={isOpen ? "Zatvori meni" : "Otvori meni"}
					>
						<div className="relative w-6 h-5">
							{/* Hamburger ikonica */}
							<div
								className={`absolute inset-0 flex flex-col justify-between transition-all duration-300 ${
									isOpen ? "opacity-0 rotate-90" : "opacity-100"
								}`}
							>
								<Image
									src="/icons/mobile-menu.svg"
									alt="Menu"
									width={24}
									height={24}
									className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
								/>
							</div>

							{/* Close ikonica */}
							<div
								className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
									isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
								}`}
							>
								<Image
									src="/icons/close-svgrepo-com.svg"
									alt="Close menu"
									width={24}
									height={24}
									className="svg w-6 h-6 transition-transform duration-300 group-hover:rotate-90"
								/>
							</div>
						</div>
					</button>
				</div>
			</div>

			{/* Mobile sidebar meni */}
			<div
				className={`fixed top-[var(--header-height,72px)] right-0 w-full h-[calc(100vh-var(--header-height,72px))] z-[90] bg-hv-beige-2 text-[#f9f9f9] transform transition-transform duration-300 ease-in-out md:hidden overflow-y-auto ${
					isOpen ? "translate-x-0" : "translate-x-full"
				}`}
				style={{
					top: headerRef.current
						? `${headerRef.current.offsetHeight}px`
						: "72px",
					height: headerRef.current
						? `calc(100vh - ${headerRef.current.offsetHeight}px)`
						: "calc(100vh - 72px)",
				}}
			>
				<nav className="flex flex-col items-center h-full space-y-10 text-2xl font-medium mt-8">
					<Link
						href="/"
						onClick={closeMenu}
						className="hover:text-hv-gold transition-colors"
					>
						Početna
					</Link>
					<Link
						href="/about"
						onClick={closeMenu}
						className="hover:text-hv-gold transition-colors"
					>
						O nama
					</Link>
					<Link
						href="/services"
						onClick={closeMenu}
						className="hover:text-hv-gold transition-colors"
					>
						Blog
					</Link>
					<Link
						href="/contact"
						onClick={closeMenu}
						className="hover:text-hv-gold transition-colors"
					>
						Kontakt
					</Link>
				</nav>
			</div>
		</header>
	);
};

export default Header;
