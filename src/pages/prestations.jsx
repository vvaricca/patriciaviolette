import { ChevronRight2 } from "@deemlol/next-icons";
import ButtonLink from "@/components/buttonLink";
function Carte() {
	return (
		<div
			id="accompagnements"
			className="md:flex flex-col w-screen min-h-screen bg-[url(/images/rock_bg.jpg)] "
		>
			<div className="text-center mx-auto py-3 px-5 mt-10 border-x-10 border-sable-sombre ">
				<h1 className="text-2xl md:text-4xl font-rounded-elegance font-extrabold text-sombre-bleu">
					MES ACCOMPAGNEMENTS
				</h1>
			</div>
			<div className="md:flex w-screen">
				<div className="text-center mx-auto">
					<p className="hidden md:block w-1/2 my-5 mx-auto">
						Je propose des séances personnalisées pour vous aider à retrouver{" "}
						<strong className="text-sable-sombre">
							équilibre, sérénité et bien-être
						</strong>
						, en agissant sur le corps, l’esprit et l’énergie. Selon vos
						besoins, je peux utiliser{" "}
						<strong className="text-sable-sombre">
							le magnétisme, l’hypnose ou le coaching en nutrition
						</strong>
						, et parfois combiner ces approches pour un accompagnement encore
						plus efficace.
					</p>
				</div>
			</div>
			<div className="md:flex flex-col w-screen ">
				<div className="flex flex-col md:flex-row">
					<div className="md:w-1/2 flex justify-evenly mt-5 ">
						<img
							className="m-auto h-50 sm:h-60 lg:h-90"
							src="./images/magnetisme.webp"
							alt="magnetisme"
						></img>
					</div>
					<div className="mx-5 pb-2 mt-5 md:w-1/2 ">
						<h1 className="text-center text-2xl font-bold mt-10  font-rounded-elegance capitalize text-sombre-bleu">
							MAGNETISME
						</h1>
						<p className="mt-5 mr-7">
							Le magnétisme agit sur les{" "}
							<strong className="text-sable-sombre">énergies du corps</strong>{" "}
							pour favoriser le bien-être et l’harmonie intérieure. <br />
							<br />
							Je propose des séances de{" "}
							<strong className="text-sable-sombre text-lg">30 €</strong> pour :
						</p>
						<ul className="px-10">
							<li className="flex row">
								<ChevronRight2 size={24} className="text-sable-sombre" />
								Soulager les douleurs physiques
							</li>
							<li className="flex row">
								<ChevronRight2 size={24} className="text-sable-sombre" />
								Réduire le stress et les tensions
							</li>
							<li className="flex row">
								<ChevronRight2 size={24} className="text-sable-sombre" />
								Profiter d’une séance simplement relaxante et bien-être
							</li>
						</ul>
						<br />
						<p>
							Ces séances sont adaptées à vos besoins du moment et peuvent être
							ponctuelles ou régulières selon votre ressenti.
						</p>
						<ButtonLink
							href="/magnetisme"
							titre="Les détails de mon approche"
							right={true}
						/>
					</div>
				</div>
			</div>
			<div className="md:flex flex-col w-screen ">
				<div className="flex flex-col md:flex-row">
					<div className="mx-2 px-2 pb-2 md:w-1/2 md:border-l-2 md:border-t-10 border-sable-sombre">
						<div className="md:hidden flex justify-evenly mt-5">
							<img
								className="h-50 sm:h-60 lg:h-90"
								src="./images/hypnose.webp"
								alt="hypnose"
							></img>
						</div>
						<h1 className="text-center text-2xl font-bold mt-10  font-rounded-elegance capitalize text-sombre-bleu">
							HYPNOSE
						</h1>
						<p className="mt-5 mr-7">
							L’hypnose est une technique douce et puissante pour{" "}
							<strong className="text-sable-sombre">
								changer des comportements
							</strong>
							,{" "}
							<strong className="text-sable-sombre">
								retrouver confiance en soi
							</strong>{" "}
							ou{" "}
							<strong className="text-sable-sombre">
								atteindre vos objectifs de santé
							</strong>
							. <br />
							<br />
							Je propose des séances de{" "}
							<strong className="text-sable-sombre text-lg">50 €</strong> pour :
						</p>
						<ul className="px-10">
							<li className="flex row">
								<ChevronRight2 size={24} className="text-sable-sombre" />
								Arrêt du tabac,
							</li>
							<li className="flex row">
								<ChevronRight2 size={24} className="text-sable-sombre" />
								Confiance en soi et estime personnelle,
							</li>
							<li className="flex row">
								<ChevronRight2 size={24} className="text-sable-sombre" />
								Perte de poids, notamment grâce à la technique de l’anneau
								gastrique virtuel.
							</li>
						</ul>
						<br />
						<p>
							Chaque séance est personnalisée, et je vous accompagne dans un
							cadre bienveillant et sécurisant.
						</p>
						<ButtonLink
							href="/hypnose"
							titre="En savoir plus sur l'hypnose thérapeutique"
							right={false}
						/>
					</div>
					<div className="w-1/2 hidden md:flex justify-evenly mt-5">
						<img
							className="h-50 sm:h-60 lg:h-90"
							src="./images/hypnose.webp"
							alt="hypnose"
						></img>
					</div>
				</div>
			</div>
			<div className="md:flex flex-col w-screen ">
				<div className="flex flex-col md:flex-row">
					<div className="md:w-1/2 flex justify-evenly mt-5">
						<img
							className="h-50 sm:h-60 lg:h-90"
							src="./images/nutrition.webp"
							alt="nutrition"
						></img>
					</div>
					<div className="px-5 pb-2 md:w-1/2 ">
						<h1 className="text-center text-2xl font-bold mt-10  font-rounded-elegance capitalize text-sombre-bleu">
							COACHING EN NUTRITION
						</h1>
						<p className="mt-5 mr-7 ">
							Le coaching en nutrition vous aide à retrouver{" "}
							<strong className="text-sable-sombre">
								une alimentation équilibrée
							</strong>{" "}
							et adaptée à votre corps, vos goûts et vos objectifs. <br />
							<br />
							Je propose la première séance à{" "}
							<strong className="text-sable-sombre text-lg">50€</strong> et les
							suivantes à{" "}
							<strong className="text-sable-sombre text-lg">30€</strong>.
							<br />
							Les accompagnements peuvent aller :
						</p>
						<ul className="px-10">
							<li className="flex row">
								<ChevronRight2 size={24} className="text-sable-sombre" />
								Du simple rééquilibrage alimentaire,
							</li>
							<li className="flex row">
								<ChevronRight2 size={24} className="text-sable-sombre" />
								Jusqu’au suivi nutritionnel complet, pour atteindre vos
								objectifs de poids ou de santé,
							</li>
						</ul>
						<br />
						<p>
							Chaque séance est personnalisée, et je vous accompagne dans un
							cadre bienveillant et sécurisant.
						</p>
						<ButtonLink
							href="/nutrition"
							titre="Découvrez mon programme"
							right={true}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Carte;
