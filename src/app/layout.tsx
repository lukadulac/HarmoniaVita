import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
	title: {
		default: "HarmonijaVita - Stručna podrška za rast i razvoj",
		template: "%s | HarmonijaVita",
	},
	description:
		"Stručna podrška za rast i razvoj, za promenu, zdravije odnose i ispunjen život. Profesionalno psihološko savetovanje i terapija.",
	keywords: [
		"psiholog",
		"psihoterapeut Subotica",
		"psihoterapija Subotica",
		"individualna psihoterapija",
		"psihoterapija parova",
		"partnerska terapija",
		"porodična terapija",
		"savetovanje mladih",
		"saveti za roditelje",
		"online psihoterapija",
	],
	authors: [{ name: "HarmonijaVita" }],
	creator: "HarmonijaVita",
	publisher: "HarmonijaVita",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	metadataBase: new URL("https://www.harmonijavita.com/"), 
	alternates: {
		canonical: "/",
	},
	openGraph: {
		title: "HarmonijaVita - Stručna podrška za rast i razvoj",
		description:
			"Stručna podrška za rast i razvoj, za promenu, zdravije odnose i ispunjen život.",
		url: "https://www.harmonijavita.com/",
		siteName: "HarmonijaVita",
		locale: "sr_RS",
		type: "website",
		images: [
			{
				url: "/HarmoniaVitaLogo.png",
				width: 1200,
				height: 630,
				alt: "HarmonijaVita",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "HarmoniaVita - Stručna podrška za rast i razvoj",
		description:
			"Stručna podrška za rast i razvoj, za promenu, zdravije odnose i ispunjen život.",
		images: ["/HarmoniaVitaLogo.png"],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	icons: {
		icon: "/HarmoniaVitaLogo.png",
		shortcut: "/HarmoniaVitaLogo.png",
		apple: "/HarmoniaVitaLogo.png",
	},
	verification: {
		google: "google-site-verification: google0a45e00c7dd66d4e.html", 
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="sr">
			<head>
				<link rel="canonical" href="https://www.harmonijavita.com/" />
			</head>
			<body className="antialiased">
				<GoogleAnalytics />
				<Header />
				<main className="min-h-screen">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
