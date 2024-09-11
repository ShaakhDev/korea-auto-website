import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
	title: "Korea Auto",
	description:
		"Easily buy or sell cars in South Korea! Browse listings, connect with sellers, and enjoy full app support in 5 languages.",
	openGraph: {
		type: "website",
		url: "https://korea-auto-website.vercel.app/",
		title: "Korea Auto",
		description:
			"Easily buy or sell cars in South Korea! Browse listings, connect with sellers, and enjoy full app support in 5 languages.",
		images: [
			{
				url: "/logo.png",
				width: 512,
				height: 512,
				alt: "Korea Auto app logo",
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
