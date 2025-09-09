"use client";

import { useEffect } from "react";

const ALLOWED_ORIGINS = [
	"https://dev-app.microboard.io",
	"https://app.microboard.io",
];

export const BoardIframe: React.FC<
	React.HTMLAttributes<HTMLIFrameElement>
> = () => {
	useEffect(() => {
		const handleMessage = (event: MessageEvent) => {
			if (!ALLOWED_ORIGINS.includes(event.origin)) {
				return;
			}

			if (event.data?.type === "open-new-window") {
				window.open(event.data.url, "_blank");
			}
		};

		window.addEventListener("message", handleMessage);

		return () => window.removeEventListener("message", handleMessage);
	}, []);

	return (
		<iframe
			className="mb-[128px] px-[8px] w-full min-h-[500px] h-[85dvh]"
			src={`https://app.microboard.io/welcome`}
			allow="clipboard-read; clipboard-write"
			sandbox="allow-forms allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-scripts allow-top-navigation allow-top-navigation-by-user-activation"
			title="Microboard Welcome"
		/>
	);
};
