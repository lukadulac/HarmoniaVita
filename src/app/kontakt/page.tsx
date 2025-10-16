"use client";

import React, { useState } from "react";
import { Mail, Phone, Send, Loader2, CheckCircle } from "lucide-react";
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
	const [selectedPsychologist, setSelectedPsychologist] = useState("");

	const psychologists: Psychologist[] = [
		{
			id: 1,
			name: "Mirjana Pajić",
			email: "luxworks4@gmail.com",
			phone: "+381 064 123 4567",
		},
		{
			id: 2,
			name: "Svetlana Belančić",
			email: "luxworks4@gmail.com",
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
		<div className="min-h-screen pt-[120px] py-12 px-4 bg-hv-beige-6">
			<div className="max-w-7xl mx-auto">
				{/* Header */}
				<div className="text-center mb-8">
					<h1 className="text-4xl font-bold text-slate-800 mb-3">
						Kontaktirajte Nas
					</h1>
					<p className="text-lg text-slate-600">
						Pošaljite nam poruku i javićemo Vam se uskoro
					</p>
				</div>

				{/* Main Grid - Form and Map */}
				<div className="grid lg:grid-cols-2 gap-8">
					{/* Contact Form Card */}
					<div className="bg-white rounded-2xl shadow-xl p-8">
						{submitStatus === "success" ? (
							<div className="text-center py-12">
								<div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
									<CheckCircle className="w-10 h-10 text-green-600" />
								</div>
								<h3 className="text-3xl font-bold text-slate-800 mb-3">
									Poruka Poslata!
								</h3>
								<p className="text-slate-600 mb-8">
									Javićemo Vam se u najkraćem mogućem roku.
								</p>
								<button
									onClick={() => setSubmitStatus(null)}
									className="bg-slate-800 text-white px-8 py-3 rounded-lg font-medium hover:bg-slate-700 transition-colors"
								>
									Pošalji Novu Poruku
								</button>
							</div>
						) : (
							<form onSubmit={handleSubmit} className="space-y-6">
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

								{/* User Information */}
								<div className="grid md:grid-cols-2 gap-6">
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
											className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
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
											className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
											placeholder="petar@example.com"
										/>
									</div>
								</div>

								{/* Message */}
								<div>
									<label className="block text-sm font-medium text-slate-700 mb-2">
										Poruka *
									</label>
									<textarea
										name="message"
										value={formData.message}
										onChange={handleInputChange}
										required
										rows={6}
										className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
										placeholder="Unesite Vašu poruku ovde..."
									/>
								</div>

								{/* Error Message */}
								{submitStatus === "error" && (
									<div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
										Slanje poruke nije uspelo. Molimo pokušajte ponovo.
									</div>
								)}

								{/* Submit Button */}
								<button
									type="submit"
									disabled={isSubmitting}
									className="w-full bg-slate-800 text-white px-6 py-4 rounded-lg font-medium hover:bg-slate-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
								>
									{isSubmitting ? (
										<>
											<Loader2 className="w-5 h-5 animate-spin" />
											Šaljem...
										</>
									) : (
										<>
											<Send className="w-5 h-5" />
											Pošalji Poruku
										</>
									)}
								</button>
							</form>
						)}
					</div>

					{/* Google Maps Card */}
					<div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col">
						<h2 className="text-2xl font-bold text-slate-800 mb-6">
							Naša Lokacija
						</h2>
						<div className="flex-1 rounded-lg overflow-hidden ">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2766.4504681484323!2d19.662406176308984!3d46.10193017109152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474366c8c01187c9%3A0x7736297cf82e1d12!2z0J7RgtCy0L7RgNC10L3QuCDRg9C90LjQstC10YDQt9C40YLQtdGC!5e0!3m2!1ssr!2srs!4v1760619439127!5m2!1ssr!2srs"
								width="600"
								height="450"
								style={{ border: 0 }}
								allowFullScreen
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
							></iframe>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactPage;
