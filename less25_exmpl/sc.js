// Класс для навигации с анимацией
class Navigation {
    constructor() {
        this.menuLinks = document.querySelectorAll('.nav-menu a');
        this.sections = document.querySelectorAll('.section');
        this.currentSection = null;
    }

    init() {
        this.menuLinks.forEach(link => link.addEventListener('click', this.handleNavClick));
        window.addEventListener('scroll', this.handleScroll);
    }

    handleNavClick = (e) => {
        e.preventDefault();
        const target = e.target.getAttribute('href');
        this.scrollToSection(target);
    }

    handleScroll = () => {
        this.sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 100) {
                this.currentSection = section.id;
                this.updateActiveLink();
            }
        });
    }

    updateActiveLink() {
        this.menuLinks.forEach(link => {
            if (link.hash === `#${this.currentSection}`) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    scrollToSection(target) {
        const section = document.querySelector(target);
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Класс для фильтрации проектов
class ProjectFilter {
    constructor() {
        this.filters = document.querySelectorAll('.filter-btn');
        this.projects = document.querySelectorAll('.project-card');
    }

    init() {
        this.filters.forEach(btn => btn.addEventListener('click', this.handleFilter));
    }

    handleFilter = (e) => {
        const filter = e.target.dataset.filter;
        this.projects.forEach(project => {
            if (filter === 'all' || project.classList.contains(filter)) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    }
}

// Класс для показа информации о проекте
class ProjectDetails {
    constructor() {
        this.buttons = document.querySelectorAll('.info-btn');
    }

    init() {
        this.buttons.forEach(btn => btn.addEventListener('click', this.toggleDetails));
    }

    toggleDetails = (e) => {
        const details = e.target.nextElementSibling;
        details.classList.toggle('hidden');
    }
}

// Инициализация классов
document.addEventListener('DOMContentLoaded', () => {
    const nav = new Navigation();
    nav.init();

    const filter = new ProjectFilter();
    filter.init();

    const details = new ProjectDetails();
    details.init();

    // Анимация перехода между разделами
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                section.classList.add('fade-enter');
            }
        });
    });
});