import Link from "next/link";

function Menu() {
	return (
		<div
			id="menunav"
			className="hidden md:flex w-1/3 justify-center items-center text-center gap-8 lg:text-lg"
		>
			<Link
				href="/#presentation"
				className="hover:text-sable-sombre"
				aria-label="Mon histoire"
			>
				QUI SUIS-JE ?
			</Link>
			<Link
				href="/#accompagnements"
				className="hover:text-sable-sombre"
				aria-label="Mes accompagnements"
			>
				MES PRESTATIONS
			</Link>
		</div>
	);
}

export default Menu;
