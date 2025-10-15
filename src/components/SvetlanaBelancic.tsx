import Image from "next/image";

const SvetlanaBelancic = () => {
	return (
		<article className="border p-4 rounded-lg shadow-md w-full h-full flex flex-col">
			<div className="mb-4">
				<Image
					className="mx-auto"
					src="/placeholder.png"
					alt="Svetlana Belancic"
					width={200}
					height={200}
				/>
			</div>
			<div className="max-w-[250px]  flex-1 flex flex-col">
				<h1 className="text-lg font-semibold text-hv-green text-start mb-2">
					Svetlana Belančić
				</h1>
				<p className="text-gray-600 text-start">Psiholog i geštalt terapeut</p>
			</div>
		</article>
	);
};

export default SvetlanaBelancic;
