"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
	const [scrolled, setScrolled] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const headerRef = useRef<HTMLElement>(null);
	const pathname = usePathname();

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Close menu when route changes
	useEffect(() => {
		closeMenu();
	}, [pathname]);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
		document.body.style.overflow = !isOpen ? "hidden" : "auto";
	};

	const closeMenu = () => {
		setIsOpen(false);
		document.body.style.overflow = "auto";
	};

	const isActive = (path: string) => pathname === path;

	return (
		<>
			<header
				ref={headerRef}
				className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled
						? "bg-hv-pastel-green backdrop-blur-md shadow-md py-3"
						: "bg-transparent py-4"
					}`}
			>
				<div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
					<Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
						<Image
							title="Logo"
							src="/HarmoniaVitaLogo.png"
							alt="Logo"
							width={80}
							height={80}
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
									className={`relative text-lg font-semibold transition-colors duration-200
										after:content-[''] after:absolute after:h-[2px] after:bg-hv-green-text after:left-0 after:-bottom-1 after:transition-all after:duration-300
										${isActive('/')
											? 'text-hv-green-text after:w-full'
											: 'text-gray-700 hover:text-hv-green-text after:w-0 hover:after:w-full'
										}`}
								>
									Početna
								</Link>
							</li>
							<li>
								<Link
									href="/O-nama"
									className={`relative text-lg font-semibold transition-colors duration-200
										after:content-[''] after:absolute after:h-[2px] after:bg-hv-green-text after:left-0 after:-bottom-1 after:transition-all after:duration-300
										${isActive('/O-nama')
											? 'text-hv-green-text after:w-full'
											: 'text-gray-700 hover:text-hv-green-text after:w-0 hover:after:w-full'
										}`}
								>
									O nama
								</Link>
							</li>
							{/* <li>
								<Link
									href="/usluge"
									className={`relative text-lg font-semibold transition-colors duration-200
										after:content-[''] after:absolute after:h-[2px] after:bg-hv-green-text after:left-0 after:-bottom-1 after:transition-all after:duration-300
										${isActive('/usluge') 
											? 'text-hv-green-text after:w-full' 
											: 'text-gray-700 hover:text-hv-green-text after:w-0 hover:after:w-full'
										}`}
								>
									Usluge
								</Link>
							</li>
							<li>
								<Link
									href="/blog"
									className={`relative text-lg font-semibold transition-colors duration-200
										after:content-[''] after:absolute after:h-[2px] after:bg-hv-green-text after:left-0 after:-bottom-1 after:transition-all after:duration-300
										${isActive('/blog') 
											? 'text-hv-green-text after:w-full' 
											: 'text-gray-700 hover:text-hv-green-text after:w-0 hover:after:w-full'
										}`}
								>
									Blog
								</Link>
							</li> */}
							<li>
								<Link
									href="/kontakt"
									className={`relative text-lg font-semibold transition-colors duration-200
										after:content-[''] after:absolute after:h-[2px] after:bg-hv-green-text after:left-0 after:-bottom-1 after:transition-all after:duration-300
										${isActive('/kontakt')
											? 'text-hv-green-text after:w-full'
											: 'text-gray-700 hover:text-hv-green-text after:w-0 hover:after:w-full'
										}`}
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
									className={`absolute inset-0 flex flex-col justify-between transition-all duration-300 ${isOpen ? "opacity-0 rotate-90" : "opacity-100"
										}`}
								>
									<Image
										title="Mobile menu"
										src="/icons/mobile-menu.svg"
										alt="Menu"
										width={24}
										height={24}
										className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
									/>
								</div>

								{/* Close ikonica */}
								<div
									className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
										}`}
								>
									<Image
										title="Close mobile menu"
										src="/icons/close-svgrepo-com.svg"
										alt="Close menu"
										width={24}
										height={24}
										className="w-6 h-6 transition-transform duration-300 group-hover:rotate-90"
									/>
								</div>
							</div>
						</button>
					</div>
				</div>
			</header>

			{/* Mobile sidebar meni */}
			<div
				className={`fixed top-0 right-0 w-full h-screen z-[90] bg-hv-beige-6 transform transition-transform duration-300 ease-in-out md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"
					}`}
			>
				<nav className="flex flex-col items-center justify-center h-full space-y-8 text-2xl font-medium pt-20">
					<Link
						href="/"
						onClick={closeMenu}
						className={`transition-colors ${isActive('/') ? 'text-hv-green-dark font-bold' : 'text-gray-700 hover:text-hv-green-dark'
							}`}
					>
						Početna
					</Link>
					<Link
						href="/O-nama"
						onClick={closeMenu}
						className={`transition-colors ${isActive('/O-nama') ? 'text-hv-green-dark font-bold' : 'text-gray-700 hover:text-hv-green-dark'
							}`}
					>
						O nama
					</Link>
					{/* <Link
						href="/usluge"
						onClick={closeMenu}
						className={`transition-colors ${isActive('/usluge') ? 'text-hv-green-dark font-bold' : 'text-gray-700 hover:text-hv-green-dark'
							}`}
					>
						Usluge
					</Link>
					<Link
						href="/blog"
						onClick={closeMenu}
						className={`transition-colors ${isActive('/blog') ? 'text-hv-green-dark font-bold' : 'text-gray-700 hover:text-hv-green-dark'
							}`}
					>
						Blog
					</Link> */}
					<Link
						href="/kontakt"
						onClick={closeMenu}
						className={`transition-colors ${isActive('/kontakt') ? 'text-hv-green-dark font-bold' : 'text-gray-700 hover:text-hv-green-dark'
							}`}
					>
						Kontakt
					</Link>
				</nav>
			</div>

			{/* Overlay when menu is open */}
			{isOpen && (
				<div
					className="fixed inset-0 bg-black/50 z-[80] md:hidden"
					onClick={closeMenu}
				/>
			)}
		</>
	);
};

export default Header;