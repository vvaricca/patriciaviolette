import { ChevronRight2 } from "@deemlol/next-icons";
function Hypnose() {
	return (
		<div id="presentation" className="md:flex flex-col w-screen min-h-screen ">
			<div className="flex row justify-end text-sombre-bleu">
				<div className="mx-auto md:mr-10 p-3 mt-10 md:border-r-10  md:w-1/2 md:border-t-2">
					<h1 className="text-4xl font-rounded-elegance font-extrabold ">
						Coaching en nutrition
					</h1>
				</div>
			</div>
			<div className="md:flex flex-col w-screen min-h-screen">
				<div className="flex flex-col md:flex-row">
					<div className="md:w-1/2 flex justify-evenly mt-5">
						<img
							className="h-50 sm:h-60 lg:h-90"
							src="/images/nutrition.webp"
							alt="logo"
						></img>
					</div>
					<div className="md:mt-5 mb-2 mx-3 md:mx-5 md:w-1/2">
						<p className="mt-5 mr-7 mx-5 ">
							Une séance de coaching en nutrition est avant tout un moment
							d’écoute, d’échange et d’
							<strong className="text-sable-sombre">
								accompagnement personnalisé
							</strong>
							. L’objectif n’est pas de suivre un régime strict ou de se priver,
							mais de{" "}
							<strong className="text-sable-sombre">
								comprendre vos besoins
							</strong>
							, votre rythme de vie et vos habitudes afin de construire ensemble
							une alimentation équilibrée, réaliste et adaptée à vous.
							<br />
							<br /> À partir de ces échanges, je vous propose des pistes
							concrètes, simples et progressives :
						</p>
						<ul className="px-10">
							<li className="flex row">
								<ChevronRight2 size={24} className="text-sable-sombre" />
								réorganiser les repas{" "}
							</li>
							<li className="flex row">
								<ChevronRight2 size={24} className="text-sable-sombre" />
								comprendre les signaux du corps{" "}
							</li>
							<li className="flex row">
								<ChevronRight2 size={24} className="text-sable-sombre" />
								choisir des alternatives plus saines
							</li>
							<li className="flex row">
								<ChevronRight2 size={24} className="text-sable-sombre" />
								rééquilibrer les portions
							</li>
							<li className="flex row">
								<ChevronRight2 size={24} className="text-sable-sombre" />
								instaurer des routines alimentaires réalistes
							</li>
							<li className="flex row">
								<ChevronRight2 size={24} className="text-sable-sombre" />
								mieux gérer les envies et les émotions
							</li>
						</ul>
						<p>
							<br />
							<br /> Le but n’est pas de bouleverser votre vie, mais d’
							<strong className="text-sable-sombre">
								intégrer des changements durables
							</strong>
							, étape par étape, en respectant votre rythme.
							<br />
							Vous repartez avec une vision plus claire, des{" "}
							<strong className="text-sable-sombre">
								conseils personnalisés
							</strong>{" "}
							et des{" "}
							<strong className="text-sable-sombre">outils pratiques</strong>{" "}
							pour avancer sereinement vers vos objectifs. Chaque séance est un
							soutien, un encouragement et un pas de plus vers une relation
							apaisée, équilibrée et positive avec votre alimentation… et avec
							vous-même.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hypnose;
