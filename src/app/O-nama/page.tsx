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
							Centar{" "}
							<span className="text-hv-green font-semibold">HarmonijaVita</span>{" "}
							osnovale smo sa željom da ljudima pružimo sigurno mesto za njihovu
							životnu priču.
						</p>
						<p>
							Sa iskustvom i znanjem koje smo stekle kroz{" "}
							<span className="text-hv-green font-semibold">
								trideset godina rada sa decom i adolescentima
							</span>{" "}
							, kao i{" "}
							<span className="text-hv-green font-semibold">
								petnaest godina iskustva u individualnoj psihoterapiji odraslih
							</span>{" "}
							, terapiji parova i porodica, polazimo od osnovne potrebe svakog
							čoveka da bude prihvaćen, podržan i saslušan, bez osude i bilo
							kakve procene.
						</p>
						<p>
							Partneri smo sa vama na vašem putu ličnog razvoja i promene učenju
							kako da živite u miru sa sobom i svojom okolinom.
						</p>
						<h2 className="text-3xl md:text-4xl font-bold text-hv-green font-beau">
							Zašto se plašimo promene
						</h2>
						<p>
							Većina ljudi ne želi da ulazi u rizike, ne želi promenu i plaši se
							da izađe iz zone komfora iz okruženja koje mu je poznato, koje mu
							se čini bezbedno i u kojem funkcioniše na svoj ustaljeni način.
						</p>
						<p>
							Ma koliko ga situacija pritiskala i opterećivala, čovek se i dalje
							oslanja na poznate, za njega &#34;sigurne&#34; mehanizme
							preživljavanja
						</p>
						<p>
							Promene se bojimo. Ostajemo dugo zaglavljeni u mestu, bez snage da
							se jasno odredimo i prepoznamo svoje prave potrebe.
						</p>
						<h3 className="text-2xl md:text-3xl font-bold text-hv-green font-beau">
							Kada obrasci postanu teret
						</h3>
						<p>
							Stil života koji razvijamo i obrasci koje nosimo iz detinjstva, a
							koje usvajamo i tokom života, često se pokažu kao nefunkcionalni.
							Štitimo se tako što ostajemo u mestu i trošimo energiju da
							opstajemo u situaciji koja je za nas teška, ponekad čak i
							neizdržljiva.
						</p>
						<h3 className="text-2xl md:text-3xl font-bold text-hv-green font-beau">
							Trenutak promene
						</h3>
						<p>
							Kada sve postane preteško i odlučimo da potražimo pomoć, radeći na
							sebi i problemu u kojem se nalazimo, postajemo svesni potreba koje
							stoje iza našeg ponašanja i osećanja.
						</p>
						<p>
							To je trenutak kada dolazimo u{" "}
							<span className="font-semibold text-hv-green">
								pravi kontakt sa sobom
							</span>{" "}
							. Tada započinje i nastavlja se naš put ka rastu i razvoju, ka{" "}
							<span className="font-semibold text-hv-green">harmoniji</span>i{" "}
							<span className="font-semibold text-hv-green">
								unutrašnjem miru
							</span>{" "}
							kojem težimo.
						</p>
						<h3 className="text-2xl md:text-3xl font-bold text-hv-green font-beau">
							Podrška na putu ka sebi
						</h3>
						<p>
							Tu smo da vas pratimo, da vam pružimo pomoć i podršku na putu vaše
							promene. Želimo da se osnažite, da iskoračite iz situacije u kojoj
							se nalazite, da sebi jasno kažete da imate problem, da ga
							definišete, sagledate iz novog ugla i rešite na način koji pre
							svega{" "}
							<span className="font-semibold text-hv-green">vama odgovara</span>{" "}
							bez pritiska i bez lomljenja vaših otpora.
						</p>
						<p>
							Naša pomoć proizilazi iz iskrene želje da zajedno sa vama radimo
							na svim izazovima sa kojima se suočavate na putu ka{" "}
							<span className="font-semibold text-hv-green">
								unutrašnjem miru i ravnoteži.
							</span>
						</p>
						<p>
							Ako osećate da je vreme za promenu, posetite naš{" "}
							<span className="font-semibold text-hv-green">
								Centar HarmonijaVita
							</span>{" "}
							zajedno ćemo pronaći put do vaše unutrašnje ravnoteže.
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
