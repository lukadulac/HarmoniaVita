"use client";
import ServiceCard from "./ServiceCard";
import { useState } from "react";
const Services = () => {
	const [expandedId, setExpandedId] = useState<number | null>(null);
	const services = [
		{
			id: 1,
			title: "Individualna psihoterapija za odrasle",
			description:
				"U individualnoj terapiji pružamo vam prostor u kojem možete da zastanete, oslušnete sebe i dobijete podršku koja vam je potrebna. Kroz razgovor, razumevanje i stručno vođenje pomažemo vam da smanjite napetost, bolje razumete svoje emocije i napravite promene koje vode stabilnijem i ispunjenijem životu.",
		},
		{
			id: 2,
			title: "Psihoterapija parova i porodice",
			description:
				"Rad sa parovima i porodicama pomaže da se čujete, razumete i ponovo povežete. U sigurnom i neutralnom prostoru, zajedno radimo na boljoj komunikaciji, rešavanju konflikata i izgradnji odnosa u kojem ima više poverenja, podrške i bliskosti.",
		},
		{
			id: 3,
			title: "Savetovanje mladih i roditelja",
			description:
				"Mladima nudimo podršku u periodima promene, nesigurnosti i razvoja da se osećaju viđeno, shvaćeno i osnaženo. Roditeljima pomažemo da bolje razumeju potrebe svoje dece, prevaziđu izazove u vaspitanju i izgrade zdravije porodične odnose",
		},
		{
			id: 4,
			title: "Onlajn psihoterapija",
			description:
				"Kada su vreme, udaljenost ili ritam života prepreka, terapija vam je dostupna online. Susreti na daljinu nude istu profesionalnost i toplinu kao i rad uživo iz udobnosti vašeg doma.",
		},
	];
	const handleToggle = (id: number) => {
		setExpandedId(expandedId === id ? null : id);
	};
	return (
		<section className="w-full bg-hv-beige-1 py-12">
			<div className="max-w-[1200px] mx-auto w-full px-6">
				<h2 className="font-beau text-hv-green text-4xl font-semibold text-center">
					Usluge koje pružamo
				</h2>
				<hr className="my-4 border border-spacing-1 mx-auto border-hv-green" />

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 items-start">
					{services.map((service) => (
						<ServiceCard
							key={service.id}
							id={service.id}
							title={service.title}
							description={service.description}
							isExpanded={expandedId === service.id}
							onToggle={handleToggle}
						/>
					))}
				</div>
			</div>
		</section>
	);
};
export default Services;
