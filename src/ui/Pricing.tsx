import { Link } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { useTranslations } from "next-intl";

export const Pricing: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
	...props
}) => {
	const t = useTranslations("Pricing");
	const plans = [
		{
			id: "basic",
			name: t("Basic.title"),
			price: t("Free"),
			features: [
				t("Basic.features.f1"),
				t("Basic.features.f2"),
				t("Basic.features.f3"),
				t("Basic.features.f4"),
			],
		},
		{
			id: "plus",
			name: t("Plus.title"),
			price: "$12",
			features: [
				t("Plus.features.f1"),
				t("Plus.features.f2"),
				t("Plus.features.f3"),
				t("Plus.features.f4"),
				t("Plus.features.f5"),
				t("Plus.features.f6"),
				t("Plus.features.f7"),
			],
		},
		{
			id: "custom",
			name: t("Custom.title"),
			price: t("Custom.price"),
			features: [
				t("Custom.features.f1"),
				t("Custom.features.f2"),
				t("Custom.features.f3"),
				t("Custom.features.f4"),
			],
		},
	];
	return (
		<section
			className={cn("container  max-w-6xl scroll-mt-4 ", props.className)}
			id="pricing"
		>
			<div className="flex flex-col items-center space-y-10 text-center">
				<div className="space-y-2">
					<h1 className="text-4xl font-bold tracking-tighter lg:text-5xl/none text-black dark:text-white">
						{t("Flexible")}
					</h1>
					<p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl text-zinc-500 dark:text-zinc-400">
						{t("ForEveryone")}
						<br />
						{t("ChoosePlan")}
					</p>
				</div>
			</div>
			<div className="mt-8 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
				{plans.map(plan => (
					<div
						key={plan.name}
						className="bg-card-background border rounded-lg shadow-sm divide-y divide-border dark:border-zinc-800 dark:divide-zinc-800"
					>
						<div className="p-6">
							<h3 className="text-lg leading-6 font-medium text-black dark:text-white">
								{plan.name}
							</h3>
							<p className="mt-8">
								<span className="text-4xl font-extrabold text-foreground text-black dark:text-white">
									{plan.price}
								</span>
								{plan.id === "plus" && (
									<span className="text-base font-medium text-zinc-500">
										/mo
									</span>
								)}
							</p>
							<Link
								href={
									plan.id === "custom"
										? "mailto:ceo@microboard.io"
										: "https://app.microboard.io/"
								}
								className="mt-8 block w-full text-center"
							>
								{plan.id === "custom"
									? t("ContactUs")
									: t("GetStarted")}
							</Link>
						</div>
						<div className="pt-6 pb-8 px-6">
							<h4 className="text-sm font-medium text-foreground tracking-wide uppercase text-black dark:text-white">
								{t("Included")}
							</h4>
							<ul className="mt-6 space-y-4">
								{plan.features.map(feature => (
									<li
										key={feature}
										className="flex space-x-3"
									>
										<Check
											className="flex-shrink-0 h-5 w-5 text-green-500 dark:text-green-400"
											aria-hidden="true"
										/>
										<span className="text-sm text-zinc-500 dark:text-zinc-50">
											{feature}
										</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};
