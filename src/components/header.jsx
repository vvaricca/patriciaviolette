import Menu from "./menu";
import { Phone } from "@deemlol/next-icons";
import { Mail } from "@deemlol/next-icons";

function Header() {
	const MenuMobile = () => {
		return (
			<div className="flex flex-col fixed top-0 py-2 bg-darkbackground md:hidden h-full w-3/4 px-3 z-50">
				<ul className="divide-y divide-opacity-10 text-xl space-y-3 mt-4">
					<li
						className="hover:underline pt-2"
						onClick={() => {
							setShowMenu((prev) => !prev);
						}}
					>
						<a
							href="/matchs"
							aria-label="Calendrier et résultats des matchs de la Team France"
						>
							Calendrier
						</a>
					</li>
					<li
						className="hover:underline pt-2"
						onClick={() => {
							setShowMenu((prev) => !prev);
						}}
					>
						<a href="/shop" aria-label="Obtenir le Kit du supporter">
							Kit du supporter
						</a>
					</li>
				</ul>
				<ul className="flex gap-6 mt-auto mb-4">
					<li>
						<a
							href="https://www.instagram.com/avecle6"
							rel="noreferrer"
							target="_blank"
							className=" transition hover:opacity-75"
							aria-label="Suivez nous sur Instagram"
						>
							<Instagram size={30} color="#FFFFFF" />
						</a>
					</li>
					<li>
						<a
							href="https://www.facebook.com/avecle6"
							rel="noreferrer"
							target="_blank"
							className=" transition hover:opacity-75"
							aria-label="Suivez nous sur Facebook"
						>
							<Facebook size={30} color="#FFFFFF" />
						</a>
					</li>
				</ul>
			</div>
		);
	};

	return (
		<>
			<div
				id="header"
				className="flex md:justify-between md:items-center py-4 px-6 bg-sombre-bleu text-white"
			>
				<Menu />
				<div className="lg:ml-2 md:w-1/3 px-3 py-5 flex flex-col justify-center">
					<h1 className="text-center text-3xl md:text-5xl">
						PATRICIA VIOLETTE
					</h1>
					<h2 className="text-center text-lg md:text-3xl">Coach Bien-être</h2>
				</div>
				<ul className="hidden md:flex justify-end w-1/3 gap-2 lg:gap-3 mr-2 text-falaise-clair">
					<li>
						<a
							href="mail:patricia.violette1@orange.fr"
							rel="noreferrer"
							target="_blank"
							className=" transition hover:opacity-75"
							aria-label="Contactez moi par mail"
						>
							<Mail size={30} />
						</a>
					</li>
					<li>
						<a
							href="tel:0647838876"
							rel="noreferrer"
							target="_blank"
							className=" transition hover:opacity-75"
							aria-label="Contactez moi par téléphone"
						>
							<Phone size={30} />
						</a>
					</li>
				</ul>
			</div>
			{/* {showMenu && <MenuMobile />} */}
		</>
	);
}

export default Header;
