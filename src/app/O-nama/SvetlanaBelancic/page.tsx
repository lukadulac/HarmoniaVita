import Image from "next/image";
const SvetlanaBelancic = () => {
	return (
		<section className="min-h-screen w-full pt-[120px]">
			<div className="max-w-[1200px] mx-auto px-6">
				<div className="flex flex-col items-center md:flex-row">
					<div className="w-full md:w-1/2">
						<h1 className="text-4xl font-semibold text-hv-green mb-4">
							Svetlana Belančić
						</h1>
						<p className="font-medium text-lg">Psiholog, geštalt terapeut</p>
					</div>
					<div className="w-full md:w-1/2 flex justify-center">
						<Image
							src="/placeholder.png"
							alt="Svetlana Belancic"
							width={200}
							height={200}
							className="rounded-lg"
						/>
					</div>
				</div>

				<hr className="my-4 border border-spacing-1" />
				<section className="bg-hv-beige-1 p-6 rounded-lg flex flex-col md:flex-row gap-6 items-center">
					<div className="w-full md:w-1/2 space-y-4">
						<p>
							Kroz decenije rada sa ljudima – i kroz sopstveni razvoj – naučila
							sam koliko je dragoceno imati prostor u kojem nas neko zaista
							čuje, razume i prihvata.
						</p>
						<p>
							Verujem da svi imamo kapacitet za promenu, rast i ispunjeniji
							život, ali ponekad nam je potrebna podrška na tom putu.
						</p>
						<p>
							Tu sam da vam pomognem da se povežete sa sobom, prepoznate šta vam
							je zaista važno i pronađete načine da se osećate bolje – u
							odnosima, svakodnevici i svom životu.
						</p>
						<p>
							Kao psiholog i geštalt terapeut, više od 30 godina pružam podršku
							roditeljima, mladima, odraslima, parovima i porodicama. Više od 15
							godina radim kao psihoterapeut – individualno, s parovima i
							porodicama.
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
								Diplomirala sam psihologiju na Filozofskom fakultetu u Beogradu,
							</span>{" "}
							a edukaciju iz geštalt psihoterapije završila u Geštalt centru
							Beograd, kod prof. Mladena Kostića, koji je jedan od prvih geštalt
							terapeuta na našim prostorima.
						</p>
					</div>
					<div>
						<p className="text-xl">Nosilac sam sledećih sertifikata:</p>
						<ul className="text-lg list-disc list-inside">
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
		</section>
	);
};
export default SvetlanaBelancic;
