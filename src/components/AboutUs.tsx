"use client";
import { useState } from "react";

const AboutUs = () => {
	const [showMore, setShowMore] = useState(false);
	return (
		<section className=" max-w-[1200px] w-full mx-auto px-6 py-12">
			<h2 className="text-4xl font-semibold text-hv-green mb-4">O nama</h2>
			<p>
				<strong>Centar HarmonijaVita</strong> je nastao iz naše zajedničke želje
				da stvorimo prostor u kom se svako može osećati prihvaćeno, sigurno,
				saslušano, bez osude i procenjivanja.
			</p>
			<p>
				Osnovale smo ga sa namerom da ljudima pružimo sigurno mesto za njihovu
				životnu priču.
			</p>
			<div
				className={`grid transition-all duration-300 ease-in-out ${
					showMore ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
				}`}
			>
				<div className="overflow-hidden">
					<div className="space-y-4 py-2">
						<p>
							Naš rad se temelji na principima geštalt terapije i sistemske
							porodične terapije uz duboko poštovanje jedinstvenosti svakog
							pojedinca i porodice.
						</p>
						<p>U prijatnom i sigurnom okruženju pružamo:</p>
						<ul className="list-disc list-inside ml-4 space-y-2">
							<li>
								psihološku podršku i savetovanje roditeljima i adolescentima
							</li>
							<li>individualnu psihoterapiju za odrasle,</li>
							<li>porodičnu i partnersku terapiju.</li>
						</ul>
					</div>
				</div>
			</div>

			<button
				onClick={() => setShowMore(!showMore)}
				className="mt-4 px-6 py-2 bg-hv-green text-white rounded-md hover:bg-opacity-90 transition-colors"
			>
				{showMore ? "Manje" : "Više"}
			</button>
		</section>
	);
};

export default AboutUs;
