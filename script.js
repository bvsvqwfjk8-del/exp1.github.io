// Tailwind 配置
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#27AE60',
                secondary: '#F8F9FA',
                accent: '#FF6B6B',
                dark: '#333333',
                light: '#F5F5F5'
            },
            fontFamily: {
                sans: ['PingFang SC', 'Microsoft YaHei', 'sans-serif']
            }
        }
    }
};

// 返回顶部功能
const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.remove('opacity-0', 'invisible');
        backToTopBtn.classList.add('opacity-100', 'visible');
    } else {
        backToTopBtn.classList.remove('opacity-100', 'visible');
        backToTopBtn.classList.add('opacity-0', 'invisible');
    }
});
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// 轮播图功能
let currentSlide = 0;
const slides = 3; // 假设有3个轮播图

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides;
    updateSlideIndicators();
}

function updateSlideIndicators() {
    const indicators = document.querySelectorAll('.rounded-full.w-2.h-2');
    indicators.forEach((indicator, index) => {
        if (index === currentSlide) {
            indicator.classList.remove('opacity-50');
            indicator.classList.add('opacity-100');
        } else {
            indicator.classList.remove('opacity-100');
            indicator.classList.add('opacity-50');
        }
    });
}

// 自动轮播
setInterval(nextSlide, 5000);