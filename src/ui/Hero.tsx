"use client";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
// import { Meteors } from '@/components/ui/meteors';
import { RainbowLink } from "@/components/ui/rainbow-button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
// import { Pen } from 'lucide-react';
import React from "react";

export const Hero: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
	...props
}) => {
	const t = useTranslations("Hero");
	return (
		<section className={cn("text-center w-full", props.className)}>
			<HeroHighlight className="select-none pt-[30px] md:pt-[60px] lg:pt-[120px]">
				<motion.h1
					initial={{
						opacity: 0,
						y: 20,
					}}
					animate={{
						opacity: 1,
						y: [20, -5, 0],
					}}
					transition={{
						duration: 0.5,
						ease: [0.4, 0.0, 0.2, 1],
					}}
					className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
				>
					{t("Alive")} <br />
					{t("Smarter")} <Highlight>Microboard.io</Highlight> —{" "}
					{t("YourAI")}
				</motion.h1>
			</HeroHighlight>

			<RainbowLink
				href="https://app.microboard.io/"
				className="mb-8 mt-[48px]"
			>
				<div className="inline-flex items-center">
					<span>{t("PurchaseNow")}</span>
					<span className="ml-2">→</span>
				</div>
			</RainbowLink>
		</section>
	);
};
