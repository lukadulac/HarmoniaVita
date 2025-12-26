"use client";
import { useState } from "react";
import { User, ArrowRight, Tag } from "lucide-react";

interface BlogPost {
	id: number;
	title: string;
	category: string;
	author: string;
	excerpt: string;
	content: string[];
	themeTitle?: string;
	image?: string;
}

const BlogPage = () => {
	const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

	const blogPosts: BlogPost[] = [
		{
			id: 1,
			title: "Psihosomatika",
			category: "Psihološke teme",
			author: "Svetlana Belančić",
			excerpt:
				"Koliko puta ste osetili da vas nešto „boli“, a lekari kažu da je sve u redu? Možda tada ne govori telo već vaša psiha.",
			content: [
				"Često zaboravljamo da telo i psiha ne funkcionišu odvojeno.Kada nas boli telo, shvatamo to ozbiljno i tražimo fizički uzrok.Ali kada boli duša ćutimo, potiskujemo osećanja i nastavljamo dalje. Tada telo polako počinje da govori umesto nas.",
				"**Kratka istorija pogleda na čoveka**",
				" Dugo vremena čovek nije bio posmatran holistički kao jedinstveno biće u kojem su telo i duh u stalnoj međusobnoj vezi. Od antičkih vremena pa sve do Dekarta, preovlađivalo je mišljenje da su telo i psiha odvojeni.",
				"Dekart je verovao da telo funkcioniše po zakonima mehanike, dok je duša nešto „izvan“ tela. Takvo razdvajanje uticalo je na razvoj medicine, koja se vekovima bavila isključivo telesnim aspektom bolesti.",
				"Ipak, još u antičko doba, grčki lekar Hipokrat govorio je da „nema bolesti tela bez bolesti duše“, dok su Epikurejci smatrali da emocije tuga, strah, bes mogu izazvati telesne promene.",
				"U srednjem veku, persijski lekari verovali su da bolest nastaje kao rezultat  interakcije tela i psihe.",
				"Upravo tu leže začeci onoga što danas nazivamo psihosomatskim pristupom.",
				"**Šta zapravo znači psihosomatika?**",
				"Reč psihosomatika potiče od grčkih reči psyche (duša) i soma (telo). Ona proučava kako emocije, misli, način života i stres utiču na telo i obrnuto, kako fizičko stanje utiče na psihu.",
				"Psihosomatika posmatra čoveka kao celinu: pokazuje da telo i psiha ne deluju odvojeno, već zajedno čine jedan sistem. Telo postaje glasnik onoga što u sebi potiskujemo.",
				"**Kada telo progovori**",
				"Kada dugo živimo pod stresom, u napetosti ili nezadovoljstvu, a osećanja ne izražavamo telo preuzima ulogu glasnika.",
				"Pojavljuju se bolovi u stomaku, glavobolje, povišen pritisak, osipi, nesanica, umor,  pad imuniteta....  nastavljaju da se razvijaju i druge hronične bolesti.",
				"Lekari često kažu da su „svi rezultati u redu“, ali mi se i dalje ne osećamo dobro.",
				"Lekovi pomognu na kratko, ali se simptomi vraćaju.",
				"To je znak da uzrok nije samo fizički, već i emocionalni.",
				"Takvi simptomi nisu „izmišljeni“  mi ih zaista osećamo. Oni su poruka našeg tela.",
				"Organizam pokušava da nam pokaže ono što svesno ne prepoznajemo: da nešto u nama traži pažnju, razumevanje i promenu.",
				"**Zašto je važno osluškivati telo?**",
				"Telo nikada ne govori protiv nas ono nas štiti i upozorava.",
				"Simptomi su njegov način da nas uspori i natera da se okrenemo sebi.",
				"Kada naučimo da ih prepoznamo i razumemo, počinjemo da živimo u skladu sa sobom.",
				"Zdravlje nije samo odsustvo bolesti to je ravnoteža između tela, uma i duše.",
				"Kada postignemo tu harmoniju, telo više nema potrebu da nas upozorava kroz bol ili napetost.",
				"**Prvi korak ka promeni**",
				"Ako prepoznajete da vaše telo govori kroz simptome koje ne razumete to je već važna poruka.",
				"Možda je došlo vreme da zastanete i poslušate sebe.",
				"Razgovor sa terapeutom može pomoći da otkrijete šta vaše telo pokušava da vam kaže i da naučite kako da ponovo uspostavite ravnotežu između onoga što osećate i onoga što živite.",
				"Psihoterapija ne menja samo način na koji mislimo menja način na koji živimo, dišemo i osećamo svoje telo.",
			],
		},
		{
			id: 2,
			title: "Penzionisanje i starenje",
			category: "Psihološke teme",
			author: "Svetlana Belančić",
			excerpt: "Vreme preispitivanja, ali i novih mogućnosti",
			content: [
				"Odlazak u penziju predstavlja veliku životnu promenu. Za mnoge ljude ona se ne doživljava samo kao završetak radne karijere, već i kao gubitak uloge koja je decenijama bila deo ličnog i društvenog identiteta. Uloga zaposlenog neretko nam je davala osećaj svrhe, pripadnosti i korisnosti. Zato ne čudi što ovaj period može biti doživljen kao kriza, vreme preispitivanja i prilagođavanja novim okolnostima koje utiču na celokupan život.",
				"**Kako doživljavamo starost?**",
				"Starost se najčešće određuje prema godinama. U Srbiji i većini zemalja osobe iznad 65 godina smatraju se starijim. U ovom periodu dolazi do postepenog opadanja fizioloških funkcija, što mnogima teško pada. Odraz u ogledalu postaje podsetnik vremena koje prolazi.",
				"Javljaju se pitanja:",
				"*„Da li sam i dalje potreban svojoj porodici i društvu?“*",
				"*„Da li ljudi polako zaboravljaju na mene?“*",
				"*„Da li sam i dalje vredan, iako više ne radim?“*",
				"Finansijska nesigurnost, briga o zdravlju, odlazak bliskih osoba  sve to može biti dodatni izvor stresa. Prirodno je da se ponekad osećamo preplavljeno mislima o prolaznosti i životnim gubicima.",
				"**Uloga okruženja i društva**",
				"Naš doživljaj starosti zavisi od ličnih stavova, ali i od toga kako društvo posmatra starije ljude. Nekada se starost povezivala sa teretom i nemoći. Danas, sve više se govori o starijem dobu kao o fazi koja može doneti nove mogućnosti, lični rast, nove uloge i izgradnju identiteta koji nije vezan isključivo za radno mesto.",
				"**Da li ćemo samo „čekati dane“ ili ćemo ih ispuniti?**",
				"Ovaj period života može biti ispunjen rutinskim danima i osećajem da „više nismo ono što smo bili“. Ali može postati i vreme kada:",
				"@učimo da uživamo u svakom danu,@",
				"@koristimo iskustvo i mudrost koje smo godinama sticali,@",
				"@ispunjavamo želje koje smo stalno odlagali „za penziju“,@",
				"@otkrivamo nova interesovanja, hobije i odnose.@",
				"Neki se na penziju pripremaju godinama, a nekima je potrebno više vremena da prihvate promenu. I jedno i drugo je potpuno u redu. Ništa se ne dešava preko noći. Dajte sebi pravo da vam bude teško ali i da učinite nešto dobro za sebe.",
				"**Kada potražiti podršku?**",
				"Ako osetite da se nalazite u fazi prilagođavanja koju teško prevazilazite, ako ste tužni, razočarani, bezvoljni, povučeni ili vam se čini da ne vidite izlaz, psihoterapija može biti dragocena podrška. Razgovor sa stručnjakom pomaže da sagledate situaciju iz drugačije perspektive, da razumete svoje emocije i da ponovo pronađete smisao i zadovoljstvo u godinama u kojima ste.",
				"Starost ne mora biti samo gubitak. Ona može biti prilika da ponovo izgradimo sebe mirnije, mudrije i svesnije nego ikada ranije.",
			],
		},
		{
			id: 3,
			title: "Panični napad – prvi korak ka smirenju",
			category: "Psihološke teme",
			author: "Svetlana Belančić",
			excerpt:
				"Panični napad – prvi korak ka smirenju Disanjem do unutrašnjeg mira",
			content: [
				"**Kratak uvodni deo**",
				"Svaka osoba koja je doživela napad panike zna da je to jedno od najneprijatnijih stanja koje ljudsko biće može da iskusi.",
				"Prvi napad panike ostavlja osećaj užasa i bespomoćnosti, ali i strah da  će se ponoviti. Iskustva pokazuju da napad panike ne mora više nikad da se ponovi, može  da se povremeno javlja, kod nekih osoba učestalije, čak više puta na nedeljnom nivou.",
				"Takođe može da prestane, ali i ponovo da se javi nakon dosta godina.",
				"Napad panike fiziološki se ne razlikuje od rekcije organizma koji se nalazi u realnoj životnoj opasnosti, u situaciji „ bori se ili beži“ , kada osobu npr. juri pas, ide u susret automobilu, neko nas fizički napadne..... ",
				"**Šta  može da bude ohrabrujuće u situaciji kad doživljavamo panični napad?**",
				"Dobro je to što možemo naučiti da smanjimo strah pri pojavi novih napada, možemo da utičemo da se smanji njihova učestalost i intenzitet.",
				"Od velikog značaja je promena načina života.",
				"Napad panike prate telesne reakcije poput lupanja srca, stezanja u grudima, osećaj da ćemo se ugušiti, pasti u nesvest, osećamo utrnulost  mišića ruku i nogu, vrtoglavicu, preznojavanje. ",
				"**Koje katastofične misli su nam tog trenutka u glavi?**",
				"„Doživeću infarkt, ugušiću se, onesvestiću se, izgubiću kontrolu nad sobom....“. ",
				"Tako osoba još više uvećava svoj strah i panika samo raste. ",
				"Prvo, jasno da su napadi panike vrlo zastrašujuće iskustvo, ali su bezopasni. ",
				"Nećete se ugušiti, dobiti infarkt ili umreti.",
				"Imajte na umu da postoji značajna razlika između onog što se dešava sa srcem kod napada panike i kod srčanog udara. ",
				"**Kako sebi pomoći? **",
				"Naučite da kod napada panike i generalno, prestanete da konstantno osluškujete senzacije u telu, kad osetite one neprijatne poput navedenih ne inerpretirajte ih kao katastrofične i opasne.",
				"Pametno je proveriti svoje zdravstveno stanje i kad dobijete potvrdu da je sve u redu prihvatite da ne dovode do katasrofičnih posledica.",
				"One u realnim situacijama imaju zaštitnu ulogu.",
				"Sledeći korak je  smanjenje napetosti i stresa putem relaksacije, vežbanja, bilo kog vida fizičke aktivnostiu koji vam prija.",
				"Tehnika  pravilnog disanja ima tu ključnu ulogu.",
				"Kada osetite da započinje napad panike prvo obratite pažnju na svoje disanje.",
				"*Kada smo u strahu, dišemo brzo i plitko,  gornjim delom grudi?*",
				"Dotok kiseonika do mozga je smanjen, javlja se osećaj vrtoglavice što vas pojačano zastrašuje.",
				"Telo tada dobija signal da je u opasnosti, aktivira se simpatički nervni sistem i napad se pojačava",
				"*Duboko disanje je prvi najdelotvorniji korak uz jasnu misao da vam se neće desiti ništa, da nećete umreti.*",
				"Usmerite pažnju na svoje disanje. Dišite donjim delom pluća.",
				"Stavite ruku na stomak i pratite njegovo podizanje i spuštanje. Udahnite polako vazduh  kroz nos sve do stomaka.",
				"Zadržite dah 2, 3 sekunde i onda polako dugim izdahom kroz usta istisnite vazduh.",
				"Osetićete da vam se  stomak polako spušta. Tako ste aktivirali  parasimpatički nervni sistem, sistem oporavka i opuštanja. Osetićete kako se polako opuštate i smirujete.Time utičete i na pojavu i intenzitet paničnih napada.",
				"Vežbajte ovu tehniku više puta tokom dana, kad god se setite, posebno  kada ste napeti i  nervozni. ",
				"Uz psihoterapijski rad, disanje postaje snažan saveznik u vraćanju osećaja sigurnosti i poverenja u sopstveno telo. Ako osećate da vam je potrebna podrška na tom putu tu smo da vam pomognemo.",
			],
		},
		{
			id: 4,
			title: "Strah, Stid i Prvi korak ka promeni",
			category: "Psihološke teme",
			author: "Svetlana Belančić",
			excerpt:
				"Teško je suočiti se sa činjenicom da imaš problem i još teže jasno to sebi reći. ",
			content: [
				"Teško je suočiti se sa činjenicom da imaš problem i još teže jasno to sebi reći. Imaš strah da će te devojka koja ti se dopada, šef ili poslovni partner odbiti, brineš kako će te drugi doživeti i uz to osećaš stid zbog problema koji imaš. Suočavanje sa tim nije lako, ali priznanje da imaš problem je prvi korak. Promena počinje kada odlučiš da se ne kriješ od onoga što te muči.",
				"*Ponekad nam treba dosta vremena da se suočimo sa problemom koji nas pritiska. *",
				"Uzmimo primer mladića u tridesetim godinama  koji ima snažan  strah da priđe devojci. Već sama pomisao da joj se obrati izaziva u njemu  osećaj panike i  nelagode. Uveren je da će biti odbijen jer sumnja u sebe i smatra da nije dovoljno dobar. Nikada nije bio u vezi, ne zato što ne želi bliskost, već zato što ga sputavaju strah od odbacivanja, nesigurnost i uverenje da ne zna kako da započne razgovor ili zadrži nečiju pažnju. O tome ne govori ni prijateljima, i svaki put kada mu se neko dopadne, povlači se i odustaje.",
				"Da bismo počeli da rešavamo problem koji imamo, prvi korak je da sebi jasno priznamo da on postoji.",
				"Kada sebi kažemo: „Imam strah da priđem devojci… da pronađem posao… da upoznam nove ljude…“ već smo napravili značajan korak ka promeni. Međutim, vrlo često se javlja i stid što uopšte imamo takav problem. Taj stid može postati veća prepreka od samog problema jer nas sabotira i zaustavlja da napravimo prvi korak — bilo da pokušamo sami ili da potražimo stručnu pomoć.",
				"Iz nas  progovara strah: da nismo dovoljno dobri, da ćemo biti odbijeni, ismejani.... To su pretpostavke koje sami gradimo, često bez stvarne provere. Tako ostajemo poput hrčka u začaranom krugu — mnogo truda, ali bez pomaka, u mestu.",
				"Posledica toga je da ostajemo sami, nezadovoljni i uvereni da se ništa ne može promeniti. Ali promena je moguća i prvi korak je upravo priznanje problema i spremnost da potražimo podršku. Razgovor sa stručnom osobom može pomoći da prevaziđemo stid, oslobodimo se strahova,  preispitamo svoj osećaj lične vrednosti  i napravimo prve korake ka životu koji želimo — životu u kojem se osećamo samopouzdano i povezano sa drugima."
			],
		},
	];

	const handleReadMore = (post: BlogPost) => {
		setSelectedPost(post);
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const handleBackToBlog = () => {
		setSelectedPost(null);
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	if (selectedPost) {
		return (
			<section className="w-full  py-12 min-h-screen">
				<div className=" mx-auto w-full px-6">
					<button
						onClick={handleBackToBlog}
						className="mb-8 flex items-center gap-2 text-white hover:text-hv-green/80 transition-colors font-medium"
					>
						<ArrowRight className="w-5 h-5 rotate-180" />
						Nazad na blog
					</button>

					<article className="bg-white rounded-lg shadow-lg p-8 md:p-12">
						<div className="flex items-center gap-4 mb-4 flex-wrap">
							<span className="inline-flex items-center gap-1 bg-hv-green/10 text-hv-green px-3 py-1 rounded-full text-sm font-medium">
								<Tag className="w-4 h-4" />
								{selectedPost.category}
							</span>
						</div>

						<h1 className="font-beau text-hv-green text-3xl md:text-4xl font-bold mb-4">
							{selectedPost.title}
						</h1>

						<div className="flex items-center gap-2 mb-8 text-gray-700">
							<User className="w-5 h-5" />
							<span className="font-medium">{selectedPost.author}</span>
						</div>

						<div className="prose prose-lg max-w-none">
							{selectedPost.themeTitle && (
								<h3 className="font-beau text-hv-green/80 text-xl font-medium mb-6 italic">
									{selectedPost.themeTitle}
								</h3>
							)}
							{selectedPost.content.map((paragraph, index) => {
								if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
									return (
										<h2
											key={index}
											className="font-beau text-hv-green text-2xl font-semibold mt-8 mb-4"
										>
											{paragraph.replace(/\*\*/g, "")}
										</h2>
									);
								}
								if (paragraph.startsWith("*") && paragraph.endsWith("*")) {
									return (
										<p
											key={index}
											className="italic text-gray-700 leading-relaxed mb-2"
										>
											{paragraph.replace(/\*/g, "")}
										</p>
									);
								}
								if (paragraph.startsWith("@") && paragraph.endsWith("@")) {
									return (
										<li
											key={index}
											className="text-gray-700 leading-relaxed pl-4 mb-2 list-disc list-inside"
										>
											{paragraph.replace(/@/g, "")}
										</li>
									);
								}
								return (
									<p key={index} className="text-gray-700 leading-relaxed mb-2">
										{paragraph}
									</p>
								);
							})}
						</div>
					</article>
				</div>
			</section>
		);
	}

	return (
		<section className="w-full py-12">
			<div className="max-w-[1200px] mx-auto w-full px-6">
				<h1 className="font-beau text-hv-green text-4xl md:text-5xl font-bold text-center mb-8">
					Psihološke teme
				</h1>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{blogPosts.map((post) => (
						<article
							key={post.id}
							className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-hv-green/20"
						>
							<div className="p-6">
								<div className="flex items-center gap-3 mb-3">
									<span className="inline-flex items-center gap-1 bg-hv-green/10 text-hv-green px-3 py-1 rounded-full text-sm font-medium">
										<Tag className="w-4 h-4" />
										{post.category}
									</span>
								</div>

								<h2 className="font-beau text-hv-green text-2xl font-semibold mb-3 line-clamp-2">
									{post.title}
								</h2>

								<div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
									<span className="flex items-center gap-1">
										<User className="w-4 h-4" />
										{post.author}
									</span>
								</div>

								<p className="text-gray-700 leading-relaxed mb-4 line-clamp-3">
									{post.excerpt}
								</p>

								<button
									onClick={() => handleReadMore(post)}
									className="flex items-center gap-2 bg-hv-green hover:bg-hv-green/90 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
								>
									Pročitaj više
									<ArrowRight className="w-5 h-5" />
								</button>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
};

export default BlogPage;
