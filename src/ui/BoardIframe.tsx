"use client";

export const BoardIframe: React.FC<
	React.HTMLAttributes<HTMLIFrameElement>
> = () => {
	return (
		<iframe
			className="mb-[128px] px-[8px] w-full min-h-[500px] h-[85dvh]"
			src={`https://${window.location.origin.includes("dev-landing") ? "dev-app" : "app"}.microboard.io/welcome`}
			allow="clipboard-read; clipboard-write"
			sandbox="allow-forms allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-scripts allow-top-navigation allow-top-navigation-by-user-activation"
			title="Microboard Welcome"
		/>
	);
};
