import Particles from "@/components/ui/particles";
import ShimmerButton from "@/components/ui/shimmer-button";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export const Footer: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
	...props
}) => {
	const t = useTranslations("Footer");
	return (
		<footer
			className={cn(
				"relative w-full min-h-[200px] sm:min-h-[250px] md:min-h-[300px] border-t-[2px] border-gray-500 dark:border-transparent bg-black",
				props.className,
			)}
		>
			<Particles
				className="absolute inset-0 z-0"
				quantity={100}
				ease={80}
				refresh
			/>

			<div className="relative z-10 container mx-auto px-3 sm:px-4 py-8 sm:py-10 md:py-12 pt-12 sm:pt-14 md:pt-16">
				<div className="flex flex-col items-center justify-center space-y-4 sm:space-y-5 md:space-y-6">
					<ShimmerButton
						href="https://app.microboard.io/"
						className="text-base sm:text-md md:text-lg font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-full hover:bg-white/90 text-white dark:text-white"
					>
						{t("Curiosity")} →
					</ShimmerButton>

					{/* <p className="text-white text-xs sm:text-sm"> */}
					{/* 	{t("Slogan")} */}
					{/* </p> */}
				</div>

				<div className="mt-16 sm:mt-20 md:mt-24 flex flex-col md:flex-row items-center justify-between text-xs sm:text-sm text-white">
					<div className="flex flex-col sm:flex-row items-center sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
						<div className="flex items-center space-x-2">
							<Image
								src="/favicon.ico"
								width={16}
								height={16}
								alt={"Microboard"}
							/>
							<span>Microboard</span>
						</div>
						<span className="text-center sm:text-left text-xs sm:text-sm">
							Curly&apos;s technology Tmi FI31760109
							Mechelininkatu 45 A 8, 00250 Helsinki
						</span>
					</div>

					<div className="flex flex-wrap justify-center md:justify-end items-center gap-4 sm:gap-6 mt-4 md:mt-0">
						<a
							href="/pdf/terms_conditions_en.pdf"
							target="_blank"
							className="hover:text-zinc-500 transition-colors"
						>
							{t("Terms")}
						</a>
						<a
							href="/pdf/privacy_policy_en.pdf"
							target="_blank"
							className="hover:text-zinc-500 transition-colors"
						>
							{t("Privacy")}
						</a>
						<a
							href="mailto:ceo@microboard.io"
							className="hover:text-zinc-500 transition-colors"
						>
							{t("Support")}
						</a>
						<a
							href="https://docs.microboard.io/"
							className="hover:text-zinc-500 transition-colors"
						>
							{t("Guide")} ↗
						</a>
						<button className="hover:text-zinc-500 transition-colors">
							🌙
						</button>
					</div>
				</div>
			</div>
		</footer>
	);
};
