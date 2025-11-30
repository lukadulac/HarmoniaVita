"use client";
import { useRef } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ServiceCardProps {
	id: number;
	title: string;
	description: string;
	isExpanded: boolean;
	onToggle: (id: number) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
	id,
	title,
	description,
	isExpanded,
	onToggle,
}) => {
	const contentRef = useRef<HTMLDivElement>(null);

	return (
		<div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-hv-green/20  flex flex-col">
			<div className="p-6 flex flex-col flex-1">
				<h3 className="font-beau text-hv-green text-2xl font-semibold mb-4">
					{title}
				</h3>

				<div
					ref={contentRef}
					style={{
						maxHeight: isExpanded
							? `${contentRef.current?.scrollHeight}px`
							: "0px",
						opacity: isExpanded ? 1 : 0,
						marginBottom: isExpanded ? "1rem" : "0",
					}}
					className="overflow-hidden transition-all duration-500 ease-in-out"
				>
					<p className="text-gray-700 leading-relaxed">{description}</p>
				</div>

				<button
					onClick={() => onToggle(id)}
					className="w-full flex items-center justify-center gap-2 bg-hv-green hover:bg-hv-green/90 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300"
				>
					{isExpanded ? (
						<>
							<span>Prikaži manje</span>
							<ChevronUp className="w-5 h-5" />
						</>
					) : (
						<>
							<span>Saznaj više</span>
							<ChevronDown className="w-5 h-5" />
						</>
					)}
				</button>
			</div>
		</div>
	);
};

export default ServiceCard;
