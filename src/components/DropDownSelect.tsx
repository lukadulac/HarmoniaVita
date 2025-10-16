import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

interface Psychologist {
	id: number;
	name: string;
	email: string;
	phone: string;
}

interface CustomDropdownProps {
	psychologists: Psychologist[];
	value: string;
	onChange: (value: string) => void;
	placeholder?: string;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
	psychologists,
	value,
	onChange,
	placeholder = "-- Izaberite --",
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	const selectedPsychologist = psychologists.find((p) => p.name === value);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const handleSelect = (name: string) => {
		onChange(name);
		setIsOpen(false);
	};

	return (
		<div ref={dropdownRef} className="relative w-full">
			{/* Dropdown Button */}
			<button
				type="button"
				onClick={() => setIsOpen(!isOpen)}
				className={`w-full px-4 py-3  rounded-lg outline-none transition-all text-left flex items-center justify-between bg-white `}
			>
				<span className={value ? "text-slate-900" : "text-slate-400"}>
					{selectedPsychologist ? selectedPsychologist.name : placeholder}
				</span>
				<ChevronDown
					className={`w-5 h-5 text-slate-500 transition-transform ${
						isOpen ? "rotate-180" : ""
					}`}
				/>
			</button>

			{/* Dropdown Menu */}
			{isOpen && (
				<div className="absolute z-50 w-full mt-2 bg-white border border-slate-300 rounded-lg shadow-xl overflow-hidden animate-slideDown">
					<div className="max-h-60 overflow-y-auto">
						{psychologists.map((psych) => (
							<button
								key={psych.id}
								type="button"
								onClick={() => handleSelect(psych.name)}
								className={`w-full px-4 py-3 text-left hover:bg-slate-50 transition-colors flex items-center justify-between ${
									value === psych.name ? "bg-blue-50" : ""
								}`}
							>
								<div>
									<div className="font-medium text-slate-900">{psych.name}</div>
									<div className="text-xs text-slate-500 mt-0.5">
										{psych.email}
									</div>
								</div>
								{value === psych.name && (
									<Check className="w-5 h-5 text-blue-600" />
								)}
							</button>
						))}
					</div>
				</div>
			)}

			<style jsx>{`
				@keyframes slideDown {
					from {
						opacity: 0;
						transform: translateY(-10px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}
				.animate-slideDown {
					animation: slideDown 0.2s ease-out;
				}
			`}</style>
		</div>
	);
};

export default CustomDropdown;

