// BlogPage.tsx
"use client";
import { useState } from "react";
import { Calendar, User, ArrowRight, Tag } from "lucide-react";

interface BlogPost {
	id: number;
	title: string;
	category: string;
	author: string;
	excerpt: string;
	content: string[];
    themeType?: string;
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
                "Kratka istorija pogleda na čoveka",
                " Dugo vremena čovek nije bio posmatran holistički kao jedinstveno biće u kojem su telo i duh u stalnoj međusobnoj vezi. Od antičkih vremena pa sve do Dekarta, preovlađivalo je mišljenje da su telo i psiha odvojeni.",
                "Dekart je verovao da telo funkcioniše po zakonima mehanike, dok je duša nešto „izvan“ tela. Takvo razdvajanje uticalo je na razvoj medicine, koja se vekovima bavila isključivo telesnim aspektom bolesti.",
                "Ipak, još u antičko doba, grčki lekar Hipokrat govorio je da „nema bolesti tela bez bolesti duše“, dok su Epikurejci smatrali da emocije tuga, strah, bes mogu izazvati telesne promene.",
                "U srednjem veku, persijski lekari verovali su da bolest nastaje kao rezultat  interakcije tela i psihe.",
                "Upravo tu leže začeci onoga što danas nazivamo psihosomatskim pristupom."
            ]
				
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
											className="italic text-gray-700 leading-relaxed mb-4"
										>
											{paragraph.replace(/\*/g, "")}
										</p>
									);
								}
								return (
									<p key={index} className="text-gray-700 leading-relaxed mb-4">
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
				<h1 className="font-beau text-hv-green text-4xl md:text-5xl font-bold text-center mb-4">
					Psihološke teme
				</h1>
				<p className="text-center text-gray-700 text-lg mb-12 max-w-2xl mx-auto">
					Članci o psihološkim temama, mentalnom zdravlju i ličnom rastu
				</p>

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
									className="inline-flex items-center gap-2 bg-hv-green hover:bg-hv-green/90 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
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
