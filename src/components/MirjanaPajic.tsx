import Image from "next/image";
import Link from "next/link";
const MirjanaPajic = () => {
	return (
		<article className="border p-3 bg-hv-beige-3 rounded-lg shadow-md w-full  flex flex-col">
			<Link href="/O-nama/MirjanaPajic">
				<div className="mb-3 w-full relative aspect-[4/3]">
					<Image
						title="Mirjana Pajic"
						className="object-cover rounded-lg w-full h-full"
						src="/TB-3.JPG"
						alt="Mirjana Pajic"
						width={1200}
						height={800}
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>
				</div>
			</Link>

			<div className="flex-1 flex flex-col">
				<Link href="/O-nama/MirjanaPajic">
					<h2 className="text-base font-semibold text-hv-green text-start mb-1.5">
						Mirjana Pajić
					</h2>
				</Link>

				<div className="flex flex-col gap-1 w-full md:flex-row md:justify-between">
					<p className="text-gray-600 text-start text-wrap text-sm">
						Majka, pedagog, porodični psihoterapet, regresoterapeut, kouč
						psihosomatike
					</p>
					<p className="text-hv-green text-nowrap text-end text-sm underline">
						<a href="tel:+381 62 394763">+381 62 394763 </a>
					</p>
				</div>
			</div>
		</article>
	);
};

export default MirjanaPajic;
