import MirjanaPajic from "./MirjanaPajic";
import SvetlanaBelancic from "./SvetlanaBelancic";
import Link from "next/link";
const WhoAreWe = () => {
	return (
		<section className="who-we-are  w-full ">
			<div className="max-w-[1200px] mx-auto px-6 py-12">
				<h2 className="text-4xl font-semibold text-hv-green mb-4 font-beau">
					Ko smo mi?
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<MirjanaPajic />

					<SvetlanaBelancic />
				</div>
			</div>
		</section>
	);
};
export default WhoAreWe;
