// import { Flipper } from '@/ui/Flipper';
import { Bento } from "@/ui/Bento";
import { FAQ } from "@/ui/FAQ";
import { Features } from "@/ui/Features";
import { Footer } from "@/ui/Footer";
import { Hero } from "@/ui/Hero";
import { Liner } from "@/ui/Liner";
import { Navbar } from "@/ui/Navbar";
import { Pricing } from "@/ui/Pricing";
import { Purchase } from "@/ui/Purchase";
import Reviews from "@/ui/Reviews";

export default function Home() {
	return (
		<div className="flex flex-col items-center w-full">
			<Navbar className="mt-[12px]" />
			<Hero className="mx-auto px-4 mb-[32px]" />
			{/* <HeroVideo className="mb-[128px] px-[8px]" /> */}
			<iframe
				className="mb-[128px] px-[8px] w-full min-h-[500px] h-[85dvh]"
				src="https://app.microboard.io/welcome"
				allow="clipboard-read; clipboard-write"
				sandbox="allow-forms allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-scripts allow-top-navigation allow-top-navigation-by-user-activation"
				title="Microboard Welcome"
			/>
			<Bento className="px-[8px]" />
			<Liner className="mt-[64px]" />
			<Purchase className="mt-32 px-4 mx-auto" />
			<Reviews className="" />
			<Pricing className="py-20 px-4 mx-auto" />
			<Features className="" />
			<FAQ className="mt-12 mx-auto" />
			<Footer className="mt-[32px] sm:mt-[48px] md:mt-[64px]" />
		</div>
	);
}
