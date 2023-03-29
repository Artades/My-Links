import { useEffect, useRef, useState } from "react";

export const useOutside = (initialVisibility: boolean) => {
	const [isShowed, setIsShowed] = useState(initialVisibility);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				ref.current &&
				!ref.current.contains(event.target as Node) &&
				isShowed
			) {
				setIsShowed(false);
			}
		};

		const handleEscape = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setIsShowed(false);
			}
		};

		document.addEventListener("click", handleClickOutside, true);
		document.addEventListener("keydown", handleEscape);

		return () => {
			document.removeEventListener("click", handleClickOutside, true);
			document.removeEventListener("keydown", handleEscape);
		};
	}, [isShowed]);

	return { ref, isShowed, setIsShowed };
};
