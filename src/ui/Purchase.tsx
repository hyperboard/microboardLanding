import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import React from "react";

export const Purchase: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
	...props
}) => {
	const t = useTranslations("Purchase");
	return (
		<section className={cn("max-w-4xl text-center ", props.className)}>
			<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-black dark:text-white">
				{t("Conversation")}
				<br />
				{t("WithoutRepeating")}
			</h1>

			<p className="text-gray-400 sm:text-sm md:text-lg lg:text-xl mb-12 max-w-2xl mx-auto">
				{t("Desc")}
			</p>
		</section>
	);
};
