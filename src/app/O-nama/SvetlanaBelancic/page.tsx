import Image from "next/image";

const SvetlanaBelancic = () => {
	return (
		<section className="min-h-screen w-full">
			{/* Desktop Hero Section with Background Image */}
			<section className="relative h-screen w-full hidden md:block">
				<div
					className="absolute inset-0 bg-contain bg-top bg-no-repeat"
					style={{
						backgroundImage: "url('/TB-7.JPG')",
						backgroundSize: "100% auto",
					}}
				>
					{/* Dark overlay for better text readability */}
					<div className="absolute inset-0 bg-black/20"></div>
				</div>

				{/* Content positioned to account for header */}
				<div className="relative h-full flex items-center pt-[230px]">
					<div className="max-w-[1200px] mx-auto px-6 w-full">
						<h1 className="text-5xl md:text-6xl font-bold text-hv-green mb-6 font-beau">
							Svetlana Belančić
						</h1>
						<p className="text-xl md:text-2xl text-white font-semibold max-w-3xl drop-shadow-lg leading-relaxed">
							Psiholog, geštalt terapeut
						</p>
					</div>
				</div>
			</section>

			{/* Mobile Hero Section with Regular Background */}
			<section className="md:hidden pt-[120px] bg-hv-beige-6 pb-8">
				<div className="max-w-[1200px] mx-auto px-6">
					<h1 className="text-4xl font-bold text-hv-green mb-4 font-beau">
						Svetlana Belančić
					</h1>
					<p className="text-lg text-slate-700 font-semibold mb-6">
						Psiholog, geštalt terapeut
					</p>

					{/* Image with cool border on mobile */}
					<div className="relative w-full max-w-md mx-auto">
						<div className="absolute inset-0 bg-gradient-to-br from-hv-green to-hv-gold rounded-2xl transform rotate-3"></div>
						<div className="relative bg-white p-2 rounded-2xl shadow-xl">
							<div className="relative aspect-square rounded-xl overflow-hidden">
								<Image
									src="/TB-7.JPG"
									alt="Svetlana Belančić"
									fill
									className="object-cover"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Content Section */}
			<div className="bg-white">
				<div className="max-w-[1200px] mx-auto px-6 py-12">
					<hr className="my-4 border border-spacing-1" />

					<section className="bg-hv-beige-1 p-6 rounded-lg flex flex-col md:flex-row gap-6 items-center">
						<div className="w-full space-y-4">
							<p>
								Kroz decenije rada sa ljudima – i kroz sopstveni razvoj –
								naučila sam koliko je dragoceno imati prostor u kojem nas neko
								zaista čuje, razume i prihvata.
							</p>
							<p>
								Verujem da svi imamo kapacitet za promenu, rast i ispunjeniji
								život, ali ponekad nam je potrebna podrška na tom putu.
							</p>
							<p>
								Tu sam da vam pomognem da se povežete sa sobom, prepoznate šta
								vam je zaista važno i pronađete načine da se osećate bolje – u
								odnosima, svakodnevici i svom životu.
							</p>
							<p>
								Kao psiholog i geštalt terapeut, više od 30 godina pružam
								podršku roditeljima, mladima, odraslima, parovima i porodicama.
								Više od 15 godina radim kao psihoterapeut – individualno, s
								parovima i porodicama.
							</p>
						</div>
					</section>

					<hr className="my-4 border border-spacing-1" />

					<section className="bg-gradient-to-tr from-blue-500 to-blue-300 p-6 rounded-lg text-white">
						<h2 className="text-2xl font-semibold mb-2">
							Obrazovanje i sertifikati
						</h2>
						<div>
							<p className="text-xl">
								<span className="font-semibold">
									Diplomirala sam psihologiju na Filozofskom fakultetu u
									Beogradu,
								</span>{" "}
								a edukaciju iz geštalt psihoterapije završila u Geštalt centru
								Beograd, kod prof. Mladena Kostića, koji je jedan od prvih
								geštalt terapeuta na našim prostorima.
							</p>
						</div>
						<div className="mt-4">
							<p className="text-xl">Nosilac sam sledećih sertifikata:</p>
							<ul className="text-lg list-disc list-inside mt-2">
								<li>Nacionalni sertifikat iz psihoterapije (UPKPS)</li>
								<li>Evropski sertifikat psihološkog savetnika (EAC)</li>
								<li>
									Sertifikat Međunarodne asocijacije za kauzalnu psihoterapiju –
									Psihoterapija psihosomatike
								</li>
							</ul>
						</div>
					</section>
				</div>
			</div>
		</section>
	);
};

export default SvetlanaBelancic;
