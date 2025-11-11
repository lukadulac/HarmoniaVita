import Image from "next/image";

const SvetlanaBelancic = () => {
	return (
		<article className="border p-3 rounded-lg shadow-md w-full h-full flex flex-col">
			<div className="mb-3 w-full relative aspect-[4/3]">
				<Image
					title="Svetlana Belančić"
					className="object-cover rounded-lg w-full h-full"
					src="/TB-7.JPG"
					alt="Svetlana Belancic"
					width={1200}
					height={800}
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>
			</div>
			<div className="flex-1 flex flex-col">
				<h2 className="text-base font-semibold text-hv-green text-start mb-1.5">
					Svetlana Belančić
				</h2>
				<p className="text-gray-600 text-start text-sm">
					Psiholog i geštalt terapeut
				</p>
			</div>
		</article>
	);
};

export default SvetlanaBelancic;
