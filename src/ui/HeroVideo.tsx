import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import { cn } from "@/lib/utils";
import React from "react";

export const HeroVideo: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
	...props
}) => {
	return (
		<section className={cn(props.className)}>
			<div className="relative">
				{/* Gradient background for light mode */}
				<div className="absolute inset-0 -z-10 dark:hidden">
					<div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-transparent to-blue-500/20 blur-3xl" />
					<div className="absolute inset-0 bg-gradient-to-t from-transparent via-purple-500/20 to-transparent blur-3xl" />
				</div>

				{/* Gradient background for dark mode */}
				<div className="absolute inset-0 -z-10 hidden dark:block">
					<div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-transparent to-blue-900/30 blur-3xl" />
					<div className="absolute inset-0 bg-gradient-to-t from-transparent via-purple-900/30 to-transparent blur-3xl" />
				</div>

				<HeroVideoDialog
					className="block relative z-10"
					animationStyle="top-in-bottom-out"
					// videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
					videoSrc="/promo.mp4"
					// thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
					thumbnailSrc="/promo-thumbnail.jpg"
					thumbnailAlt="Microboard Promo Video"
				/>
			</div>
		</section>
	);
};
