import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
	title: "Moliyaviy Yordamchi",
	description:
		"Asosiy moliyaviy savodxonlikdan foydalangan holda pullarini to'g'ri boshqarishni istaganlar uchun qulay va bepul dastur.",
	openGraph: {
		type: "website",
		url: "https://moliyaviy-yordamchi-website.vercel.app/",
		title: "Moliyaviy Yordamchi",
		description:
			"Asosiy moliyaviy savodxonlikdan foydalangan holda pullarini to'g'ri boshqarishni istaganlar uchun qulay va bepul dastur.",
		images: [
			{
				url: "/logo.png",
				width: 512,
				height: 512,
				alt: "moliyaviy yordamchi app logo",
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
