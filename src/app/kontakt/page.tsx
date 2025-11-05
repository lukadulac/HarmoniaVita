"use client";
import React, { useState } from "react";
import { Send, Loader2, CheckCircle } from "lucide-react";
import DropDownSelect from "@/components/DropDownSelect";

interface Psychologist {
	id: number;
	name: string;
	email: string;
	phone: string;
}

interface FormData {
	psychologist: string;
	name: string;
	email: string;
	message: string;
}

type SubmitStatus = "success" | "error" | null;

const ContactPage: React.FC = () => {
	const [formData, setFormData] = useState<FormData>({
		psychologist: "",
		name: "",
		email: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
	const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);


	const psychologists: Psychologist[] = [
		{
			id: 1,
			name: "Mirjana Pajić",
			email: "mirjanapajic40@gmail.com",
			phone: "+381 064 123 4567",
		},
		{
			id: 2,
			name: "Svetlana Belančić",
			email: "svetlanabelancic@gmail.com",
			phone: "+381 064 123 4568",
		},
	];

	const handleInputChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus(null);

		const selectedPsych = psychologists.find(
			(p) => p.name === formData.psychologist
		);

		try {
			const response = await fetch("/api/send-email", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					to: selectedPsych?.email,
					contactName: selectedPsych?.name,
					from: formData.email,
					senderName: formData.name,
					message: formData.message,
				}),
			});

			const responseData = await response.json();
			console.log("Response:", responseData);

			if (response.ok) {
				setSubmitStatus("success");
				setFormData({ psychologist: "", name: "", email: "", message: "" });
			} else {
				setSubmitStatus("error");
			}
		} catch (error) {
			console.error("Error sending email:", error);
			setSubmitStatus("error");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="min-h-screen pt-[120px] sm:pt-[100px] lg:pt-[120px] py-6 sm:py-8 lg:py-12 px-4 bg-gradient-to-br from-hv-green/40 to-hv-beige-6">
			<div className="max-w-7xl mx-auto">
				{/* Header */}
				<div className="text-center mb-6 sm:mb-8">
					<h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-hv-green font-beau mb-2 sm:mb-3">
						Kontaktirajte Nas
					</h1>
					<p className="text-base sm:text-lg text-white">
						Pošaljite nam poruku i javićemo Vam se uskoro
					</p>
				</div>

				
				<div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
					{/* Contact Form Card */}
					<div className="bg-white rounded-xl lg:rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8">
						{submitStatus === "success" ? (
							<div className="text-center py-8 sm:py-12">
								<div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
									<CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
								</div>
								<h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-2 sm:mb-3">
									Poruka Poslata!
								</h3>
								<p className="text-slate-600 mb-6 sm:mb-8 px-4">
									Javićemo Vam se u najkraćem mogućem roku.
								</p>
								<button
									onClick={() => setSubmitStatus(null)}
									className="bg-slate-800 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-medium hover:bg-slate-700 transition-colors"
								>
									Pošalji Novu Poruku
								</button>
							</div>
						) : (
							<form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
								{/* Psychologist Selection */}
								<div>
									<label className="block text-sm font-medium text-slate-700 mb-2">
										Izaberite Psihologa *
									</label>
									<div className="border rounded-lg">
										<DropDownSelect
											psychologists={psychologists}
											value={formData.psychologist}
											onChange={(value) =>
												setFormData({ ...formData, psychologist: value })
											}
											placeholder="-- Izaberite --"
										/>
									</div>
								</div>

								
								<div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
									<div>
										<label className="block text-sm font-medium text-slate-700 mb-2">
											Vaše Ime *
										</label>
										<input
											type="text"
											name="name"
											value={formData.name}
											onChange={handleInputChange}
											required
											className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm sm:text-base"
											placeholder="Petar Petrović"
										/>
									</div>
									<div>
										<label className="block text-sm font-medium text-slate-700 mb-2">
											Vaš Email *
										</label>
										<input
											type="email"
											name="email"
											value={formData.email}
											onChange={handleInputChange}
											required
											className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm sm:text-base"
											placeholder="petar@example.com"
										/>
									</div>
								</div>

								
								<div>
									<label className="block text-sm font-medium text-slate-700 mb-2">
										Poruka *
									</label>
									<textarea
										name="message"
										value={formData.message}
										onChange={handleInputChange}
										required
										rows={5}
										className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none text-sm sm:text-base"
										placeholder="Unesite Vašu poruku ovde..."
									/>
								</div>

								
								{submitStatus === "error" && (
									<div className="bg-red-50 border border-red-200 text-red-700 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base">
										Slanje poruke nije uspelo. Molimo pokušajte ponovo.
									</div>
								)}

								
								<button
									type="submit"
									disabled={isSubmitting}
									className="w-full bg-slate-800 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-medium hover:bg-slate-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg hover:shadow-xl text-sm sm:text-base"
								>
									{isSubmitting ? (
										<>
											<Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
											Šaljem...
										</>
									) : (
										<>
											<Send className="w-4 h-4 sm:w-5 sm:h-5" />
											Pošalji Poruku
										</>
									)}
								</button>
							</form>
						)}
					</div>

					
					<div className="bg-white rounded-xl lg:rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 flex flex-col">
						<h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4 sm:mb-6">
							Naša Lokacija
						</h2>
						<div className="flex-1 rounded-lg overflow-hidden min-h-[300px] sm:min-h-[400px] lg:min-h-0">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2766.4504681484323!2d19.662406176308984!3d46.10193017109152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474366c8c01187c9%3A0x7736297cf82e1d12!2z0J7RgtCy0L7RgNC10L3QuCDRg9C90LjQstC10YDQt9C40YLQtdGC!5e0!3m2!1ssr!2srs!4v1760619439127!5m2!1ssr!2srs"
								width="100%"
								height="100%"
								style={{ border: 0 }}
								allowFullScreen
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								className="w-full h-full"
							></iframe>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactPage;