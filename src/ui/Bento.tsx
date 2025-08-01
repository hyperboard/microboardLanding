import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import {
	// Share2Icon,
	Shield,
	Globe,
	Clock,
	Database,
	Paintbrush,
	Users,
} from "lucide-react";
import React from "react";
// import { AnimatedBeamGroup } from './AnimatedBeamGroup';
import GridPattern from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

// const files = [
// 	{
// 		name: "bitcoin.pdf",
// 		body: "Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.",
// 	},
// 	{
// 		name: "finances.xlsx",
// 		body: "A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data.",
// 	},
// 	{
// 		name: "logo.svg",
// 		body: "Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation.",
// 	},
// 	{
// 		name: "keys.gpg",
// 		body: "GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages.",
// 	},
// 	{
// 		name: "seed.txt",
// 		body: "A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain.",
// 	},
// 	{
// 		name: "passwords.txt",
// 		body: "A password is a string of characters that is used to access a computer system, service, or application.",
// 	},
// 	{
// 		name: "wallet.dat",
// 		body: "A wallet is a digital storage device that stores private keys and other data related to an account.",
// 	},
// 	{
// 		name: "cat.png",
// 		body: "A cat is a small carnivorous mammal with soft fur, a short, rounded head, two sets of sharp teeth, and a long tail.",
// 	},
// 	{
// 		name: "book.pdf",
// 		body: "A PDF is a digital document format for storing and displaying documents that are intended to be read and printed on paper.",
// 	},
// ];

export const Bento: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
	...props
}) => {
	const t = useTranslations("Bento");

	const features = [
		{
			Icon: Users,
			name: t("CollabTitle"),
			description: t("CollabDesc"),
			// href: "/team-collaboration",
			cta: t("CollabCta"),
			className: "lg:row-span-3 lg:col-span-2 md:row-span-2 row-span-2",
			background: null,
		},
		{
			Icon: Paintbrush,
			name: t("CanvasTitle"),
			description: t("CanvasDesc"),
			// href: "/canvas-tools",
			cta: t("CanvasCta"),
			className: "lg:row-span-3 lg:col-span-2 md:row-span-2 row-span-2",
			background: null,
		},
		// {
		// 	Icon: Zap,
		// 	name: t("AiTitle"),
		// 	description: t("AiDesc"),
		// 	// href: "/ai-assistant",
		// 	cta: t("AiCta"),
		// 	className: "lg:row-span-3 lg:col-span-1 md:row-span-2 row-span-2",
		// 	background: null,
		// },
		// {
		//   Icon: Share2Icon,
		//   name: t('IntegrationsTitle'),
		//   description: t('IntegrationsDesc'),
		// href: '/integrations',
		//   cta: 'Connect apps',
		//   className: 'lg:row-span-3 lg:col-span-4 md:row-span-2 row-span-2',
		//   background: (
		//     <AnimatedBeamGroup className="absolute pl-[800px] inset-[-160px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
		//   ),
		// },
		// {
		// 	Icon: Brain,
		// 	name: t("SmartOrgTitle"),
		// 	description: t("SmartOrgDesc"),
		// 	// href: "/smart-organization",
		// 	cta: t("SmartOrgCta"),
		// 	className: "lg:row-span-3 lg:col-span-4 md:row-span-2 row-span-2",
		// 	background: (
		// 		<Marquee
		// 			repeat={2}
		// 			pauseOnHover
		// 			className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
		// 		>
		// 			{files.map((f, idx) => (
		// 				<figure
		// 					key={idx}
		// 					className={cn(
		// 						"relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
		// 						"border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
		// 						"dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
		// 						"transform-gpu blur-[1px] transition-transform duration-300 ease-out hover:blur-none",
		// 					)}
		// 				>
		// 					<div className="flex flex-row items-center gap-2">
		// 						<div className="flex flex-col">
		// 							<figcaption className="text-sm font-medium dark:text-white ">
		// 								{f.name}
		// 							</figcaption>
		// 						</div>
		// 					</div>
		// 					<blockquote className="mt-2 text-xs dark:text-zinc-600 text-zinc-600">
		// 						{f.body}
		// 					</blockquote>
		// 				</figure>
		// 			))}
		// 		</Marquee>
		// 	),
		// },
		{
			Icon: Database,
			name: t("TemplateTitle"),
			description: t("TemplateDesc"),
			// href: "/asset-library",
			cta: t("TemplateCta"),
			className: "lg:row-span-3 lg:col-span-3 md:row-span-2 row-span-2",
			background: (
				<GridPattern
					width={30}
					height={30}
					x={-1}
					y={-1}
					strokeDasharray={"4 2"}
					className={cn(
						"absolute right-0 top-[0]",
						"[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
					)}
				/>
			),
		},
		{
			Icon: Clock,
			name: t("TimeTitle"),
			description: "",
			// href: "/version-control",
			cta: t("HistoryCta"),
			className: "lg:row-span-1 lg:col-span-1 md:row-span-2 row-span-2",
			background: null,
		},
		{
			Icon: Globe,
			name: t("CollaborationTitle"),
			description: "",
			// href: "/collaboration",
			cta: t("GlobeCta"),
			className: "lg:row-span-1 lg:col-span-1 md:row-span-2 row-span-2",
			background: null,
		},
		{
			Icon: Shield,
			name: t("SecurityTitle"),
			description: "",
			// href: "/security",
			cta: t("SecurityCta"),
			className: "lg:row-span-1 lg:col-span-1 md:row-span-2 row-span-2",
			background: null,
		},
	];

	return (
		<section className={cn("max-w-[1280px]", props.className)}>
			<div className="max-w-xl text-center mx-auto mb-[64px]">
				<h2 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100 text-pretty ml-4">
					{t("Match")}
					<br />
					<span className="text-zinc-500 dark:text-zinc-400">
						{t("Faster")}
					</span>
				</h2>
			</div>

			<BentoGrid className="lg:grid-cols-4  auto-rows-[120px]">
				{features.map(feature => (
					<BentoCard
						key={feature.name}
						href="https://app.microboard.io/"
						{...feature}
					/>
				))}
			</BentoGrid>
		</section>
	);
};
