"use client";
import { Button, Link } from "@/components/ui/button";
import { LogIn, Moon, Sun, Menu } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import NLink from "next/link";
import { useClickOutside, useMediaQuery } from "@/lib/hooks";

export const Navbar: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
	...props
}) => {
	const { theme, setTheme } = useTheme();
	const t = useTranslations("Nav");
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const handleMenuItemClick = () => setIsMenuOpen(false);
	const isLgScreen = useMediaQuery("(min-width: 64rem)");
	const ref = useClickOutside(handleMenuItemClick);
	return (
		<nav
			className={cn(
				"text-black dark:text-white backdrop-blur-sm z-[9999] shadow-transparent bg-zinc-50/50 dark:bg-zinc-950/50 fixed flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 py-4 left-1/2 transform -translate-x-1/2 max-w-[95%] sm:max-w-[90%] lg:max-w-[1280px] w-full border-[1px] border-zinc-500/25 rounded-[8px]",
				props.className,
			)}
			ref={ref}
		>
			<div className="w-full lg:w-auto flex items-center justify-between">
				<div className="font-bold text-xl flex gap-[6px] items-center">
					{/* <img src="/favicon.ico" width={16} height={16} alt="logo" /> */}
					Microboard
				</div>

				{/* Mobile menu button */}
				<Button
					variant="ghost"
					size="icon"
					className="lg:hidden"
					onClick={evt => {
						evt.stopPropagation();
						setIsMenuOpen(prev => !prev);
					}}
				>
					<Menu className="h-5 w-5" />
				</Button>
			</div>

			{/* Navigation links and buttons */}
			<motion.div
				initial={{ height: 0, opacity: 0 }}
				animate={
					isMenuOpen || isLgScreen
						? {
								height: "auto",
								opacity: 1,
								marginTop: isLgScreen ? 0 : "16px",
							}
						: {
								height: 0,
								opacity: 0,
								marginTop: 0,
							}
				}
				transition={{ duration: 0.3 }}
				className={`overflow-hidden lg:flex flex-col lg:flex-row w-full lg:w-auto items-center space-y-4 lg:space-y-0 lg:space-x-6`}
			>
				<div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-6 w-full lg:w-auto">
					<NLink
						onClick={handleMenuItemClick}
						href="#pricing"
						className="hover:text-zinc-700 dark:hover:text-zinc-300"
					>
						{t("Pricing")}
					</NLink>
					<NLink
						onClick={handleMenuItemClick}
						href="#faq"
						className="hover:text-zinc-700 dark:hover:text-zinc-300"
					>
						FAQ
					</NLink>
					<a
						onClick={handleMenuItemClick}
						href="/pdf/terms_conditions_en.pdf"
						target="_blank"
						className="hover:text-zinc-700 dark:hover:text-zinc-300"
					>
						{t("Terms")}
					</a>
					<a
						onClick={handleMenuItemClick}
						href="/pdf/privacy_policy_en.pdf"
						target="_blank"
						className="hover:text-zinc-700 dark:hover:text-zinc-300"
					>
						{t("Privacy")}
					</a>
					<a
						onClick={handleMenuItemClick}
						href="https://docs.microboard.io/"
						target="_blank"
						className="hover:text-zinc-700 dark:hover:text-zinc-300"
					>
						API
					</a>
				</div>

				<div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4">
					<Button
						variant="ghost"
						size="icon"
						onClick={() => {
							handleMenuItemClick();
							setTheme(theme === "dark" ? "light" : "dark");
						}}
					>
						<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
						<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
						<span className="sr-only">Toggle theme</span>
					</Button>
					<Link
						href="https://app.microboard.io/"
						className="flex items-center space-x-2 px-4 py-2 rounded-md w-full lg:w-auto"
					>
						<span>{t("Join")}</span>
						<LogIn size={16} />
					</Link>
				</div>
			</motion.div>
		</nav>
	);
};
