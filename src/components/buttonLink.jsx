import Link from "next/link";
import { ChevronRight2 } from "@deemlol/next-icons";

function ButtonLink({ href, titre, right }) {
	return (
		<div
			className={`flex align-middle ${right ? "justify-end" : ""} lg:text-lg`}
		>
			<Link
				href={href}
				className="flex flex-row align-middle hover:text-sable-sombre hover:bg-sombre-bleu border-2 border-sombre-bleu my-5 px-5"
				aria-label={titre}
			>
				<ChevronRight2 size={24} />
				{titre}
			</Link>
		</div>
	);
}

export default ButtonLink;
