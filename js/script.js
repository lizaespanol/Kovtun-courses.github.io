// Простые функции для сайта курсов языков
document.addEventListener('DOMContentLoaded', function() {
    console.log('Сайт Lingva Expert загружен!');
    
    // Плавная прокрутка для якорных ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Обработка формы обратной связи
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Собираем данные формы
            const formData = new FormData(this);
            const name = this.querySelector('input[type="text"]').value;
            const phone = this.querySelector('input[type="tel"]').value;
            
            // Простая валидация
            if (!name || !phone) {
                alert('Пожалуйста, заполните все обязательные поля');
                return;
            }
            
            // Имитация отправки
            alert(`Спасибо, ${name}! Ваша заявка отправлена. Мы свяжемся с вами по номеру ${phone} в ближайшее время.`);
            this.reset();
        });
    }

    // Обработка кнопок "Записаться"
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            const courseCard = this.closest('.course-card');
            const courseName = courseCard ? courseCard.querySelector('h3').textContent : 'пробный урок';
            
            alert(`Запись на "${courseName}"! Позвоните нам: +7 (999) 123-45-67 или заполните форму на странице контактов.`);
        });
    });

    // Динамическое обновление года в футере
    const currentYear = new Date().getFullYear();
    const yearElement = document.querySelector('footer p');
    if (yearElement) {
        yearElement.innerHTML = yearElement.innerHTML.replace('2024', currentYear);
    }

    // Добавляем анимацию при прокрутке
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Наблюдаем за карточками
    document.querySelectorAll('.advantage-card, .language-card, .course-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Простая функция для проверки телефона
function validatePhone(phone) {
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    return phoneRegex.test(phone);
}

// Функция для показа/скрытия дополнительной информации
function toggleCourseDetails(courseId) {
    const details = document.getElementById(courseId);
    if (details) {
        details.style.display = details.style.display === 'none' ? 'block' : 'none';
    }
}