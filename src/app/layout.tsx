import type { Metadata } from "next";
import { Geist, Geist_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { getMessages, setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const ibmPlexSans = IBM_Plex_Sans({
	weight: ["400", "500", "600", "700"],
	subsets: ["latin"],
	variable: "--font-ibm-plex-sans",
});

export const metadata: Metadata = {
	title: "Microboard",
	description: "A board for your curiosity",
	openGraph: {
		type: "website",
		title: "Microboard.io",
		description: "A board for your curiosity",
	},
};

export default async function RootLayout({
	children,
	// params,
}: Readonly<{
	children: React.ReactNode;
	// params: Promise<{ locale: "en" | "ru" }>;
}>) {
	// const locale = (await params).locale;
	// if (!routing.locales.includes(locale as "en" | "ru")) {
	// 	notFound();
	// }

	setRequestLocale("en");
	const messages = await getMessages();

	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${ibmPlexSans.variable} antialiased min-h-screen bg-white dark:bg-black`}
			>
				<ThemeProvider defaultTheme="system">
					<NextIntlClientProvider messages={messages}>
						{children}
					</NextIntlClientProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
