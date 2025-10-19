"use client";
import { useState } from "react";
import Image from "next/image";

const MirjanaPajic = () => {
	const [open, setOpen] = useState<number | null>(null);

	const questionsAndAnswers = [
		{
			question: "Sistemska porodična terapija — uključuje li individualni rad?",
			answer:
				"Iako se naziva porodična sistemska terapija, ovaj pristup nije ograničen samo na rad sa celom porodicom. Može se vrlo uspešno primeniti i kada radim individualno sa vama, uzimajući u obzir vaš sistem — porodicu, odnose, prošlost, kontekst",
		},
		{
			question: "Kako izgleda individualni sistemski rad?",
			answer: [
				"Prvo istražujemo vaš sistem — odnose koji su vam važni, dinamike u porodici, očekivanja, uloge koje ste preuzeli (svesno ili nesvesno). I bez da su svi članovi porodice prisutni, sistem 'živi' u vašem doživljaju — emocije, očekivanja, obrasci ponašanja koji su se razvili kroz odnose.",
				"Zatim razmatramo vaš uticaj u sistemu — ono što radite, govorite, osećate i kako to utiče na odnose. U isto vreme istražujemo kako drugi članovi sistema (članovi porodice, partneri, bliski ljudi) utiču na vas.",
				"Radimo na tome da identifikujemo obrasce — načine komunikacije, reakcije, uloge — koji su vas stezali, blokirali, stvarali napetost; i da onda uvodimo male, konkretne promene u vašem načinu komunikacije, granicama, emocionalnom izrazu.",
				"Individualni rad može uključiti i da povremeno budu uključeni drugi članovi porodice ako želite — na sesijama ili u delovima procesa — ali nije uslov da rade svi da bi terapija bila efikasna.",
			],
		},
		{
			question: "Zašto je individualni pristup koristan?",
			answer: [
				"Daje siguran prostor da razgovarate o osećanjima i mislima koje možda ne biste lako podelili u porodici.",
				"Može vam pomoći da bolje razumete svoje mesto i uloge u porodici, da vidite obrasce iz svog iskustva, pa i iz prošlosti, koji su formirali vaše reakcije.",
				"Može vam pomoći da razvijete veštine — slušanja sebe, izražavanja osećanja, postavljanja granica — koje će kasnije koristiti i u odnosima sa drugima.",
				"Budući da terapija uzima u obzir vaš širi kontekst (porodica, kultura, istorija), čak i kada radimo sami, možete otkriti uzroke i veze koje možda do sada niste videli. To omogućava dublju, trajniju promenu.",
			],
		},
		{
			question: "Kako izgleda terapijski proces?",
			answer: [
				"Sesije se održavaju redovno – uživo ili online (u trajanju od jednog sata) na koji način vama odgovara.",
				"U početku obično razgovaramo o onome što vas je dovelo do trenutka kada ste rekli 'želim nešto promeniti'.",
				"Postavljamo zajedničke ciljeve – šta želimo da promenimo, koje odnose popravimo, šta da naučimo.",
				"Tokom terapije koristim različite tehnike – slušanje, vođene razgovore, interaktivne vežbe, zadatke za kod kuće – sve u cilju da ono što radimo u sesiji ima stvarni uticaj i van nje.",
				"Napredovanje nije uvek linearno – biće uspona i padova. Moje obećanje je da ću biti sa vama/sa vama podrška dok ne počnete da osećate razliku.",
			],
		},
	];

	const toggle = (index: number) => {
		setOpen(open === index ? null : index);
	};

	return (
		<section className="min-h-screen w-full">
			<section className="relative h-screen w-full hidden md:block">
				<div
					className="absolute inset-0 bg-contain bg-top bg-no-repeat"
					style={{
						backgroundImage: "url('/TB-3.JPG')",
						backgroundSize: "100% auto",
					}}
				>
					{/* Dark overlay for better text readability */}
					<div className="absolute inset-0 bg-black/20"></div>
				</div>

				{/* Content positioned to account for header */}
				<div className="relative h-full flex items-center pt-[140px]">
					<div className="max-w-[1200px] mx-auto px-6 w-full">
						<h1 className="text-5xl md:text-6xl font-bold text-hv-green mb-6 drop-shadow-2xl font-beau">
							Mirjana Pajić
						</h1>
						<p className="text-xl md:text-2xl text-white font-semibold max-w-3xl drop-shadow-lg leading-relaxed">
							Ja sam Mirjana Pajić, majka, pedagog, porodični psihoterapeut,
							regresoterapeut, kouč psihosomatike.
						</p>
					</div>
				</div>
			</section>

			{/* Mobile Hero Section with Regular Background */}
			<section className="md:hidden pt-[120px] bg-hv-beige-6 pb-8">
				<div className="max-w-[1200px] mx-auto px-6">
					<h1 className="text-4xl font-bold text-hv-green mb-4 font-beau">
						Mirjana Pajić
					</h1>
					<p className="text-lg text-slate-700 font-semibold mb-6">
						Ja sam Mirjana Pajić, majka, pedagog, porodični psihoterapeut,
						regresoterapeut, kouč psihosomatike.
					</p>

					{/* Image with cool border on mobile */}
					<div className="relative w-full max-w-md mx-auto">
						<div className="absolute inset-0 bg-gradient-to-br from-hv-green to-hv-gold rounded-2xl transform rotate-3"></div>
						<div className="relative bg-white p-2 rounded-2xl shadow-xl">
							<div className="relative aspect-square rounded-xl overflow-hidden">
								<Image
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

			{/* Content Section */}
			<div className="">
				<div className="max-w-[1200px] mx-auto px-6 py-12">
					{/* Education Section */}
					<div className="my-12">
						<div className="rounded-lg">
							<h2 className="font-bold text-hv-green text-3xl mb-6">
								Obrazovanje:
							</h2>
							<hr className="my-4 border-slate-300" />
							<div className="space-y-4 text-slate-700 leading-relaxed">
								<p>
									<span className="font-semibold">Studije pedagogije</span> sam
									završila na{" "}
									<span className="font-semibold">
										Filozofskom fakultetu u Novom Sadu.
									</span>
								</p>
								<p>
									<span className="font-semibold">
										Sistemsku porodičnu psihoterapiju
									</span>{" "}
									sam završila – U OKVIRU ASOCIJACIJA SISTEMSKIH TERAPEUTA
									EVROPSKI AKREDITOVAN INSTITUTA ZA EDUKACIJU IZ PSIHOTERAPIJE
									(EAPTT) ČLAN KOMORE TRENING INSTITUTA EVROPSKE ASOCIJACIJE ZA
									PORODIČNU TERAPIJU (EFTA -TTC) BEOGRAD, SRBIJA
								</p>
								<p>
									<span className="font-semibold">
										Nehipnotičku regresoterapiju
									</span>{" "}
									po metodi Patrika Balinta
								</p>
								<p>
									<span className="font-semibold">
										Osnovnu i naprednu psihosomatiku
									</span>{" "}
									kao za koča psihosomatike kod Vesne Danilovac ICI, Berlin
								</p>
							</div>
						</div>
					</div>

					{/* Philosophy Section */}
					<div className="space-y-6 text-slate-700 mb-12 leading-relaxed">
						<p className="text-xl font-semibold text-hv-green">
							Verujem da svako ZASLUŽUJE DA BUDE DOBRO (u harmoniji sa sobom)
						</p>
						<p>
							Ljubazno, nežno, strpljivo, podržavajući i bez osuđivanja — moj
							cilj je da kreiram prostor u kome se osećate prihvaćenim baš
							takvim kakvi jeste, sigurno, podržano, slobodnim da govorite i da
							budete slušani.
						</p>
						<p>
							Terapija je podrška, samo da se oslušneš, čuješ i odlučiš kuda
							dalje i onda polako rešavaš ono za šta trenutno imaš snage… i tako
							kreneš kroz proces…veruj nije jednostavno.
						</p>
						<p className="text-lg font-semibold">
							Promena je moguća — korak po korak, tempom koji odgovara vama.
						</p>
					</div>

					{/* Work Section */}
					<div className="space-y-6 text-slate-700 mb-12 leading-relaxed">
						<h2 className="text-3xl font-bold text-hv-green mb-6">Moj rad</h2>
						<p className="text-lg font-semibold">
							Posao psihoterapeuta obavljam s ljubavlju verući da sa ljubavlju
							možeš puno, a bez nje ništa.
						</p>
						<p>
							U svom radu koristim sistemski pristup porodičnoj terapiji — to
							znači da ne gledam samo problem jedne osobe, nego vidim celu
							sliku.
						</p>
						<p>
							Verujem da svaki glas zaslužuje da bude saslušan — i onaj
							najmlađi, i onaj koji se povukao, i onaj najbučniji.
						</p>
						<p className="font-semibold bg-hv-beige-3 p-4 rounded-lg">
							Sistemska porodična terapija zasniva se na uverenju da smo svi
							više nego suma svojih pojedinačnih delova – da su naši odnosi sa
							porodicom, partnerom, prijateljima i sa našom prošlošću činilac
							koji oblikuje kako se osećamo, kako reagujemo, kako komuniciramo.
							Ne radi se samo o tome šta vi osećate, već i kako ono što osećate
							utiče na one koji su vam bliski, i obrnuto.
						</p>
					</div>

					{/* TODO: Add  style */}
					{questionsAndAnswers.map((item, index) => (
						<div
							key={index}
							className="mt-4 mb-4 border w-full md:w-3/4 border-white rounded-lg p-4"
						>
							<h3
								className="text-xl font-medium cursor-pointer text-hv-green flex items-center justify-between gap-3"
								onClick={() => toggle(index)}
							>
								{item.question}
								<Image
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
								<div className="pl-4">
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
	);
};

export default MirjanaPajic;
