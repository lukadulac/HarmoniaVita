import Image from "next/image";
import Link from "next/link";

const SvetlanaBelancic = () => {
	return (
		<section className="min-h-screen w-full">
			<section className="relative h-screen w-full hidden md:block overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-br from-hv-green/50 to-hv-beige-6"></div>

				<div className="relative h-full flex items-center pt-[100px]">
					<div className="max-w-[1200px] mx-auto px-6 w-full grid md:grid-cols-2 gap-8 items-center">
						<div className="z-10">
							<h1 className="text-5xl lg:text-6xl font-bold text-hv-green mb-6 font-beau">
								Svetlana Belančić
							</h1>
							<p className="text-xl lg:text-2xl text-white font-semibold max-w-xl leading-relaxed">
								Psiholog, geštalt terapeut
							</p>
							<p className="text-xl lg:text-2xl text-white font-semibold max-w-xl leading-relaxed">
								Psihoterapija psihosomatike — međunarodna asocijacija za
								integralnu kauzalnu psihoterapiju
							</p>
							<button className="bg-hv-green text-white px-4 py-2 rounded-md mt-4 transition-all duration-300 hover:bg-hv-green-hover">
								<Link href="/kontakt?psych=Svetlana%20Belan%C4%8Di%C4%87">
									Kontaktiraj me
								</Link>
							</button>
						</div>

						<div className="absolute right-0 bottom-0 w-[70%] h-[150dvh]">
							<Image
								src="/svetlana3.png"
								alt="Svetlana Belančić"
								fill
								className="object-contain object-bottom"
								priority
							/>
						</div>
					</div>
				</div>
			</section>

			<section className="md:hidden pt-[120px] bg-hv-beige-6 pb-8">
				<div className="max-w-[1200px] mx-auto px-6">
					<h1 className="text-4xl font-bold text-hv-green mb-4 font-beau">
						Svetlana Belančić
					</h1>
					<p className="text-lg text-slate-700 font-semibold mb-2">
						Psiholog, geštalt terapeut
					</p>
					<p className="text-lg text-slate-700 font-semibold mb-6">
						Psihoterapija psihosomatike — međunarodna asocijacija za integralnu
						kauzalnu psihoterapiju
					</p>

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

			<section className="p-16 rounded-lg flex flex-col md:flex-row gap-6 items-center">
				<div className="max-w-[1200px] mx-auto px-6 w-full space-y-4">
					<h2 className="text-5xl font-semibold mb-2 text-hv-green font-beau text-center">
						O meni
					</h2>
					<hr className="my-4 border border-spacing-1 mx-auto w-1/2 border-hv-green" />
					<p className="text-slate-700 text-lg">
						<span className="text-hv-green text-semibold">
							Kroz decenije rada sa ljudima
						</span>{" "}
						i kroz sopstveni razvoj naučila sam koliko je dragoceno imati
						prostor u kojem nas neko zaista čuje, razume i prihvata.
					</p>
					<p className="text-slate-700 text-lg">
						Verujem da svi imamo kapacitet za promenu, rast i ispunjeniji život,
						ali ponekad nam je potrebna podrška na tom putu.
					</p>
					<p className="text-slate-700 text-lg">
						Tu sam da vam pomognem da se povežete sa sobom, prepoznate šta vam
						je zaista važno i pronađete načine da se osećate bolje – u odnosima,
						svakodnevici i svom životu.
					</p>
					<p className="text-slate-700 text-lg">
						Kao psiholog i geštalt terapeut, više od 30 godina pružam podršku
						roditeljima, mladima, odraslima, parovima i porodicama. Više od 15
						godina radim kao psihoterapeut – individualno, s parovima i
						porodicama.
					</p>
				</div>
			</section>

			<section className=" bg-hv-beige-1 mx-auto px-6 p-16 space-y-2">
				<div className="max-w-[1200px] mx-auto text-center">
					<h2 className="text-5xl text-hv-green font-beau text-center font-semibold mb-2">
						Obrazovanje i sertifikati
					</h2>
					<hr className="my-4 border border-spacing-1 mx-auto w-1/2 border-hv-green" />
					<div>
						<p className="text-xl">
							<span className="font-semibold text-hv-green">
								Diplomirala sam psihologiju na Filozofskom fakultetu u Beogradu
							</span>
							, a edukaciju iz geštalt psihoterapije završila u Geštalt centru
							Beograd, kod prof. Mladena Kostića, koji je jedan od prvih geštalt
							terapeuta na našim prostorima.
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
				</div>
			</section>
			<section className="mx-auto px-6 p-16 space-y-2">
				<div className="max-w-[1200px] mx-auto text-center">
					<h2 className="text-5xl font-semibold text-hv-green font-beau text-center my-2">
						Kako radim i šta možete da očekujete
					</h2>
					<hr className="my-4 border border-spacing-1 mx-auto w-1/2 border-hv-green" />
					<div className="text-slate-700 text-lg">
						<p>
							Geštalt terapija je pravac koji stavlja fokus na ovde i sada – na
							to kako doživljavate sebe, odnose i svet oko sebe. Ne bavimo se
							samo “problemima” bavimo se vama kao celinom.{" "}
						</p>
						<p>
							Kroz razgovor, osvešćivanje i istraživanje vaših emocija i
							potreba, zajedno otkrivamo šta vas ''koči'', gde vam je teško, ali
							i gde imate snagu koje, možda i niste bili svesni.
						</p>
						<p>
							U terapiji ne nudim “rešenja”, već pristup koji vas osnažuje da
							sami pronađete ono što je za vas dobro, prihvatljivo i moguće.
						</p>
						<p>
							Verujem u proces koji je ličan, neformalan i duboko ljudski. U
							centru mog rada ste vi – sa svim svojim pitanjima, dilemama,
							ranjivostima i potencijalima.
						</p>
					</div>
				</div>
			</section>
			<section className="mx-auto px-6 p-16 space-y-2 bg-hv-beige-1">
				<div className="max-w-[1200px] mx-auto text-center">
					<h2 className="text-5xl font-semibold text-hv-green font-beau my-2">
						Kome je moj rad namenjen?
					</h2>
					<hr className="my-4 border border-spacing-1 mx-auto w-1/2 border-hv-green" />
					<div className="text-slate-700 max-w-2xl mx-auto text-lg">
						<p>Radim sa odraslima, parovima, porodicama i mladima.</p>
						<p className="text-start mt-4">Podršku pružam u sledećim temama:</p>
						<ul className="text-lg list-disc list-inside mt-6 inline-block text-left">
							<li>anksioznost, strahovi, panični napadi</li>
							<li>psihosomatski problemi</li>
							<li>teškoće u partnerskim i porodičnim odnosima</li>
							<li>promene, gubici, razvod, krize</li>
							<li>problemi samopouzdanja, granica, lične vrednosti</li>
							<li>potreba za ličnim razvojem i dubljim kontaktom sa sobom</li>
						</ul>
					</div>
				</div>
			</section>
			<section className="mx-auto px-6 p-16 space-y-2">
				<div className="max-w-[1200px] mx-auto text-center">
					<h2 className="text-5xl font-semibold text-hv-green font-beau my-2">
						Kako izgleda prvi susret sa mnom?
					</h2>
					<hr className="my-4 border border-spacing-1 mx-auto w-1/2 border-hv-green" />
					<div className="text-slate-700 text-lg">
						<p>
							Prvi susret je prilika da se upoznamo i zajedno pogledamo vašu
							''temu'' ono što vas dovodi na terapiju, da podelite ono što vam
							je važno, kao i da me pitate sve što vas zanima o radu i procesu.
						</p>
						<p>
							To je prilika da osetite da li vam prija moj pristup i stil rada.
							Bez obaveze da nastavite, ali sa uverenjem da ćete izaći sa
							osećanjem da niste sami u onome što vas muči.
						</p>
						<p>
							Ako osećate da je vreme za promenu ili jednostavno želite prostor
							za sebe pozivam vas da zakažemo prvi razgovor.
						</p>
						<p>Radim uživo ili online, u skladu sa vašim potrebama.</p>
					</div>
				</div>
			</section>
		</section>
	);
};

export default SvetlanaBelancic;
