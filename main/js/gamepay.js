
document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 1; // 현재 슬라이드 (1번부터 시작)
    const totalSlides = 3; // 총 슬라이드 개수
    let autoSlideInterval;

    const radios = document.querySelectorAll("input[name='slideradio']");
    const startAutoSlide = () => {
        autoSlideInterval = setInterval(() => {
            currentIndex = currentIndex % totalSlides + 1; // 1 → 2 → 3 → 1 반복
            document.getElementById(`slide${currentIndex}`).checked = true;
        }, 3000); // 3초마다 변경
    };

    // 슬라이드 이동 버튼 클릭 시 자동 슬라이드 정지
    document.querySelectorAll(".prev, .next").forEach(button => {
        button.addEventListener("click", () => {
            clearInterval(autoSlideInterval);
            setTimeout(startAutoSlide, 5000); // 5초 후 다시 자동 시작
        });
    });

    // 자동 슬라이드 시작
    startAutoSlide();
});
