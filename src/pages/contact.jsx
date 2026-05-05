import { Phone } from "@deemlol/next-icons";
import { Mail } from "@deemlol/next-icons";

function Evenement() {
	return (
		<div
			id="planning"
			className="md:flex flex-col h-120 bg-sombre-bleu text-falaise-clair"
		>
			<div className="text-center mx-auto py-3 px-5 mt-10 border-y-2 border-sable-sombre">
				<h1 className="text-4xl font-rounded-elegance font-extrabold ">
					ME CONTACTER
				</h1>
			</div>
			<div className="flex justify-evenly mt-10 px-2">
				<p>
					<a
						href="mailto:patricia.violette1@orange.fr"
						className="text-sable-sombre font-bold"
					>
						Prenez contact avec moi
					</a>{" "}
					pour établir un premier bilan et définir ensemble vos objectifs.
				</p>
			</div>

			<div className="flex flex-col md:flex-row items-center justify-evenly">
				<div>
					<h1 className="hidden md:block md:text-2xl text-center p-5">
						Par Mail
					</h1>
					<Mail className="mx-auto mt-2" size={30} />
					<p className="italic text-center p-5 text-lg">
						patricia.violette1@orange.fr
					</p>
				</div>
				<div>
					<h1 className="hidden md:block md:text-2xl text-center p-5">
						Par Téléphone
					</h1>
					<Phone className="mx-auto mt-2" size={30} />
					<p className="italic text-center  p-5 text-lg">06 47 83 88 76</p>
				</div>
			</div>
		</div>
	);
}

export default Evenement;
