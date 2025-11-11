'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
	const pathname = usePathname();

	const checkIfHomePage = () => {
		if (pathname === "/") {
			scrollTo({ top: 0, behavior: "smooth" });
		} else {
			window.location.href = "/";
		}
	};

	return (
		<footer className="bg-gradient-to-br from-hv-green/40 to-hv-beige-6 ">
			<div className="max-w-[1200px] mx-auto px-6 py-12">
				<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
					<div className="flex items-center gap-3">
						<div className="relative w-[80px] h-[80px]">
							<Image
								title="HarmonijaVita logo"
								src="/HarmoniaVitaLogo.png"
								alt="HarmoniaVita"
								className="object-contain cursor-pointer"
								width={80}
								height={80}
								priority
								onClick={checkIfHomePage}
							/>
						</div>
						<div>
							<p className="text-xl font-beau text-hv-green">HarmoniaVita</p>
							<p className="text-sm text-slate-700">
								Psihoterapija i savetovanje
							</p>
						</div>
					</div>

					{/* Nav */}
					<nav className="grid grid-cols-2 sm:flex gap-4 sm:gap-6 text-slate-800">
						<Link className="hover:text-hv-green transition-colors" href="/">
							Početna
						</Link>
						<Link
							className="hover:text-hv-green transition-colors"
							href="/O-nama"
						>
							O nama
						</Link>

						<Link
							className="hover:text-hv-green transition-colors"
							href="/kontakt"
						>
							Kontakt
						</Link>
					</nav>

					<div className="shrink-0">
						<Link
							href="/kontakt"
							className="inline-block bg-hv-green text-white px-5 py-2.5 rounded-md hover:bg-hv-green-hover transition-colors shadow"
						>
							Kontaktirajte nas
						</Link>
					</div>
				</div>

				<hr className="my-8 border-hv-beige-3/60" />

				<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
					<p className="text-sm text-slate-700">
						&copy; {new Date().getFullYear()} HarmonijaVita. Sva prava zadržana.
					</p>

					<div className="text-sm text-slate-700 space-y-1">
						<p className="font-medium text-hv-green">Lokacija</p>
						<p>Subotica, Srbija</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
