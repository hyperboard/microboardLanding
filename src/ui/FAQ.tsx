import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import React from "react";

export const FAQ: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
	...props
}) => {
	const t = useTranslations("FAQ");
	return (
		<section
			className={cn(
				" max-w-4xl w-full  px-4 sm:px-6 lg:px-8 scroll-mt-24",
				props.className,
			)}
			id="faq"
		>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
				<div className="sm:py-4">
					<h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-transparent bg-gradient-to-r from-zinc-700 to-zinc-900 bg-clip-text mb-4">
						FAQs
					</h2>
					<p className="text-zinc-600 dark:text-zinc-300 text-sm sm:text-base lg:text-lg">
						{t("title")}
					</p>
				</div>
				<Accordion
					type="single"
					collapsible
					className="w-full col-span-1 md:col-span-2 text-base sm:text-lg lg:text-xl text-black dark:text-white"
				>
					{[1, 2, 3, 4, 5].map(item => (
						<AccordionItem
							key={`item-${item}`}
							value={`item-${item}`}
						>
							<AccordionTrigger>
								{t(`question${item}`)}
							</AccordionTrigger>
							<AccordionContent>
								{t(`answer${item}`)}
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</section>
	);
};
