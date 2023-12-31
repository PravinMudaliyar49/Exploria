"use strict";

(function () {
    const welcomeLeftFixedEl = document.querySelector(".left_fixed");
    const welcomeRightCards = document.querySelectorAll(".welcome_card");

    const callback = function (entries) {
        const [entry] = entries;
        if (!entry.isIntersecting) return;

        welcomeLeftFixedEl.textContent = entry.target.dataset.title;
        welcomeLeftFixedEl.style.backgroundImage = `url(${entry.target.dataset.bg})`;

        // console.log(entry);
    };

    const options = {
        root: null,
        // threshold: 0.95,
        threshold: 0.9,
        rootMargin: "",
    };

    const observer = new IntersectionObserver(callback, options);
    welcomeRightCards.forEach((card) => {
        observer.observe(card);
    });
})();
