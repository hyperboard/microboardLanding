import React from "react";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

const Feature = ({
	title,
	description,
	index,
	subFeatures,
}: {
	title: string;
	description: string;
	index: number;
	subFeatures?: string[];
}) => {
	return (
		<div
			className={cn(
				"flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800 first-of-type:border-l-0 last-of-type:border-r-0",
				(index === 0 || index === 4) &&
					"lg:border-l dark:border-neutral-800",
				index < 4 && "dark:border-neutral-800",
			)}
		>
			<div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
			{/* <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">{icon}</div> */}
			<div className="text-lg font-bold mb-2 relative z-10 px-10">
				<div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
				<span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
					{title}
				</span>
			</div>
			<p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10 mb-4">
				{description}
			</p>
			{subFeatures && (
				<ul className="text-sm text-neutral-600 dark:text-neutral-400 relative z-10 px-10 space-y-2">
					{subFeatures.map((feature, i) => (
						<li key={i} className="flex items-center gap-2">
							<div className="w-1 h-1 bg-blue-500 rounded-full" />
							{feature}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export const Features: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
	...props
}) => {
	const t = useTranslations("Features");

	const features = [
		{
			title: t("UnlimitedFreeCollaboration.title"),
			description: t("UnlimitedFreeCollaboration.description"),
			// icon: <IconUsers className="w-6 h-6" />,
		},
		{
			title: t("LimitedTimeOffer.title"),
			description: t("LimitedTimeOffer.description"),
			// icon: <IconInfinity className="w-6 h-6" />,
		},
		{
			title: t("EasyMigration.title"),
			description: t("EasyMigration.description"),
			// icon: <IconCopy className="w-6 h-6" />,
		},
		{
			title: t("FutureProofPlatform.title"),
			description: t("FutureProofPlatform.description"),
			// icon: <IconRocket className="w-6 h-6" />,
			subFeatures: [
				t("FutureProofPlatform.subFeatures.OpenFileFormat"),
				t("FutureProofPlatform.subFeatures.OfflineCapabilities"),
				t("FutureProofPlatform.subFeatures.APIIntegrations"),
				t("FutureProofPlatform.subFeatures.BYOAI"),
			],
		},
	];

	return (
		<section
			className={cn(
				"relative dark:border-neutral-800 rounded-none w-full sm:w-auto sm:rounded-[16px] border overflow-hidden",
				props.className,
			)}
		>
			{/* Decorative background elements */}
			<div className="absolute inset-0 -z-10">
				<div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-950/30 dark:to-transparent" />
				<div className="absolute w-full md:w-[500px] md:h-[500px] -top-40 left-1/2 -translate-x-1/2 bg-blue-100 dark:bg-blue-950/50 rounded-full blur-3xl opacity-30" />
			</div>

			{/* Header Section */}
			<div className="text-center max-w-3xl mx-auto mb-16 pt-20">
				<div className="flex items-center justify-center gap-2 mb-6">
					<Sparkles className="w-5 h-5 text-blue-500" />
					<span className="text-sm font-medium text-blue-500 uppercase tracking-wider">
						{t("Header.tagline")}
					</span>
					<Sparkles className="w-5 h-5 text-blue-500" />
				</div>
				<h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neutral-800 to-neutral-600 dark:from-neutral-100 dark:to-neutral-400">
					{t("Header.title")}
				</h2>
				<p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto">
					{t("Header.description")}
				</p>
			</div>

			{/* Features Grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 pt-10 max-w-7xl mx-auto">
				{features.map((feature, index) => (
					<Feature key={feature.title} {...feature} index={index} />
				))}
			</div>
		</section>
	);
};
