import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
	title: "HarmoniaVita",
	description:
		"Stručna podrška za rast i razvoj, za promenu, zdravije, odnose i ispunjen život.",
	icons: {
		icon: "/HarmoniaVitaLogo.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="sr">
			<body className="antialiased">
				<Header />
				<main className="min-h-screen">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
