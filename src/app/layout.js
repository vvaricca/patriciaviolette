import { Lexend } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const roundedElegance = localFont({
	src: "../resources/fonts/rounded_elegance.ttf",
	variable: "--font-rounded-elegance",
});

const lexend = Lexend({
	variable: "--font-lexend",
	subsets: ["latin"],
});

export const metadata = {
	title: "Patricia Violette - Coach Bien-Etre",
	description:
		"Retrouvez votre équilibre grâce à mes méthodes alliant hypnose et rééquilibrage alimentaire",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${lexend.variable} ${roundedElegance.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
