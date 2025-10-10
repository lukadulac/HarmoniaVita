import Image from "next/image";

const MirjanaPajic = () => {
	return (
		<article className="border p-4 bg-hv-beige-3 rounded-lg shadow-md  w-full h-full flex flex-col">
			<div className="mb-4">
				<Image
					className="mx-auto"
					src="/placeholder.png"
					alt="Mirjana Pajic"
					width={200}
					height={200}
				/>
			</div>
			<div className="  flex-1 flex flex-col">
				<h1 className="text-lg font-semibold text-hv-green text-start mb-2">
					Mirjana Pajic
				</h1>
				<div className="flex flex-col gap-1  w-full md:flex-row md:justify-between">
					<p className="text-gray-600 text-start text-wrap">
						Majka, pedagog, porodični psihoterapet, regresoterapeut, kouč
						psihosomatike
					</p>
					<p className="text-hv-gold">
						<i>Ljubitelj ljudi i dobroga u njima. </i>
					</p>
				</div>
			</div>
		</article>
	);
};

export default MirjanaPajic;
