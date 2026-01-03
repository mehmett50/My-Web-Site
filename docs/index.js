// Dil çevirileri
const translations = {
    tr: {
        // Navbar
        'about-me-link': 'Hakkımda',
        'what-i-do-link': 'Neler Yapıyorum',
        'my-goals-link': 'Hedeflerim',
        'contact-link': 'İletişim',
        
        // Profile Card
        'job-title': 'Junior Yazılım Geliştirici | Junior BT Uzmanı | Teknoloji Meraklısı',
        
        // About Me Section
        'about-me-title': 'Hakkımda',
        'about-me-text': 'Merhaba! Ben Mehmet USLU. 2006 doğumluyum ve bir teknoloji meraklısı ve yazılım geliştiriciyim. Şu anda bir lojistik şirketinde BT Uzmanı olarak çalışıyorum. Bilgisayar programcılığı alanında kariyer yapmayı hedefliyor ve bu alanda kendimi sürekli geliştirmeye çalışıyorum. Kodlama, problem çözme ve yeni teknolojiler öğrenme konusunda tutkuluyum.<br><br>Ayrıca lojistik operasyonlarında yaygın olarak kullanılan donanımlarda pratik deneyime sahibim; özellikle Zebra barkod tarayıcıları ve yazıcıları konusunda kurulum, kullanım ve temel yönetim bilgisine sahibim. Hedefim, yenilikçi projeler geliştirerek teknoloji dünyasında fark yaratmak ve yazılım geliştirme alanında daha da uzmanlaşmaktır.',
        
        // What I Do Section
        'what-i-do-title': 'Neler Yapıyorum',
        'what-i-do-item1': 'Yazılım Geliştirme: Programlama dilleri kullanarak basit uygulamalar ve yazılımlar geliştirme.',
        'what-i-do-item2': 'BT Desteği: Donanım ve yazılım sorunları için teknik destek ve sorun giderme sağlama.',
        'what-i-do-item3': 'Öğrenme ve Gelişim: Kurslar ve projeler aracılığıyla programlama ve BT becerilerimi sürekli geliştirme.',
        
        // My Goals Section
        'my-goals-title': 'Hedeflerim',
        'my-goals-item1': 'Birden fazla programlama dilinde uzmanlığa sahip yetkin bir yazılım geliştirici olmak.',
        'my-goals-item2': 'Açık kaynak projelere katkıda bulunmak ve diğer geliştiricilerle işbirliği yapmak.',
        'my-goals-item3': 'En son teknoloji trendleri ve gelişmeleri hakkında güncel kalmak.',
        
        // Contact Section
        'contact-title': 'İletişim',
        'contact-text': 'Benimle iletişime geçmek isterseniz, lütfen yukarıdaki ikonlara tıklayarak GitHub, LinkedIn veya Instagram profillerim aracılığıyla ulaşabilirsiniz.',
        
        // Back to Top
        'back-to-top': 'Başa Dön'
    },
    en: {
        // Navbar
        'about-me-link': 'About Me',
        'what-i-do-link': 'What I Do',
        'my-goals-link': 'My Goals',
        'contact-link': 'Contact',
        
        // Profile Card
        'job-title': 'Junior Software Developer | Junior IT Specialist | Technology Enthusiast',
        
        // About Me Section
        'about-me-title': 'About Me',
        'about-me-text': 'Hello! I\'m Mehmet USLU. I was born in 2006 and I\'m a technology enthusiast and software developer. I\'m currently working as an IT Specialist at a logistics company. I aim to build a career in computer programming and I continuously work on improving myself in this field. I\'m passionate about coding, problem-solving, and learning new technologies.<br><br> I also have hands-on experience with hardware commonly used in logistics operations; in particular, I\'m knowledgeable about Zebra barcode scanners and printers, including their setup, usage, and basic management. My goal is to make a difference in the tech world by developing innovative projects and to specialize further in software development.',
        
        // What I Do Section
        'what-i-do-title': 'What I Do',
        'what-i-do-item1': 'Software Development: Developing simple applications and software using programming languages.',
        'what-i-do-item2': 'IT Support: Providing technical support and troubleshooting for hardware and software issues.',
        'what-i-do-item3': 'Learning & Development: Continuously enhancing my skills in programming and IT through courses and projects.',
        
        // My Goals Section
        'my-goals-title': 'My Goals',
        'my-goals-item1': 'Become a proficient software developer with expertise in multiple programming languages.',
        'my-goals-item2': 'Contribute to open-source projects and collaborate with other developers.',
        'my-goals-item3': 'Stay updated with the latest technology trends and advancements.',
        
        // Contact Section
        'contact-title': 'Contact',
        'contact-text': 'You can reach out to me via my GitHub, LinkedIn or Instagram profiles by clicking the icons above.',
        
        // Back to Top
        'back-to-top': 'Back to Top'
    }
};

