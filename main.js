"use strict";

document.addEventListener("DOMContentLoaded", () => {
	const shareBtn = document.getElementById("share-btn");
	const shareMenu = document.getElementById("share-menu");

	if (!shareBtn || !shareMenu) return;

	const toggleShareMenu = () => {
		const isActive = shareMenu.classList.contains("article-card__share-menu--active");

		if (isActive) {
			closeMenu();
		} else {
			openMenu();
		}
	};

	const openMenu = () => {
		shareMenu.classList.add("article-card__share-menu--active");
		shareBtn.classList.add("article-card__share-trigger--active");
		shareBtn.setAttribute("aria-expanded", "true");
	};

	const closeMenu = () => {
		shareMenu.classList.remove("article-card__share-menu--active");
		shareBtn.classList.remove("article-card__share-trigger--active");
		shareBtn.setAttribute("aria-expanded", "false");
	};

	shareBtn.addEventListener("click", (e) => {
		e.stopPropagation();
		toggleShareMenu();
	});

	// Close menu when clicking outside
	document.addEventListener("click", (e) => {
		const isClickInsideMenu = shareMenu.contains(e.target);
		const isClickOnBtn = shareBtn.contains(e.target);

		if (!isClickInsideMenu && !isClickOnBtn) {
			closeMenu();
		}
	});

	// Close menu on Escape key press for accessibility
	document.addEventListener("keydown", (e) => {
		if (e.key === "Escape") {
			closeMenu();
			shareBtn.focus();
		}
	});
});
