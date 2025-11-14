import Image from "next/image";

const AboutUs = () => {
	return (
		<section className="min-h-screen w-full pt-[120px] bg-hv-beige-6">
			<div className="max-w-[1200px] mx-auto px-6 py-12">
				<h1 className="text-4xl md:text-5xl font-bold text-hv-green mb-8 font-beau">
					O nama
				</h1>

				<div className="flex flex-col lg:flex-row gap-8">
					<div className="w-full lg:w-1/2 space-y-6 text-slate-700 leading-relaxed">
						<p>
							Centar HarmonijaVita osnovale smo sa namerom da ljudima pružimo
							sigurno mesto za njihovu životnu priču
						</p>
						<p>
							Sa iskustvom i znanjem koje smo stekle kroz trideset godina rada
							sa decom i adolescentima i petnaest godina individualnom
							psihoterapijom odraslih, terapijom parova i porodica, polazimo od
							potrebe svakog čoveka da bude prihvaćen, podržan i saslušan bez
							osude i bilo kakve procene.
						</p>
						<p>
							Partneri smo zajedno sa vama na vašem putu ličnog razvoja i
							promene, učenja da živite u miru sa sobom i svojom okolinom.
						</p>
						<p>
							Poznato je da većina ljudi ne želi da ulazi u rizike, ne želi
							promenu, plaši se da izađe iz zone konfora, iz okruženja koje mu
							je poznato, koje mu se čini bezbedno, u kom funkcioniše na svoj
							ustaljeni način. Ma koliko ga cela situacija pritiska i opterećuje
							koristi poznate, za njega sigurne mehanizme &#34;preživljavanja&#34;.
						</p>
						<p>
							Promena se bojimo, ostajemo dugo zaglavljeni u mestu bez snage da
							se jasno odredimo i prepoznamo svoje prave potrebe.
						</p>
						<p>
							Stil življena koji razvijamo, životni obrasci koje nosimo iz
							detinjstva, stičemo kroz život i prenosimo na nove odnose često se
							pokaže nefunkcionalnim. Štitimo se upravo stojeći u mestu i
							trošeći energiju da opstanemo u situaciji koja je za nas teška,
							čak neizdržljiva. Kada sve postane za nas preteško i kada se
							odlučimo da zatražimo pomoć, radeći na sebi i problemu u kom se
							nalazimo, postajemo svesni potreba koje stoje iza našeg ponašanja
							i naših osećanja. To je trenutak kada dolazimo u pravi kontakt
							sami sa sobom. Tu započinje i nastavlja se put ka našem punom
							rastu i razvoju, ka harmoniji i unutrašnjem miru koji težimo da
							postignemo u životu.
						</p>
						<p>
							Tu smo da vas pratimo, pružimo pomoć i podršku na putu vaše
							promene. Želimo da se osnažite, da iskoračite iz situacije u kojoj
							ste, jasno sebi kažete da imate problem i da ga definišete,
							sagledate iz novog ugla i rešite na način koji pre svega vama
							odgovara, bez pritiska i lomljenja vaših otpora.
						</p>
						<p className="font-semibold text-hv-green">
							Naša pomoć proizilazi iz naše velike želje da zajedno sa vama
							radimo na svim problemima sa kojima se suočavate na putu ka
							unutrašnjem miru i ravnoteži.
						</p>
					</div>

					<div className="w-full lg:w-1/2">
						<div className="relative w-full h-[300px] sm:h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl">
							<Image
								title="Centar HarmonijaVita"
								src="/prostor.JPG"
								alt="Centar HarmonijaVita"
								fill
								className="object-cover"
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
							/>
							<div className="absolute inset-0 ring-2 ring-inset ring-hv-green/20 rounded-2xl"></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
