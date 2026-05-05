import "../app/globals.css";

import Header from "../components/header";

import Histoire from "@/pages/histoire";
import Prestations from "@/pages/prestations";
import Contact from "@/pages/contact";

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen min-w-screen font-lexend m-0 ">
			<Header />
			<main className="flex flex-col ">
				<Histoire />
				<Prestations />
				<Contact />
			</main>
		</div>
	);
}
