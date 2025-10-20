import AboutUs from "@/components/AboutUs";
import WhoAreWe from "@/components/WhoAreWe";
import Image from "next/image";

const HomePage = () => {
	return (
		<>
			{/* Desktop Hero */}
			<div className="relative min-h-screen pt-[80px] h-full hidden md:block overflow-hidden">
				{/* Background Image */}
				<div 
					className="absolute inset-0 bg-cover bg-center bg-no-repeat"
					style={{
						backgroundImage: "url('/TB-8.JPG')",
					}}
				/>
				{/* Overlay */}
				<div className="absolute inset-0 bg-black/10"></div>
				
				{/* Content */}
				<section className="relative z-10 max-w-[1200px] mx-auto px-6 text-start mt-[100px]">
					<h1 className="text-4xl font-semibold text-hv-green mb-4">
						Dobrodošli u Psihološki centar <br /> HarmonijaVita
					</h1>
					<p className="text-lg text-white max-w-2xl">
						Mesto gde počinje promena – uz podršku za ono što jeste i što želite
						da postanete.
					</p>
					<p className="text-lg text-white max-w-2xl">
						Stručna podrška za rast i razvoj, za promenu, zdravije, odnose i
						ispunjen život.
					</p>
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
					<div>
						<Image
							src="/TB-8.JPG"
							alt="Harmonia Vita"
							width={800}
							height={600}
							className="object-cover rounded-2xl mt-6 shadow-xl"
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