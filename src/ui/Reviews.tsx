import Marquee from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image, { type StaticImageData } from "next/image";
import AshleyImg from "@/images/Ashley.webp";
import BrandonImg from "@/images/Brandon.webp";
import DanielImg from "@/images/Daniel.webp";
import EmilyImg from "@/images/Emily.webp";
import JessicaImg from "@/images/Jessica.webp";
import KarenImg from "@/images/Karen.webp";
import MikeImg from "@/images/Mike.webp";
import RyanImg from "@/images/Ryan.webp";

export const ReviewCard = ({
	img,
	name,
	username,
	body,
}: {
	img: StaticImageData;
	name: string;
	username: string;
	body: string;
}) => {
	return (
		<figure
			className={cn(
				"relative cursor-pointer overflow-hidden rounded-xl border p-4",
				// Base width for mobile
				"w-48 sm:w-56 md:w-60 lg:w-64",
				// light styles
				"border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
				// dark styles
				"dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
			)}
		>
			<div className="flex flex-row items-center gap-2">
				<Image
					className="rounded-full w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
					alt={name}
					src={img}
					placeholder="blur"
					width={64}
					height={63}
					sizes="(min-width: 1024px) 48px, (min-width: 768px) 40px, (min-width: 640px) 32px, 24px"
				/>
				<div className="flex flex-col">
					<figcaption className="text-xs sm:text-sm md:text-base lg:text-lg font-medium dark:text-white">
						{name}
					</figcaption>
					<p className="text-xs font-medium dark:text-white/40">
						{username}
					</p>
				</div>
			</div>
			<blockquote className="mt-2 text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400">
				{body}
			</blockquote>
		</figure>
	);
};

export const Reviews: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
	...props
}) => {
	const t = useTranslations("Reviews");

	const reviews = [
		{
			name: t("1.name"),
			username: t("1.profession"),
			body: t("1.body"),
			img: MikeImg,
		},
		{
			name: t("2.name"),
			username: t("2.profession"),
			body: t("2.body"),
			img: JessicaImg,
		},
		{
			name: t("3.name"),
			username: t("3.profession"),
			body: t("3.body"),
			img: RyanImg,
		},
		{
			name: t("4.name"),
			username: t("4.profession"),
			body: t("4.body"),
			img: AshleyImg,
		},
		{
			name: t("5.name"),
			username: t("5.profession"),
			body: t("5.body"),
			img: BrandonImg,
		},
		{
			name: t("6.name"),
			username: t("6.profession"),
			body: t("6.body"),
			img: EmilyImg,
		},
		{
			name: t("7.name"),
			username: t("7.profession"),
			body: t("7.body"),
			img: DanielImg,
		},
		{
			name: t("8.name"),
			username: t("8.profession"),
			body: t("8.body"),
			img: KarenImg,
		},
	];

	const firstRow = reviews.slice(0, reviews.length / 2);
	const secondRow = reviews.slice(reviews.length / 2);
	return (
		<section
			className={cn("w-full flex items-center flex-col", props.className)}
		>
			<div className="w-full sm:w-full md:w-full lg:w-[920px] relative flex h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px] flex-col items-center justify-center overflow-hidden sm:overflow-hidden md:overflow-hidden rounded-none md:px-[8px] md:rounded-lg border bg-background shadow-sm sm:shadow-md md:shadow-lg lg:shadow-xl border-zinc-500/25 dark:border-zinc-50/25">
				<Marquee pauseOnHover className="[--duration:20s]">
					{firstRow.map(review => (
						<ReviewCard key={review.username} {...review} />
					))}
				</Marquee>
				<Marquee reverse pauseOnHover className="[--duration:20s]">
					{secondRow.map(review => (
						<ReviewCard key={review.username} {...review} />
					))}
				</Marquee>
				<div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 sm:w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
				<div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 sm:w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
			</div>
		</section>
	);
};

export default Reviews;
