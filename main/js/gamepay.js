
document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 1;
    const totalSlides = 3;
    let autoSlideInterval;

    const radios = document.querySelectorAll("input[name='slideradio']");
    const startAutoSlide = () => {
        autoSlideInterval = setInterval(() => {
            currentIndex = currentIndex % totalSlides + 1;
            document.getElementById(`slide${currentIndex}`).checked = true;
        }, 3000); 
    };

    document.querySelectorAll(".prev, .next").forEach(button => {
        button.addEventListener("click", () => {
            clearInterval(autoSlideInterval);
            setTimeout(startAutoSlide, 5000); 
        });
    });

    startAutoSlide();
});
