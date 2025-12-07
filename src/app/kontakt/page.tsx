"use client";
import React, { Suspense } from "react";
import ContactForm from "@/components/ContactForm";

const ContactPage: React.FC = () => {
	return (
		<div className="min-h-screen pt-[120px] sm:pt-[100px] lg:pt-[120px] py-6 sm:py-8 lg:py-12 px-4 bg-gradient-to-br from-hv-green/40 to-hv-beige-6">
			<div className="max-w-[1200px] mx-auto">
				<div className="text-center mb-6 sm:mb-8">
					<h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-hv-green font-beau mb-2 sm:mb-3">
						Kontaktirajte Nas
					</h1>
					<p className="text-base sm:text-lg text-white">
						Pošaljite nam poruku i javićemo Vam se uskoro
					</p>
				</div>

				<div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
					<Suspense
						fallback={
							<div className="bg-white rounded-xl lg:rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8">
								<div className="animate-pulse space-y-4">
									<div className="h-12 bg-slate-200 rounded"></div>
									<div className="h-12 bg-slate-200 rounded"></div>
									<div className="h-32 bg-slate-200 rounded"></div>
								</div>
							</div>
						}
					>
						<ContactForm />
					</Suspense>

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
