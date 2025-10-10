import MirjanaPajic from "./MirjanaPajic";
import SvetlanaBelancic from "./SvetlanaBelancic";
import Link from "next/link";
const WhoAreWe = () => {
	return (
		<section className="who-we-are min-h-screen w-full ">
			<div className="max-w-[1200px] mx-auto px-6 py-12">
				<h2 className="text-4xl font-semibold text-hv-green mb-4">
					Ko smo mi?
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<Link href="/O-nama/MirjanaPajic">
						<MirjanaPajic />
					</Link>
					<Link href="/O-nama/SvetlanaBelancic">
						<SvetlanaBelancic />
					</Link>
				</div>
			</div>
		</section>
	);
};
export default WhoAreWe;
