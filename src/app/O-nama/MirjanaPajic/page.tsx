"use client";
import { useState } from "react";
const MirjanaPajic = () => {
	const [isVisible, setIsVisible] = useState(false);
	return (
		<section className="min-h-screen w-full pt-[120px]">
			<div className="max-w-[1200px] mx-auto px-6">
				<h1 className="text-4xl font-semibold text-hv-green mb-4">
					Mirjana Pajic
				</h1>
				<div>
					<p>
						Ja sam Mirjana Pajić, majka, pedagog, porodični psihoterapet,
						regresoterapeut, kouč psihosomatike.
					</p>
					<p>Obrazovanje:</p>
					<p>
						Studije pedagogije sam završila na Filozofskom fakultetu u Novom
						Sadu.
					</p>
					<p>
						Sistemsku porodičnu psihoterapiju sam završila – U OKVIRU
						ASOCIJACIJA SISTEMSKIH TERAPEUTA EVROPSKI AKREDITOVAN INSTITUTA ZA
						EDUKACIJU IZ PSIHOTERAPIJE (EAPTT)ČLAN KOMORE TRENING INSTITUTA
						EVROPSKE ASOCIJACIJE ZA PORODIČNU TERAPIJU (EFTA -TTC) BEOGRAD,
						SRBIJA
					</p>
					<p>Nehipnotičku regresoterapiju po metodi Patrika Balinta</p>
					<p>
						Osnovnu i naprednu psihosomatiku kao za koča psihosomatike kod Vesne
						Danilovac ICI, Berlin
					</p>
				</div>
				<div>
					<p>Verujem da svako ZALUŽUJE DA BUDE DOBRO (u harmoniji sa sobom)</p>
					<p>
						Ljubazno, nežno, strpljivo, podržavajući i bez osuđivanja — moj cilj
						je da kreiram prostor u kome se osećate prihvaćenim baš takvim kakvi
						jeste, sigurno, podržano, slobodnim da govorite i da budete slušani.{" "}
					</p>
					<p>
						Terapija je podrška, samo da se oslušneš, čuješ i odlučiš kuda dalje
						i onda polako rešavaš ono za šta trenutno imaš snage… i tako kreneš
						kroz proces…veruj nije jednostavno.
					</p>
					<p>
						<strong>Promena je moguća</strong> — korak po korak, tempom koji
						odgovara vama.
					</p>
				</div>
				<div>
					<h2>Moj rad</h2>
					<p>
						<strong>
							Posao psihoterapeuta obavljam s ljubavlju verući da sa ljubavlju
							možeš puno, a bez nje ništa.
						</strong>
					</p>
					<p>
						U svom radu koristim sistemski pristup porodičnoj terapiji — to
						znači da ne gledam samo problem jedne osobe, nego vidim celu sliku.
					</p>
					<p>
						Verujem da svaki glas zaslužuje da bude saslušan — i onaj najmlađi,
						i onaj koji se povukao, i onaj najbučniji.
					</p>
					<p>
						<strong>
							Sistemska porodična terapija zasniva se na uverenju da smo svi
							više nego suma svojih pojedinačnih delova – da su naši odnosi sa
							porodicom, partnerom, prijateljima i sa našom prošlošću činilac
							koji oblikuje kako se osećamo, kako reagujemo, kako komuniciramo.
							Ne radi se samo o tome šta vi osećate, već i kako ono što osećate
							utiče na one koji su vam bliski, i obrnuto.
						</strong>
					</p>
          {/* TODO: Add questions, image, and style */}
				</div>
			</div>
		</section>
	);
};
export default MirjanaPajic;
