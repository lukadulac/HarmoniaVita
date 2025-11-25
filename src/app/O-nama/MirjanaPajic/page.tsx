"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const MirjanaPajic = () => {
	const [open, setOpen] = useState<number | null>(null);

	const questionsAndAnswers = [
		{
			question: "Sistemska porodična terapija uključuje li individualni rad?",
			answer:
				" Iako se naziva porodična sistemska terapija, ovaj pristup nije ograničen na rad sa celom porodicom. Vrlo uspešno se primenjuje i u individualnom radu, uzimajući u obzir vaš sistem porodicu, odnose, prošlost i kontekst.",
		},
		{
			question: "Kako izgleda individualni sistemski rad?",
			answer: [
				"U početku istražujemo vaš sistem: odnose koji su vam važni, dinamike u porodici, očekivanja i uloge koje ste (svesno ili nesvesno) preuzeli. Čak i bez prisustva svih članova porodice, sistem “živi” u vašem doživljaju kroz emocije, očekivanja i obrasce ponašanja.",
				"Zatim razmatramo vaš uticaj u sistemu kako vaše misli, osećanja i postupci utiču na druge, i obrnuto. Radimo na prepoznavanju obrazaca koji su vas zadržavali u napetosti i uvodimo male, konkretne promene u komunikaciji, granicama i emocionalnom izražavanju.",
				"Po potrebi, u proces se mogu povremeno uključiti i drugi članovi porodice ali to nije uslov da terapija bude delotvorna.",
			],
		},
		{
			question: "Zašto je individualni pristup koristan?",
			answer: [
				"Pruža siguran prostor da govorite o onome što možda ne biste podelili s drugima.",
				"Pomaže da bolje razumete svoje uloge u porodici i obrasce koji su se formirali kroz iskustva i prošlost.",
				"Razvijate veštine slušanja sebe, izražavanja osećanja i postavljanja granica.",
				"Kroz razumevanje šireg konteksta (porodice, kulture, istorije), otkrivate dublje uzroke i veze, što vodi trajnoj promeni.",
			],
		},
		{
			question: "Kako izgleda terapijski proces?",
			answer: [
				"Sesije se održavaju uživo ili online, u trajanju od jednog sata onako kako vama najviše odgovara.",
				"Na početku razgovaramo o onome što vas je dovelo do trenutka kada ste rekli: „Želim nešto da promenim.“",
				"Zajedno postavljamo ciljeve: šta želimo da razumemo, promenimo ili osnažimo.",
				"Tokom terapije koristim različite tehnike vođene razgovore, vežbe, refleksiju i zadatke između sesija kako bi ono što radimo imalo stvarni uticaj i izvan terapijskog prostora.",
				"Napredak nije uvek linearan. Biće uspona i padova.",
				"Moje obećanje je da ću biti uz vas podrška dok ne osetite da se promene zaista događaju.",
			],
		},
		{
			question: "Vaša hrabrost je važna",
			answer: [
				"Odlučiti se na terapiju znači izabrati rast, promenu i bliskost.",
				"To je odluka da obnovite poverenje, da izgovorite ono što je teško, i da sebi dozvolite da budete ono što jeste sa svim svojim nedoumicama, strahovima i nadama.",
			],
		},
	];

	const toggle = (index: number) => {
		setOpen(open === index ? null : index);
	};

	return (
		<section className="min-h-screen w-full">
			<section className="relative h-screen w-full hidden md:block overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-br from-hv-green/50 to-hv-beige-6  "></div>

				<div className="relative h-full flex items-center pt-[100px]">
					<div className="max-w-[1200px] mx-auto px-6 w-full grid md:grid-cols-2 gap-8 items-center">
						<div className="z-10">
							<h1 className="text-5xl lg:text-6xl font-bold text-hv-green mb-6 font-beau">
								Mirjana Pajić
							</h1>
							<p className="text-xl lg:text-2xl text-white font-semibold max-w-xl leading-relaxed">
								Ja sam Mirjana Pajić, majka, pedagog, porodični psihoterapeut,
								regresoterapeut, kouč psihosomatike.
							</p>
							<p className="text-xl lg:text-2xl text-white font-semibold max-w-xl leading-relaxed">
								Filantrop, ljubitelj ljudi i onog dobrog u njima.
							</p>
							<Link href="/kontakt?psych=Mirjana%20Pajić">
								<button className="bg-hv-green text-white px-4 py-2 rounded-md mt-4 transition-all duration-300 hover:bg-hv-green-hover">
									Kontaktiraj me
								</button>
							</Link>
						</div>

						<div className="absolute right-0 bottom-0 w-[70%] h-[150dvh]">
							<Image
								title="Mirjana Pajic img"
								src="/Mirjana-bg.png"
								alt="Mirjana Pajić"
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
						Mirjana Pajić
					</h1>
					<p className="text-lg text-slate-700 font-semibold mb-4">
						Ja sam Mirjana Pajić, majka, pedagog, porodični psihoterapeut,
						regresoterapeut, kouč psihosomatike.
					</p>
					<Link href="/kontakt?psych=Mirjana%20Pajić">
						<button className="mb-4 bg-hv-green text-white px-4 py-2 rounded-md mt-4 transition-all duration-300 hover:bg-hv-green-hover">
							Kontaktiraj me
						</button>
					</Link>
					<div className="relative w-full max-w-md mx-auto">
						<div className="absolute inset-0 bg-gradient-to-br from-hv-green to-hv-gold rounded-2xl transform rotate-3"></div>
						<div className="relative bg-white p-2 rounded-2xl shadow-xl">
							<div className="relative aspect-square rounded-xl overflow-hidden">
								<Image
									title="Mirjana Pajic"
									src="/TB-3.JPG"
									alt="Mirjana Pajić"
									fill
									className="object-cover"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="  mx-auto px-6 p-16 space-y-2">
				<div className="max-w-[1200px] mx-auto text-center">
					<h2 className="text-5xl text-hv-green font-beau text-center font-semibold mb-2">
						Obrazovanje
					</h2>
					<hr className="my-4 border border-spacing-1 mx-auto w-1/2 border-hv-green" />
					<div className="text-slate-700 text-lg max-w-3xl mx-auto space-y-4 text-left leading-relaxed">
						<p>
							<span className="font-semibold">Studije pedagogije</span> sam
							završila na{" "}
							<span className="font-semibold text-hv-green">
								Filozofskom fakultetu u Novom Sadu.
							</span>
						</p>
						<p>
							Edukaciju iz{" "}
							<span className="font-semibold text-hv-green">
								sistemske porodične psihoterapije
							</span>{" "}
							pohađala sam u okviru{" "}
							<span className="font-semibold text-hv-green">
								Asocijacije sistemskih terapeuta
							</span>{" "}
							evropski akreditovanog instituta za edukaciju iz psihoterapije
							(EAPTT), člana{" "}
							<span className="font-semibold text-hv-green">
								Komore trening instituta Evropske asocijacije za porodičnu
								terapiju (EFTA–TTC)
							</span>{" "}
							u Beogradu.
						</p>

						<p>
							Završila sam i{" "}
							<span className="font-semibold text-hv-green">
								nehipnotičku regresoterapiju
							</span>{" "}
							po metodi Patrika Balinta, kao i{" "}
							<span className="font-semibold text-hv-green">
								osnovni i napredni nivo psihosomatike
							</span>{" "}
							kod Vesne Danilovac (ICI, Berlin), gde sam stekla zvanje{" "}
							<span className="font-semibold text-hv-green">
								kouča psihosomatike.
							</span>
						</p>
					</div>
				</div>
			</section>

			<section className="bg-hv-beige-1 mx-auto px-6 p-16 space-y-2">
				<div className="max-w-[1200px] mx-auto text-center">
					<h2 className="text-5xl font-semibold text-hv-green font-beau text-center my-2">
						Moj pristup i vrednosti
					</h2>
					<hr className="my-4 border border-spacing-1 mx-auto w-1/2 border-hv-green" />
					<div className="text-slate-700 text-lg leading-relaxed space-y-4 max-w-3xl mx-auto text-left">
						<p className="font-semibold text-hv-green">
							Verujem da svako ZASLUŽUJE DA BUDE DOBRO (u harmoniji sa sobom)
						</p>
						<p>
							Ljubazno, nežno, strpljivo, podržavajuće i bez osuđivanja, trudim
							se da stvorim prostor u kome ćete se osećati{" "}
							<span className="font-semibold text-hv-green">
								prihvaćeno, sigurno i slobodno
							</span>{" "}
							da govorite i budete saslušani.
						</p>
						<p>
							Terapija je podrška, samo da se oslušneš, čuješ i odlučiš kuda
							dalje i onda polako rešavaš ono za šta trenutno imaš snage… i tako
							kreneš kroz proces…veruj nije jednostavno.
						</p>
						<p>
							Terapiju vidim kao podršku priliku da se oslušnete, čujete i
							odlučite kuda dalje. Promena nije jednostavna, ali je{" "}
							<span className="font-semibold text-hv-green">moguća</span> korak
							po korak, tempom koji vama odgovara.
						</p>
						<p>
							{" "}
							Svoj posao psihoterapeuta obavljam s ljubavlju, jer verujem da se{" "}
							<span className="font-semibold text-hv-green">
								{" "}
								s ljubavlju
							</span>{" "}
							može mnogo, a bez nje ništa.
						</p>
					</div>
				</div>
			</section>

			<section className="mx-auto px-6 p-16 space-y-2 ">
				<div className="max-w-[1200px] mx-auto text-center">
					<h2 className="text-5xl font-semibold text-hv-green font-beau my-2">
						Sistemski pristup
					</h2>
					<hr className="my-4 border border-spacing-1 mx-auto w-1/2 border-hv-green" />
					<div className="text-slate-700 text-lg leading-relaxed space-y-2 text-left max-w-3xl mx-auto">
						<p>
							U svom radu primenjujem{" "}
							<span className="font-semibold text-hv-green">
								sistemski pristup porodičnoj terapiji
							</span>{" "}
							. To znači da ne posmatram samo problem pojedinca, već celu sliku
							odnose, dinamike i obrasce koji se stvaraju među ljudima.
						</p>
						<p>
							Verujem da{" "}
							<span className="font-semibold text-hv-green">
								svaki glas zaslužuje da bude saslušan
							</span>{" "}
							i onaj najmlađi, i onaj koji se povukao, i onaj koji najglasnije
							govori.
						</p>
						<p>
							Sistemska porodična terapija polazi od ideje da smo svi{" "}
							<span className="font-semibold text-hv-green">
								više od zbira svojih delova
							</span>{" "}
							. Naši odnosi sa porodicom, partnerom, prijateljima i prošlošću
							 oblikuju kako se osećamo, reagujemo i komuniciramo. Ne radi se
							samo o tome{" "}
							<span className="font-semibold text-hv-green">
								šta vi osećate
							</span>{" "}
							, već i o tome{" "}
							<span className="font-semibold text-hv-green">
								kako to utiče na one koje volite
							</span>{" "}
							i obrnuto.
						</p>
					</div>
				</div>
			</section>

			<section className="bg-hv-beige-1 mx-auto px-6 p-16  space-y-2">
				<div className="max-w-[1200px] mx-auto text-center">
					<h2 className="text-5xl font-semibold text-hv-green font-beau my-2">
						Česta pitanja
					</h2>
					<hr className="my-4 border border-spacing-1 mx-auto w-1/2 border-hv-green" />
					<div className="max-w-[1200px] mx-auto">
						{questionsAndAnswers.map((item, index) => (
							<div
								key={index}
								className="mt-4 mb-4 border w-full md:w-3/4 mx-auto border-hv-green rounded-lg p-4"
							>
								<h3
									className="text-xl font-medium cursor-pointer text-hv-green flex items-center justify-between gap-3"
									onClick={() => toggle(index)}
								>
									{item.question}
									<Image
										title="Dropdown Arrow"
										src="/icons/dropdown-arrow.svg"
										alt="Dropdown Arrow"
										width={20}
										height={20}
										className={`svgColor transition-transform duration-300 ${
											open === index ? "rotate-180" : ""
										}`}
									/>
								</h3>
								<div
									className={`overflow-hidden transition-all duration-500 ease-in-out ${
										open === index
											? "max-h-[1000px] opacity-100 mt-2"
											: "max-h-0 opacity-0"
									}`}
								>
									<div className="pl-4 text-left">
										{Array.isArray(item.answer) ? (
											<div className="space-y-3">
												{item.answer.map((ans, i) => (
													<p key={i}>{ans}</p>
												))}
											</div>
										) : (
											<p>{item.answer}</p>
										)}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</section>
	);
};

export default MirjanaPajic;
