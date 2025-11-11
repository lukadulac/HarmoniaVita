"use client";
import { useState } from "react";
import Image from "next/image";
const PsiholoskeTeme = () => {
	const [open, setOpen] = useState<number | null>(null);
	const toggle = (index: number) => {
		setOpen(open === index ? null : index);
	};

	const topics = [
		{
			theme: "Kratka istorija pogleda na čoveka",
			themeDecs: [
				"Dugo vremena čovek nije bio posmatran holistički, kao jedinstveno biće u kome su telo i duh u stalnoj međusobnoj vezi.",
				"Od antičkih vremena, pa sve do Dekarta, dominiralo je mišljenje da su telo i psiha odvojeni. Dekart je verovao da telo funkcioniše po zakonima mehanike, dok je duša nešto „izvan“ tela.",
				"Takvo razdvajanje uticalo je na razvoj medicine koja se vekovima bavila isključivo telesnim aspektom bolesti.",
				"Ipak, još u antičko doba grčki lekar Hipokrat je govorio da „nema bolesti tela bez bolesti duše“, a Epikurejci su smatrali da emocije tuga, strah, bes mogu izazvati telesne promene.",
				"U srednjem veku, persijski lekari su verovali da bolest nastaje kao rezultat  emocija, emocionalnih reakcija, odnosnih vežbi i <span className='font-semibold'>interakcije tela i psihe</span> .",
				"Tu su začeci onoga što danas zovemo <span className='font-semibold'>psihosomatskim pristupom.</span>.",
			],
		},
		{
			theme: "Šta zapravo znači psihosomatika?",
			themeDecs: [
				"Reč psihosomatika potiče od grčkih reči psyche (duša) i soma (telo).",
				"Ona proučava kako emocije, misli, način života i stres utiču na telo – i obrnuto, kako fizičko stanje utiče na psihu.",
				"Psihosomatika posmatra čoveka kao celinu: pokazuje da telo i psiha ne deluju odvojeno, već zajedno čine jedan sistem",
				"Telo postaje glasnik onoga što u sebi potiskujemo.",
			],
		},
		{
			theme: "Kada telo progovori",
			themeDecs: [
				"Kada dugo živimo pod stresom, u napetosti ili nezadovoljstvu, a osećanja ne izražavamo telo preuzima ulogu glasnika.",
				"Pojavljuju se bolovi u stomaku, glavobolje, povišen pritisak, osipi, nesanica, umor,  pad imuniteta....  nastavljaju da se razvijaju i druge hronične bolesti.",
				"Lekari često kažu da su „svi rezultati u redu“, ali mi se i dalje ne osećamo dobro.",
				"Lekovi pomognu na kratko, ali se simptomi vraćaju.",
				"To je znak da uzrok nije samo fizički, već i emocionalni.",
				"Takvi simptomi nisu „izmišljeni“ mi ih zaista osećamo.",
				"Oni su poruka našeg tela.",
				"Organizam pokušava da nam pokaže ono što svesno ne prepoznajemo da nešto u nama traži pažnju, razumevanje i promenu.",
			],
		},
		{
			theme: "Zajednički rad tela i psihe",
			themeDecs: [
				"Psihosomatski pristup podrazumeva sagledavanje čoveka kao celine.",
				"Zato se u lečenju često kombinuju medicinski i psihološki pristupi: lekari, psiholozi i psihoterapeuti zajedno pomažu da se razume i telo i psiha.",
				"Kroz terapijski razgovor i osvešćivanje, osoba počinje da povezuje svoje emocije, misli i telesne reakcije.",
				"Tada dolazi do dubljeg razumevanja sebe a često i do povlačenja fizičkih simptoma koji su bili prisutni i ometali naše normalno funkcionisanje.",
			],
		},
		{
			theme: "Zašto je važno osluškivati telo?",
			themeDecs: [
				"Telo nikada ne govori protiv nas ono nas štiti i upozorava.",
				"Simptomi su njegov način da nas uspori i natera da se okrenemo sebi.",
				"Kada naučimo da ih prepoznamo i razumemo, počinjemo da živimo u skladu sa sobom.",
				"Zdravlje nije samo odsustvo bolesti to je ravnoteža između tela, uma i duše.",
				"Kada postignemo tu harmoniju, telo više nema potrebu da nas upozorava kroz bol ili napetost.",
			],
		},
		{
			theme: "Prvi korak ka promeni",
			themeDecs: [
				"Ako prepoznajete da vaše telo govori kroz simptome koje ne razumete to je već važna poruka.",
				"Možda je došlo vreme da zastanete i poslušate sebe.",
				"Razgovor sa terapeutom može pomoći da otkrijete šta vaše telo pokušava da vam kaže i da naučite kako da ponovo uspostavite ravnotežu između onoga što osećate i onoga što živite.",
				"Psihoterapija ne menja samo način na koji mislimo menja način na koji živimo, dišemo i osećamo svoje telo.",
			],
		},
	];

	return (
		<>
			<section className="pt-12 pb-8 bg-hv-beige-1 w-full text-center">
				<div className="max-w-[1200px] mx-auto space-y-2 px-6">
					<h2 className="text-5xl font-beau text-hv-green font-semibold ">
						Psiholoske teme
					</h2>
					<hr className="my-4 border border-spacing-1 mx-auto w-1/2 border-hv-green" />
					<div className="mb-4 space-y-2">
						<p>
							Koliko puta ste osetili da vas nešto „boli“, a lekari kažu da je
							sve u redu?
						</p>
						<p>Možda tada ne govori telo već psiha.</p>

						<p>Često zaboravljamo da telo i psiha ne funkcionišu odvojeno.</p>
						<p>
							Kada nas boli telo, mi to shvatamo ozbiljno i tražimo fizički
							uzrok.
						</p>
						<p>
							Ali kada boli duša ćutimo, guramo osećanja po strani i
							nastavljamo dalje.
						</p>
						<p>
							Tada telo polako počinje da{" "}
							<span className="font-semibold">govori umesto nas.</span>
						</p>
					</div>

					{topics.map((topic, index) => (
						<div
							key={index}
							className="mt-8 mx-auto border max-w-[600px] border-hv-green rounded-md p-6"
						>
							<h2
								onClick={() => toggle(index)}
								className="text-2xl font-semibold text-hv-green  cursor-pointer  flex items-center justify-between  gap-3"
							>
								{topic.theme}
								<Image
									title="Dropdown Arrow"
									src="/icons/dropdown-arrow.svg"
									alt="Dropdown Arrow"
									width={24}
									height={24}
									className={`svgColor transition-transform duration-300 ${
										open === index ? "rotate-180" : ""
									}`}
								/>
							</h2>
							<div
								className={`overflow-hidden transition-all duration-300 ease-in-out ${
									open === index
										? "max-h-[1000px] opacity-100 mt-4 text-start"
										: "max-h-0 opacity-0"
								}`}
							>
								<div>
									{topic.themeDecs.map((desc, descIndex) => (
										<p
											key={descIndex}
											className="mb-4 pl-4"
											dangerouslySetInnerHTML={{ __html: desc }}
										></p>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</section>
		</>
	);
};

export default PsiholoskeTeme;
