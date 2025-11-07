import AboutUs from "@/components/AboutUs";
import WhoAreWe from "@/components/WhoAreWe";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
	return (
		<>
			{/* Desktop Hero */}
			<div className="relative hidden md:block h-screen pt-[100px] overflow-hidden">
				{/* Background */}
				<div className="absolute inset-0 bg-gradient-to-br from-hv-beige-6 to-hv-green/70"></div>

				{/* Content */}
				<section className="relative z-10 max-w-[1200px] mx-auto px-6">
					<div className="grid grid-cols-2 gap-10 items-center py-16">
						<div>
							<h1 className="text-4xl font-semibold text-hv-green  font-beau leading-tight mb-6">
								Dobrodošli u Psihološki centar HarmonijaVita
							</h1>
							<p className="text-lg text-white/90 max-w-xl mb-3">
								Mesto gde počinje promena uz podršku za ono što jeste i što
								želite da postanete.
							</p>
							<p className="text-lg text-white/90 max-w-xl">
								Stručna podrška za rast i razvoj, za promenu, zdravije odnose i
								ispunjen život.
							</p>
							<button className="bg-hv-green text-white px-4 py-2 rounded-md mt-4 transition-all duration-300 hover:bg-hv-green-hover">
								<Link href="/kontakt">Kontaktirajte nas</Link>
							</button>
						</div>
						<div className="flex justify-end">
							<Image
								src="/harmonijavita-logo.png"
								alt="Harmonia Vita"
								width={700}
								height={700}
								className="object-contain drop-shadow-xl max-h-[60vh]"
								priority
							/>
						</div>
					</div>
				</section>
			</div>

			{/* Mobile Hero */}
			<section className="md:hidden pt-[120px] bg-hv-beige-6 pb-8">
				<div className="max-w-[1200px] mx-auto px-6">
					<h1 className="text-4xl font-bold text-hv-green mb-4 font-beau">
						Dobrodošli u Psihološki centar HarmonijaVita
					</h1>
					<p className="text-lg text-slate-700 max-w-2xl mb-2">
						Mesto gde počinje promena – uz podršku za ono što jeste i što želite
						da postanete.
					</p>
					<p className="text-lg text-slate-700 max-w-2xl">
						Stručna podrška za rast i razvoj, za promenu, zdravije, odnose i
						ispunjen život.
					</p>
					<button className="bg-hv-green text-white px-4 py-2 rounded-md mt-4 transition-all duration-300 hover:bg-hv-green-hover">
						<Link href="/kontakt">Kontaktirajte nas</Link>
					</button>
					<div className="flex justify-center">
						<Image
							src="/harmonijavita-logo.png"
							alt="Harmonia Vita"
							width={600}
							height={600}
							className="object-contain mt-6 drop-shadow-xl max-h-[40vh]"
							priority
						/>
					</div>
				</div>
			</section>

			<AboutUs />
			<WhoAreWe />
		</>
	);
};

export default HomePage;
