import AboutUs from "@/components/AboutUs";
import WhoAreWe from "@/components/WhoAreWe";


const HomePage = () => {
	return (
		<>
			{" "}
			<div
				className="min-h-screen pt-[80px] h-full bg-cover bg-center bg-no-repeat"
				style={{ backgroundImage: "url('/bg-hero.jpg')" }}
			>
				<section className="max-w-[1200px] mx-auto px-6 text-start mt-[100px]">
					<h1 className="text-4xl font-semibold text-hv-green mb-4">
						Dobrodošli u Psihološki centar <br /> HarmonijaVita
					</h1>
					<p className="text-lg text-gray-700 max-w-2xl">
						Mesto gde počinje promena – uz podršku za ono što jeste i što želite
						da postanete.
					</p>
					<p>
						Stručna podrška za rast i razvoj, za promenu, zdravije, odnose i
						ispunjen život.
					</p>
				</section>
			</div>
			{/* <AboutUs /> */}
			<AboutUs />
			{/* <WhoAreWe /> */}
			<WhoAreWe />
		</>
	);
};

export default HomePage;
