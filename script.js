document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".scroll-animate");

    const onScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    elements.forEach(el => {
    const rect = el.getBoundingClientRect().top;

        if (rect < triggerBottom) {
            el.classList.add("show");
            }
        });
    };

    window.addEventListener("scroll", onScroll);
    onScroll(); // Trigger on first load
});

