document.addEventListener("DOMContentLoaded", () => {
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.4,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
        })
    },options);

    const targets = document.querySelectorAll(".fade-up , .fade-up__card , .fade-up__hero");

    targets.forEach((target) => {
        observer.observe(target);
    });
});