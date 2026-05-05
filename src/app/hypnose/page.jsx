import Header from "@/components/header";
import Contact from "@/pages/contact";
import Hypnose from "@/pages/prestations/hypnose";

export default function HypnosePage() {
	return (
		<div className="flex flex-col min-h-screen w-screen  font-lexend">
			<Header />
			<main className="flex flex-col ">
				<Hypnose />
				<Contact />
			</main>
		</div>
	);
}
