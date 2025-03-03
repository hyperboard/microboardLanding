"use client";

import { useEffect, useRef, useState } from "react";

export function useMediaQuery(query: string) {
	const [isMediaMatches, setIsMediaMatches] = useState(false);

	useEffect(() => {
		if (typeof window !== "undefined") {
			const mediaQueryList = window.matchMedia(query);
			const documentChangeHandler = () =>
				setIsMediaMatches(mediaQueryList.matches);

			documentChangeHandler();

			mediaQueryList.addEventListener("change", documentChangeHandler);

			return () =>
				mediaQueryList.removeEventListener(
					"change",
					documentChangeHandler,
				);
		}
	}, [query]);

	return isMediaMatches;
}

export function useClickOutside(handler: (event: MouseEvent) => void) {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				handler(event);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [handler]);

	return ref;
}
