import { FlipWords } from "@/components/ui/flip-words";
import React from "react";
import { useTranslations } from "next-intl";

export const Flipper = () => {
	const words = ["better", "cute", "beautiful", "modern"];
	const t = useTranslations();

	return (
		<div className="h-[300px] flex justify-center items-center px-4">
			<div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
				{/* Build */}
				{t("build")}
				<FlipWords duration={3000} words={words} /> <br />
				websites with Microboard.io
			</div>
		</div>
	);
};
