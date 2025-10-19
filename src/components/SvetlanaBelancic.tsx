import Image from "next/image";

const SvetlanaBelancic = () => {
	return (
		<article className="border p-4 rounded-lg shadow-md w-full h-full flex flex-col">
			<div className="mb-4 w-full relative aspect-square">
				<Image
					className="object-cover rounded-lg"
					src="/TB-7.JPG"
					alt="Svetlana Belancic"
					fill
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>
			</div>
			<div className="flex-1 flex flex-col">
				<h1 className="text-lg font-semibold text-hv-green text-start mb-2">
					Svetlana Belančić
				</h1>
				<p className="text-gray-600 text-start">Psiholog i geštalt terapeut</p>
			</div>
		</article>
	);
};

export default SvetlanaBelancic;
