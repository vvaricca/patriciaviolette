import Header from "@/components/header";
import Contact from "@/pages/contact";
import Nutrition from "@/pages/prestations/nutrition";

export default function NutritionPage() {
	return (
		<div className="flex flex-col min-h-screen w-screen  font-lexend">
			<Header />
			<main className="flex flex-col ">
				<Nutrition />
				<Contact />
			</main>
		</div>
	);
}