// Mevcut dili localStorage'dan al veya varsayılan olarak İngilizce kullan
let currentLang = localStorage.getItem('language') || 'en';

// Sayfa yüklendiğinde dili uygula
document.addEventListener('DOMContentLoaded', function() {
    applyLanguage(currentLang);
    updateLanguageButton();
});

// Dil değiştirme fonksiyonu
function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'tr' : 'en';
    localStorage.setItem('language', currentLang);
    applyLanguage(currentLang);
    updateLanguageButton();
}

// Dili uygula
function applyLanguage(lang) {
    const t = translations[lang];
    
    // HTML lang attribute
    document.documentElement.lang = lang;
    
    // Navbar
    document.querySelector('[href="#about-me"]').textContent = t['about-me-link'];
    document.querySelector('[href="#what-i-do"]').textContent = t['what-i-do-link'];
    document.querySelector('[href="#my-goals"]').textContent = t['my-goals-link'];
    document.querySelector('[href="#contact"]').textContent = t['contact-link'];
    
    // Profile Card
    document.querySelector('.profile-card h2').textContent = t['job-title'];
    
    // About Me
    document.querySelector('.about-me h3').textContent = t['about-me-title'];
    document.querySelector('.about-me p').innerHTML = t['about-me-text'];
    
    // What I Do
    document.querySelector('.what-i-do h3').textContent = t['what-i-do-title'];
    const whatIDoItems = document.querySelectorAll('.what-i-do ul li');
    whatIDoItems[0].textContent = t['what-i-do-item1'];
    whatIDoItems[1].textContent = t['what-i-do-item2'];
    whatIDoItems[2].textContent = t['what-i-do-item3'];
    
    // My Goals
    document.querySelector('.my-goals h3').textContent = t['my-goals-title'];
    const myGoalsItems = document.querySelectorAll('.my-goals ul li');
    myGoalsItems[0].textContent = t['my-goals-item1'];
    myGoalsItems[1].textContent = t['my-goals-item2'];
    myGoalsItems[2].textContent = t['my-goals-item3'];
    
    // Contact
    document.querySelector('.contact h3').textContent = t['contact-title'];
    document.querySelector('.contact p').textContent = t['contact-text'];
    
    // Back to Top
    document.querySelector('.back-to-top a').textContent = t['back-to-top'];
}

// Dil butonunu güncelle
function updateLanguageButton() {
    const btn = document.getElementById('lang-toggle');
    if (btn) {
        btn.textContent = currentLang === 'en' ? '🇹🇷 TR' : '🇬🇧 EN';
    }
}

// Sayfa yüklenme efekti
window.addEventListener('load', function() {
    // Daire animasyonu bittikten sonra loader'ı kaldır
    setTimeout(function() {
        const loader = document.getElementById('loader');
        if (loader) {
            loader.classList.add('hidden');
        }
    }, 1600);
    
    // Elementlere fade-in efekti ekle
    const elementsToAnimate = [
        '.profile-card',
        '.about-me',
        '.what-i-do',
        '.my-goals',
        '.contact',
        '.back-to-top'
    ];
    
    elementsToAnimate.forEach(function(selector) {
        const element = document.querySelector(selector);
        if (element) {
            element.classList.add('fade-in');
        }
    });
});
