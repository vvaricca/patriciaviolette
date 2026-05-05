import { ChevronRight2 } from "@deemlol/next-icons";
function Concept() {
	return (
		<div id="presentation" className="md:flex flex-col w-screen min-h-screen ">
			<div className="hidden md:flex row justify-end text-sombre-bleu">
				<div className="mr-10 p-3 mt-10 border-r-10  w-1/2 border-t-2">
					<h1 className="text-4xl font-rounded-elegance font-extrabold ">
						MON PARCOURS
					</h1>
				</div>
			</div>
			<div className="md:flex flex-col w-screen min-h-screen">
				<div className="flex">
					<div className="w-1/2 hidden md:flex justify-evenly mt-5">
						<img
							className="h-30 sm:h-60 lg:h-90"
							src="./images/logo.webp"
							alt="logo"
						></img>
					</div>
					<div className="md:mt-5 md:w-1/2">
						<p className="mt-5 mx-2 md:mr-7">
							Je m’appelle Patricia VIOLETTE, originaire de{" "}
							<strong className="text-sable-sombre">Torigni-sur-Vire</strong>,
							dans la Manche, où je suis née un{" "}
							<strong className="text-sable-sombre">24 mars 1973</strong>.
							Depuis plus de treize ans, je suis{" "}
							<strong className="text-sable-sombre">
								responsable administrative
							</strong>{" "}
							dans l’entreprise d’électricité que nous avons créé mon mari et
							moi. Avec les années, j’ai pris conscience qu’il me manquait une
							part d’humain dans mon quotidien, j’ai ressenti le besoin de
							<strong className="text-sable-sombre">
								donner plus de sens à mon parcours
							</strong>{" "}
							et d’explorer cette envie d’aider mon prochain.
							<br />
							<br />
							Depuis mon enfance, je ressens les énergies qui nous entourent. En
							2023, j’ai choisi de les approfondir à travers une{" "}
							<strong className="text-sable-sombre">
								formation en magnétisme à l’Académie d’Orion
							</strong>{" "}
							, qui m’a permis de mieux comprendre et canaliser ce don.
							<br />
							En 2024, j’ai poursuivi mon cheminement avec une{" "}
							<strong className="text-sable-sombre">
								formation en hypnose
							</strong>
							, puis en 2025, avec une{" "}
							<strong className="text-sable-sombre">
								formation de coach en nutrition
							</strong>
							. Ces trois approches — le{" "}
							<strong className="text-sable-sombre">magnétisme</strong>, l’
							<strong className="text-sable-sombre">hypnose</strong> et la
							<strong className="text-sable-sombre">nutrition</strong> — se
							complètent naturellement pour accompagner chaque personne de
							manière globale, en agissant sur{" "}
							<strong className="text-sable-sombre">
								le corps, l’esprit et l’énergie.
							</strong>
							<br />
							<br />
							Je souhaite aujourd’hui, en parallèle de mon activité
							professionnelle actuelle, mettre ces compétences au service de
							celles et ceux qui souhaitent :
						</p>
						<ul className="px-10">
							<li className="flex row">
								<ChevronRight2 size={24} className="text-sable-sombre" />
								Retrouver leur équilibre
							</li>
							<li className="flex row">
								<ChevronRight2 size={24} className="text-sable-sombre" />
								Gérer leur poids et leur santé de manière durable
							</li>
							<li className="flex row">
								<ChevronRight2 size={24} className="text-sable-sombre" />
								Retrouver confiance, sérénité et harmonie intérieure
							</li>
						</ul>
						<p className="hidden md:block mt-5 mx-2 md:mr-7">
							Mon objectif est d’aider à{" "}
							<strong className="text-sable-sombre">
								reprendre le contrôle de son bien-être
							</strong>
							, à se reconnecter à soi-même et à vivre en pleine conscience,
							avec respect et bienveillance envers son corps et son esprit.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Concept;
