import Header from "@/components/header";
import Contact from "@/pages/contact";
import Magnetisme from "@/pages/prestations/magnetisme";

export default function MagnetismePage() {
	return (
		<div className="flex flex-col min-h-screen w-screen  font-lexend">
			<Header />
			<main className="flex flex-col ">
				<Magnetisme />
				<Contact />
			</main>
		</div>
	);
}
