import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import React from "react";

export const Liner: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
	...props
}) => {
	const t = useTranslations("Liner");
	return (
		<section
			className={cn(
				"w-full overflow-hidden whitespace-nowrap",
				props.className,
			)}
		>
			<VelocityScroll
				className="text-black dark:text-white text-4xl"
				defaultVelocity={2}
			>
				{t("Text")}
			</VelocityScroll>
		</section>
	);
};
