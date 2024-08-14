import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import BackButton from "@/components/back-button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Next.js TIL",
	description: "Today I Learn",
};

const RootLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<html lang="en">
			<body className={inter.className}>
				<BackButton />
				{children}
				<Toaster />
			</body>
		</html>
	);
};

export default RootLayout;
