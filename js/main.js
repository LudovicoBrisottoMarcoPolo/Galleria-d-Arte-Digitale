/**
 * =============================================
 * GALLERIA D'ARTE DIGITALE - Main JavaScript
 * Senior Frontend Developer & Creative Technologist
 * =============================================
 * Architettura:
 * 1. Internazionalizzazione (i18n)
 * 2. Custom Cursor
 * 3. Menu Navigation
 * 4. News Slider con Parallax
 * 5. Doors Carousel (Three.js)
 * 6. Animazioni GSAP
 * 7. Audio Feedback (Opzionale)
 */
// ============================================
// CONFIGURAZIONE E COSTANTI
// ============================================
const CONFIG = {
    // Impostazioni porte
    doors: [
        {
            id: 'rosa',
            name: { it: 'Galleria Rosa', en: 'Pink Gallery', fr: 'Galerie Rose' },
            artist: { it: 'Elena Vasquez', en: 'Elena Vasquez', fr: 'Elena Vasquez' },
            color: 0xec4899,
            image: 'img/porta-rosa.jpg',
            link: '/gallery/rosa'
        },
        {
            id: 'blu',
            name: { it: 'Galleria Blu', en: 'Blue Gallery', fr: 'Galerie Bleue' },
            artist: { it: 'Marco Chen', en: 'Marco Chen', fr: 'Marco Chen' },
            color: 0x3b82f6,
            image: 'img/porta-blu.jpg',
            link: '/gallery/blu'
        },
        {
            id: 'verde',
            name: { it: 'Galleria Verde', en: 'Green Gallery', fr: 'Galerie Verte' },
            artist: { it: 'Sara Johnson', en: 'Sara Johnson', fr: 'Sara Johnson' },
            color: 0x10b981,
            image: 'img/porta-verde.jpg',
            link: '/gallery/verde'
        }
    ],
    // Easing personalizzati per GSAP
    easing: {
        elastic: 'elastic.out(1, 0.5)',
        bounce: 'back.out(1.7)',
        smooth: 'power2.out'
    },
    // Audio abilitato
    audioEnabled: false
};
// ============================================
// 1. SISTEMA INTERNAZIONALIZZAZIONE (i18n)
// ============================================
const translations = {
    it: {
        pageTitle: 'Galleria d\'Arte Digitale',
        loading: 'CARICAMENTO...',
        selectLanguage: 'SELEZIONA LINGUA',
        menuHome: 'Home',
        menuArtists: 'Artisti',
        menuNews: 'Novità',
        menuContact: 'Contatti',
        heroTitle1: 'Esplora',
        heroTitle2: 'l\'Arte Digitale',
        heroSubtitle: 'Un viaggio immersivo attraverso le opere dei più innovativi artisti contemporanei',
        heroCta: 'Scopri le Gallerie',
        scrollDown: 'SCORRI',
        newsTag: 'NOVITÀ',
        newsTitle: 'Ultime dal Mondo dell\'Arte',
        news1Title: 'Nuova Mostra: "Oltre il Reale"',
        news1Excerpt: 'Un\'esplorazione dei confini tra realtà e immaginazione attraverso 30 opere digitali inedite.',
        news2Title: 'Workshop: Tecniche WebGL',
        news2Excerpt: 'Impara le basi della programmazione grafica 3D con i nostri artisti residenti.',
        news3Title: 'Artista del Mese: Elena Vasquez',
        news3Excerpt: 'Scopri il percorso creativo della vincitrice del Digital Art Award 2024.',
        news4Title: 'Collezione NFT in Arrivo',
        news4Excerpt: 'La nostra prima collezione di arte digitale certificata su blockchain.',
        doorsTag: 'GALLERIE',
        doorsTitle: 'Scegli la Tua Porta',
        doorsSubtitle: 'Ogni porta conduce a un universo artistico unico. Scorri e clicca per entrare.',
        doorEnter: 'Entra nella Galleria',
        prevDoor: 'Precedente',
        nextDoor: 'Successiva',
        entering: 'ENTRANDO IN',
        footerDesc: 'La prima galleria d\'arte digitale completamente immersiva.',
        footerLinks: 'Link Utili',
        footerAbout: 'Chi Siamo',
        footerPrivacy: 'Privacy',
        footerTerms: 'Termini',
        footerContact: 'Contatti'
    },
    en: {
        pageTitle: 'Digital Art Gallery',
        loading: 'LOADING...',
        selectLanguage: 'SELECT LANGUAGE',
        menuHome: 'Home',
        menuArtists: 'Artists',
        menuNews: 'News',
        menuContact: 'Contact',
        heroTitle1: 'Explore',
        heroTitle2: 'Digital Art',
        heroSubtitle: 'An immersive journey through the works of the most innovative contemporary artists',
        heroCta: 'Discover Galleries',
        scrollDown: 'SCROLL',
        newsTag: 'NEWS',
        newsTitle: 'Latest from the Art World',
        news1Title: 'New Exhibition: "Beyond Reality"',
        news1Excerpt: 'An exploration of the boundaries between reality and imagination through 30 unpublished digital works.',
        news2Title: 'Workshop: WebGL Techniques',
        news2Excerpt: 'Learn the basics of 3D graphics programming with our resident artists.',
        news3Title: 'Artist of the Month: Elena Vasquez',
        news3Excerpt: 'Discover the creative journey of the Digital Art Award 2024 winner.',
        news4Title: 'NFT Collection Coming Soon',
        news4Excerpt: 'Our first certified blockchain digital art collection.',
        doorsTag: 'GALLERIES',
        doorsTitle: 'Choose Your Door',
        doorsSubtitle: 'Each door leads to a unique artistic universe. Scroll and click to enter.',
        doorEnter: 'Enter Gallery',
        prevDoor: 'Previous',
        nextDoor: 'Next',
        entering: 'ENTERING',
        footerDesc: 'The first fully immersive digital art gallery.',
        footerLinks: 'Useful Links',
        footerAbout: 'About Us',
        footerPrivacy: 'Privacy',
        footerTerms: 'Terms',
        footerContact: 'Contact'
    },
    fr: {
        pageTitle: 'Galerie d\'Art Numérique',
        loading: 'CHARGEMENT...',
        selectLanguage: 'CHOISIR LA LANGUE',
        menuHome: 'Accueil',
        menuArtists: 'Artistes',
        menuNews: 'Actualités',
        menuContact: 'Contact',
        heroTitle1: 'Explorez',
        heroTitle2: 'l\'Art Numérique',
        heroSubtitle: 'Un voyage immersif à travers les œuvres des artistes contemporains les plus innovants',
        heroCta: 'Découvrir les Galeries',
        scrollDown: 'DÉFILER',
        newsTag: 'ACTUALITÉS',
        newsTitle: 'Dernières Nouvelles du Monde de l\'Art',
        news1Title: 'Nouvelle Exposition: "Au-delà du Réel"',
        news1Excerpt: 'Une exploration des frontières entre réalité et imagination à travers 30 œuvres numériques inédites.',
        news2Title: 'Atelier: Techniques WebGL',
        news2Excerpt: 'Apprenez les bases de la programmation graphique 3D avec nos artistes résidents.',
        news3Title: 'Artiste du Mois: Elena Vasquez',
        news3Excerpt: 'Découvrez le parcours créatif de la lauréate du Digital Art Award 2024.',
        news4Title: 'Collection NFT à Venir',
        news4Excerpt: 'Notre première collection d\'art numérique certifiée sur blockchain.',
        doorsTag: 'GALERIES',
        doorsTitle: 'Choisissez Votre Porte',
        doorsSubtitle: 'Chaque porte mène à un univers artistique unique. Faites défiler et cliquez pour entrer.',
        doorEnter: 'Entrer dans la Galerie',
        prevDoor: 'Précédent',
        nextDoor: 'Suivant',
        entering: 'ENTRÉE DANS',
        footerDesc: 'La première galerie d\'art numérique entièrement immersive.',
        footerLinks: 'Liens Utiles',
        footerAbout: 'À Propos',
        footerPrivacy: 'Confidentialité',
        footerTerms: 'Conditions',
        footerContact: 'Contact'
    }
};
/**
 * Classe per gestione i18n
 */
class I18nManager {
    constructor() {
        this.currentLang = localStorage.getItem('lang') || 'it';
        this.init();
    }
    init() {
        document.documentElement.setAttribute('data-lang', this.currentLang);
        this.updateContent();
        this.bindEvents();
        this.updateActiveButton();
    }
    bindEvents() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.dataset.lang;
                this.setLanguage(lang);
            });
        });
    }
    updateActiveButton() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === this.currentLang);
        });
    }
    setLanguage(lang) {
        if (translations[lang]) {
            this.currentLang = lang;
            localStorage.setItem('lang', lang);
            document.documentElement.setAttribute('data-lang', lang);
            // Aggiorna pulsanti attivi
            this.updateActiveButton();
            // Anima il cambio contenuti
            this.animateContentChange();
            // Aggiorna info porta se il carousel esiste
            if (window.doorsCarousel) {
                window.doorsCarousel.updateDoorInfo(window.doorsCarousel.currentDoor);
            }
        }
    }
    animateContentChange() {
        const elements = document.querySelectorAll('[data-i18n]');
        // Fade out
        gsap.to(elements, {
            opacity: 0,
            y: -10,
            duration: 0.2,
            stagger: 0.02,
            onComplete: () => {
                this.updateContent();
                // Fade in
                gsap.to(elements, {
                    opacity: 1,
                    y: 0,
                    duration: 0.3,
                    stagger: 0.02,
                    ease: CONFIG.easing.smooth
                });
            }
        });
    }
    updateContent() {
        const lang = this.currentLang;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
        // Aggiorna titolo pagina
        document.title = translations[lang].pageTitle || 'Galleria d\'Arte Digitale';
    }
    get(key) {
        return translations[this.currentLang][key] || key;
    }
}
// ============================================
// 2. CUSTOM CURSOR
// ============================================
class CustomCursor {
    constructor() {
        this.cursor = document.getElementById('cursor');
        this.follower = document.getElementById('cursor-follower');
        this.pos = { x: 0, y: 0 };
        this.mouse = { x: 0, y: 0 };
        this.speed = 0.15;
        // Check if touch device
        this.isTouch = 'ontouchstart' in window;
        if (!this.isTouch) {
            this.init();
        }
    }
    init() {
        // Mouse move
        document.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });
        // Hover states
        const hoverElements = document.querySelectorAll('a, button, .news-card, .indicator');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
            el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
        });
        // Click state
        document.addEventListener('mousedown', () => document.body.classList.add('cursor-click'));
        document.addEventListener('mouseup', () => document.body.classList.remove('cursor-click'));
        // Animate
        this.animate();
    }
    animate() {
        // Smooth follow per il follower
        this.pos.x += (this.mouse.x - this.pos.x) * this.speed;
        this.pos.y += (this.mouse.y - this.pos.y) * this.speed;
        // Posiziona cursor (istantaneo)
        if (this.cursor) {
            this.cursor.style.left = `${this.mouse.x}px`;
            this.cursor.style.top = `${this.mouse.y}px`;
        }
        // Posiziona follower (smooth)
        if (this.follower) {
            this.follower.style.left = `${this.pos.x}px`;
            this.follower.style.top = `${this.pos.y}px`;
        }
        requestAnimationFrame(() => this.animate());
    }
    setDragging(isDragging) {
        document.body.classList.toggle('cursor-drag', isDragging);
    }
}
// ============================================
// 3. MENU NAVIGATION
// ============================================
class MenuManager {
    constructor() {
        this.toggle = document.getElementById('menu-toggle');
        this.overlay = document.getElementById('menu-overlay');
        this.isOpen = false;
        this.init();
    }
    init() {
        if (this.toggle) {
            this.toggle.addEventListener('click', () => this.toggleMenu());
        }
        // Chiudi menu su click link
        document.querySelectorAll('.menu-link').forEach(link => {
            link.addEventListener('click', () => {
                this.closeMenu();
            });
        });
        // Chiudi con ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                this.closeMenu();
            }
        });
    }
    toggleMenu() {
        this.isOpen ? this.closeMenu() : this.openMenu();
    }
    openMenu() {
        this.isOpen = true;
        this.toggle.classList.add('active');
        this.overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        // Anima i link del menu
        gsap.from('.menu-link', {
            y: 50,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: CONFIG.easing.smooth
        });
    }
    closeMenu() {
        this.isOpen = false;
        this.toggle.classList.remove('active');
        this.overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}
// ============================================
// 4. NEWS SLIDER CON PARALLAX
// ============================================
class NewsSlider {
    constructor() {
        this.slider = document.getElementById('news-slider');
        this.progress = document.getElementById('news-progress');
        this.cards = document.querySelectorAll('.news-card');
        this.isDragging = false;
        this.startX = 0;
        this.scrollLeft = 0;
        if (this.slider) {
            this.init();
        }
    }
    init() {
        this.bindDragEvents();
        this.bindScrollEvents();
        this.initParallax();
    }
    bindDragEvents() {
        // Mouse events
        this.slider.addEventListener('mousedown', (e) => this.startDrag(e));
        this.slider.addEventListener('mousemove', (e) => this.drag(e));
        this.slider.addEventListener('mouseup', () => this.endDrag());
        this.slider.addEventListener('mouseleave', () => this.endDrag());
        // Touch events
        this.slider.addEventListener('touchstart', (e) => this.startDrag(e.touches[0]));
        this.slider.addEventListener('touchmove', (e) => this.drag(e.touches[0]));
        this.slider.addEventListener('touchend', () => this.endDrag());
    }
    startDrag(e) {
        this.isDragging = true;
        this.slider.classList.add('dragging');
        this.startX = e.pageX - this.slider.offsetLeft;
        this.scrollLeft = this.slider.scrollLeft;
        if (window.customCursor) {
            window.customCursor.setDragging(true);
        }
    }
    drag(e) {
        if (!this.isDragging) return;
        e.preventDefault();
        const x = e.pageX - this.slider.offsetLeft;
        const walk = (x - this.startX) * 2; // Velocità scroll
        this.slider.scrollLeft = this.scrollLeft - walk;
    }
    endDrag() {
        this.isDragging = false;
        this.slider.classList.remove('dragging');
        if (window.customCursor) {
            window.customCursor.setDragging(false);
        }
    }
    bindScrollEvents() {
        this.slider.addEventListener('scroll', () => {
            this.updateProgress();
            this.updateParallax();
        });
    }
    updateProgress() {
        if (!this.progress) return;
        const scrollWidth = this.slider.scrollWidth - this.slider.clientWidth;
        const scrolled = (this.slider.scrollLeft / scrollWidth) * 100;
        this.progress.style.width = `${Math.max(25, scrolled)}%`;
    }
    initParallax() {
        // Parallax al movimento mouse
        this.cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const moveX = (x - centerX) / 20;
                const moveY = (y - centerY) / 20;
                const img = card.querySelector('.card-image img');
                if (img) {
                    gsap.to(img, {
                        x: moveX,
                        y: moveY,
                        duration: 0.5,
                        ease: 'power2.out'
                    });
                }
            });
            card.addEventListener('mouseleave', () => {
                const img = card.querySelector('.card-image img');
                if (img) {
                    gsap.to(img, {
                        x: 0,
                        y: 0,
                        duration: 0.5,
                        ease: CONFIG.easing.elastic
                    });
                }
            });
        });
    }
    updateParallax() {
        this.cards.forEach((card, index) => {
            const cardRect = card.getBoundingClientRect();
            const sliderRect = this.slider.getBoundingClientRect();
            // Calcola la posizione relativa al centro dello slider
            const cardCenter = cardRect.left + cardRect.width / 2;
            const sliderCenter = sliderRect.left + sliderRect.width / 2;
            const offset = cardCenter - sliderCenter;
            // Applica parallax orizzontale all'immagine
            const img = card.querySelector('.card-image img');
            if (img) {
                const parallaxAmount = offset * 0.02;
                img.style.transform = `translateX(${parallaxAmount}px) scale(1)`;
            }
        });
    }
}
// ============================================
// 5. DOORS CAROUSEL (THREE.JS)
// ============================================
class DoorsCarousel {
    constructor() {
        this.canvas = document.getElementById('doors-canvas');
        this.container = document.getElementById('doors-carousel');
        this.doorInfo = document.getElementById('door-info');
        this.doorTitle = document.getElementById('door-title');
        this.doorArtist = document.getElementById('door-artist');
        this.enterBtn = document.getElementById('door-enter');
        this.indicators = document.querySelectorAll('.indicator');
        this.currentDoor = 0; // Porta iniziale (indice 0)
        this.doors = [];
        this.isAnimating = false;
        this.textureLoader = new THREE.TextureLoader();
        if (this.canvas && window.THREE) {
            this.init();
        }
    }
    init() {
        this.setupScene();
        this.setupCamera();
        this.setupRenderer();
        this.setupLights();
        this.createDoors();
        this.setupEventListeners();
        this.animate();
        this.updateDoorInfo(this.currentDoor);
        this.updateIndicators();
    }
    setupScene() {
        this.scene = new THREE.Scene();
        this.scene.fog = new THREE.Fog(0x000000, 5, 20);
    }
    setupCamera() {
        const aspect = this.container.clientWidth / this.container.clientHeight;
        this.camera = new THREE.PerspectiveCamera(60, aspect, 0.1, 1000);
        this.camera.position.set(0, 0, 6);
    }
    setupRenderer() {
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true,
            alpha: true
        });
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        // Resize handler
        window.addEventListener('resize', () => this.onResize());
    }
    setupLights() {
        // Ambient light
        const ambient = new THREE.AmbientLight(0xffffff, 0.4);
        this.scene.add(ambient);
        // Directional light
        const directional = new THREE.DirectionalLight(0xffffff, 0.8);
        directional.position.set(5, 5, 5);
        this.scene.add(directional);
        // Point lights per ogni porta (per glow)
        CONFIG.doors.forEach((doorConfig, index) => {
            const pointLight = new THREE.PointLight(doorConfig.color, 0.5, 10);
            pointLight.position.set((index - 1) * 4, 0, 2);
            this.scene.add(pointLight);
        });
    }
    createDoors() {
        CONFIG.doors.forEach((doorConfig, index) => {
            const door = this.createDoor(doorConfig, index);
            this.doors.push(door);
            this.scene.add(door.group);
        });
        // Posiziona inizialmente le porte
        this.updateDoorsPosition(false);
    }
    createDoor(doorConfig, index) {
        const group = new THREE.Group();
        // Geometria porta
        const doorWidth = 2;
        const doorHeight = 3;
        const doorDepth = 0.1;
        // Frame della porta
        const frameMaterial = new THREE.MeshStandardMaterial({
            color: 0x1a1a1a,
            metalness: 0.8,
            roughness: 0.2
        });
        const frameGeometry = new THREE.BoxGeometry(doorWidth + 0.3, doorHeight + 0.3, doorDepth);
        const frame = new THREE.Mesh(frameGeometry, frameMaterial);
        frame.position.z = -doorDepth / 2;
        group.add(frame);
        // Pannello porta con colore
        const doorMaterial = new THREE.MeshStandardMaterial({
            color: doorConfig.color,
            metalness: 0.3,
            roughness: 0.5,
            emissive: doorConfig.color,
            emissiveIntensity: 0.1
        });
        const doorGeometry = new THREE.BoxGeometry(doorWidth - 0.1, doorHeight - 0.1, doorDepth);
        const doorPanel = new THREE.Mesh(doorGeometry, doorMaterial);
        // Pivot group per rotazione porta
        const doorPivot = new THREE.Group();
        doorPivot.position.x = doorWidth / 2;
        doorPivot.add(doorPanel);
        doorPanel.position.x = -doorWidth / 2;
        group.add(doorPivot);
        // Maniglia
        const handleGeometry = new THREE.CylinderGeometry(0.05, 0.05, 0.3, 16);
        const handleMaterial = new THREE.MeshStandardMaterial({
            color: 0xd4af37,
            metalness: 0.9,
            roughness: 0.1
        });
        const handle = new THREE.Mesh(handleGeometry, handleMaterial);
        handle.rotation.z = Math.PI / 2;
        handle.position.set(doorWidth / 2 - 0.3, 0, 0.1);
        doorPivot.add(handle);
        // Posizione iniziale
        group.position.x = (index - 1) * 4;
        return {
            group,
            doorPivot,
            doorPanel,
            config: doorConfig,
            index,
            isOpen: false
        };
    }
    updateDoorsPosition(animate = true) {
        this.doors.forEach((door, index) => {
            const offset = index - this.currentDoor;
            const targetX = offset * 3.5;
            const targetZ = offset === 0 ? 0 : -1;
            const targetScale = offset === 0 ? 1.2 : 0.8;
            const targetRotY = offset * 0.1;
            // Material emissive
            const material = door.doorPanel.material;
            const targetEmissive = offset === 0 ? 0.2 : 0.05;
            if (animate) {
                // Animazione con GSAP
                gsap.to(door.group.position, {
                    x: targetX,
                    z: targetZ,
                    duration: 0.8,
                    ease: CONFIG.easing.elastic
                });
                gsap.to(door.group.scale, {
                    x: targetScale,
                    y: targetScale,
                    z: targetScale,
                    duration: 0.8,
                    ease: CONFIG.easing.bounce
                });
                gsap.to(door.group.rotation, {
                    y: targetRotY,
                    duration: 0.8,
                    ease: CONFIG.easing.smooth
                });
                gsap.to(material, {
                    emissiveIntensity: targetEmissive,
                    duration: 0.5
                });
            } else {
                // Posizione immediata
                door.group.position.set(targetX, 0, targetZ);
                door.group.scale.setScalar(targetScale);
                door.group.rotation.y = targetRotY;
                material.emissiveIntensity = targetEmissive;
            }
        });
    }
    setupEventListeners() {
        // Navigation buttons
        const prevBtn = document.getElementById('prev-door');
        const nextBtn = document.getElementById('next-door');
        if (prevBtn) prevBtn.addEventListener('click', () => this.navigate(-1));
        if (nextBtn) nextBtn.addEventListener('click', () => this.navigate(1));
        // Indicators
        this.indicators.forEach(indicator => {
            indicator.addEventListener('click', () => {
                const index = parseInt(indicator.dataset.door);
                this.goToDoor(index);
            });
        });
        // Enter button
        if (this.enterBtn) {
            this.enterBtn.addEventListener('click', () => this.enterGallery());
        }
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.navigate(-1);
            if (e.key === 'ArrowRight') this.navigate(1);
            if (e.key === 'Enter') this.enterGallery();
        });
        // Swipe detection
        this.setupSwipe();
        // Mouse wheel
        this.container.addEventListener('wheel', (e) => {
            e.preventDefault();
            if (e.deltaY > 0) this.navigate(1);
            else this.navigate(-1);
        }, { passive: false });
    }
    setupSwipe() {
        let startX = 0;
        this.container.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });
        this.container.addEventListener('touchend', (e) => {
            const endX = e.changedTouches[0].clientX;
            const diff = startX - endX;
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    this.navigate(1); // Swipe left - next
                } else {
                    this.navigate(-1); // Swipe right - previous
                }
            }
        });
    }
    navigate(direction) {
        if (this.isAnimating) return;
        const newIndex = this.currentDoor + direction;
        if (newIndex < 0 || newIndex >= this.doors.length) return;
        this.isAnimating = true;
        this.currentDoor = newIndex;
        this.updateDoorsPosition(true);
        this.updateDoorInfo(this.currentDoor);
        this.updateIndicators();
        setTimeout(() => {
            this.isAnimating = false;
        }, 800);
    }
    goToDoor(index) {
        if (this.isAnimating || index === this.currentDoor) return;
        if (index < 0 || index >= this.doors.length) return;
        this.isAnimating = true;
        this.currentDoor = index;
        this.updateDoorsPosition(true);
        this.updateDoorInfo(this.currentDoor);
        this.updateIndicators();
        setTimeout(() => {
            this.isAnimating = false;
        }, 800);
    }
    updateDoorInfo(index) {
        const door = CONFIG.doors[index];
        const lang = window.i18n ? window.i18n.currentLang : 'it';
        if (this.doorTitle) {
            gsap.to(this.doorTitle, {
                opacity: 0,
                y: -20,
                duration: 0.2,
                onComplete: () => {
                    this.doorTitle.textContent = door.name[lang];
                    gsap.to(this.doorTitle, {
                        opacity: 1,
                        y: 0,
                        duration: 0.3,
                        ease: CONFIG.easing.smooth
                    });
                }
            });
        }
        if (this.doorArtist) {
            gsap.to(this.doorArtist, {
                opacity: 0,
                y: -20,
                duration: 0.2,
                delay: 0.1,
                onComplete: () => {
                    this.doorArtist.textContent = door.artist[lang];
                    gsap.to(this.doorArtist, {
                        opacity: 1,
                        y: 0,
                        duration: 0.3,
                        ease: CONFIG.easing.smooth
                    });
                }
            });
        }
    }
    updateIndicators() {
        this.indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === this.currentDoor);
        });
    }
    enterGallery() {
        const door = this.doors[this.currentDoor];
        const overlay = document.getElementById('entering-overlay');
        const enteringName = document.getElementById('entering-name');
        const lang = window.i18n ? window.i18n.currentLang : 'it';
        // Imposta il nome della galleria
        if (enteringName) {
            enteringName.textContent = door.config.name[lang];
        }
        // Animazione apertura porta
        gsap.to(door.doorPivot.rotation, {
            y: -Math.PI / 2,
            duration: 1.2,
            ease: CONFIG.easing.smooth
        });
        // Zoom camera verso la porta
        gsap.to(this.camera.position, {
            z: 2,
            duration: 1.5,
            ease: 'power2.inOut'
        });
        // Mostra overlay
        setTimeout(() => {
            if (overlay) {
                overlay.classList.add('active');
            }
        }, 800);
        // Redirect alla galleria (o reset per demo)
        setTimeout(() => {
            // Per demo, resettiamo
            if (overlay) {
                overlay.classList.remove('active');
            }
            // Chiudi porta
            gsap.to(door.doorPivot.rotation, {
                y: 0,
                duration: 0.8,
                ease: CONFIG.easing.bounce
            });
            // Reset camera
            gsap.to(this.camera.position, {
                z: 6,
                duration: 0.8,
                ease: CONFIG.easing.smooth
            });
            // Per navigare davvero:
            // window.location.href = door.config.link;
        }, 3000);
    }
    onResize() {
        const width = this.container.clientWidth;
        const height = this.container.clientHeight;
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(width, height);
    }
    animate() {
        requestAnimationFrame(() => this.animate());
        // Leggera oscillazione della porta selezionata
        this.doors.forEach((door, index) => {
            if (index === this.currentDoor) {
                door.group.rotation.y = Math.sin(Date.now() * 0.001) * 0.02;
            }
        });
        this.renderer.render(this.scene, this.camera);
    }
}
// ============================================
// 6. ANIMAZIONI HERO
// ============================================
function initHeroAnimations() {
    // Animazione titoli hero
    gsap.from('.hero-title span', {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: CONFIG.easing.smooth,
        delay: 1.5
    });
    gsap.from('.hero-subtitle', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: CONFIG.easing.smooth,
        delay: 2
    });
    gsap.from('.hero-cta', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: CONFIG.easing.smooth,
        delay: 2.2
    });
    gsap.from('.scroll-indicator', {
        opacity: 0,
        duration: 1,
        ease: CONFIG.easing.smooth,
        delay: 2.5
    });
}
// ============================================
// 7. SCROLL ANIMATIONS
// ============================================
function initScrollAnimations() {
    // Animazione sezioni al scroll
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px'
    };
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Anima elementi interni
                const elements = entry.target.querySelectorAll('.section-header, .news-card');
                gsap.from(elements, {
                    y: 50,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: CONFIG.easing.smooth
                });
            }
        });
    }, observerOptions);
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
}
// ============================================
// 8. LOADING SCREEN
// ============================================
function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
        }, 1500);
    }
}
// ============================================
// 9. INIZIALIZZAZIONE GLOBALE
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Nascondi loading screen
    hideLoadingScreen();
    // Inizializza tutti i manager
    window.i18n = new I18nManager();
    window.customCursor = new CustomCursor();
    window.menuManager = new MenuManager();
    window.newsSlider = new NewsSlider();
    window.doorsCarousel = new DoorsCarousel();
    // Inizializza animazioni
    initHeroAnimations();
    initScrollAnimations();
    // Log
    console.log('🎨 Galleria d\'Arte Digitale inizializzata con successo!');
    console.log('📍 Lingua corrente:', window.i18n.currentLang);
    console.log('🚪 Porte disponibili:', CONFIG.doors.length);
});
// ============================================
// 10. UTILITY FUNCTIONS
// ============================================
/**
 * Debounce function per ottimizzare eventi frequenti
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
/**
 * Throttle function per limitare chiamate
 */
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}
/**
 * Lerp (Linear interpolation)
 */
function lerp(start, end, factor) {
    return start + (end - start) * factor;
}
/**
 * Clamp value between min and max
 */
function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}
/**
 * Map value from one range to another
 */
function mapRange(value, inMin, inMax, outMin, outMax) {
    return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
// ============================================
// DOOR CONNECTION SCRIPT
// Collega le porte della homepage alla galleria 3D
// Aggiungi questo codice al tuo script.js esistente
// o includilo come file separato dopo lo script principale
// ============================================
/**
 * Configurazione delle porte/gallerie
 * Modifica questo oggetto per personalizzare le gallerie
 */
const GALLERY_CONFIG = {
    doors: [
        {
            id: 0,
            name: { it: 'Galleria Rosa', en: 'Pink Gallery' },
            artist: { it: 'Collezione Astratta', en: 'Abstract Collection' },
            color: 0xff69b4,
            galleryUrl: 'gallery.html',
            galleryParam: 'Galleria Rosa'
        },
        {
            id: 1,
            name: { it: 'Galleria Blu', en: 'Blue Gallery' },
            artist: { it: 'Collezione Contemporanea', en: 'Contemporary Collection' },
            color: 0x4169e1,
            galleryUrl: 'gallery.html',
            galleryParam: 'Galleria Blu'
        },
        {
            id: 2,
            name: { it: 'Galleria Verde', en: 'Green Gallery' },
            artist: { it: 'Collezione Naturale', en: 'Nature Collection' },
            color: 0x32cd32,
            galleryUrl: 'gallery.html',
            galleryParam: 'Galleria Verde'
        }
    ]
};
/**
 * Classe per gestire la transizione "Hyper-speed" verso la galleria
 */
class HyperspeedTransition {
    constructor() {
        this.overlay = null;
        this.createOverlay();
    }
    createOverlay() {
        // Crea l'overlay per la transizione
        this.overlay = document.createElement('div');
        this.overlay.id = 'hyperspeed-overlay';
        this.overlay.innerHTML = `
            <div class="hyperspeed-container">
                <div class="tunnel-container" id="tunnel-container"></div>
                <div class="speed-lines-container" id="speed-lines-container"></div>
                <div class="warp-text" id="warp-text">Entrando...</div>
            </div>
        `;

        // Stili inline per l'overlay
        const styles = document.createElement('style');
        styles.textContent = `
            #hyperspeed-overlay {
                position: fixed;
                inset: 0;
                z-index: 99999;
                background: #0a0a0f;
                opacity: 0;
                pointer-events: none;
                transition: opacity 0.3s ease;
            }

            #hyperspeed-overlay.active {
                opacity: 1;
                pointer-events: auto;
            }

            .hyperspeed-container {
                position: relative;
                width: 100%;
                height: 100%;
                overflow: hidden;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .tunnel-container {
                position: absolute;
                inset: 0;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .tunnel-ring {
                position: absolute;
                border: 2px solid var(--color-accent, #a855f7);
                border-radius: 50%;
                opacity: 0;
                transform: scale(0);
            }

            .speed-lines-container {
                position: absolute;
                inset: 0;
                overflow: hidden;
            }

            .speed-line {
                position: absolute;
                width: 3px;
                background: linear-gradient(to bottom,
                    transparent 0%,
                    var(--color-accent, #a855f7) 50%,
                    transparent 100%);
                opacity: 0;
                transform-origin: center bottom;
            }

            .warp-text {
                position: relative;
                z-index: 10;
                font-family: 'Playfair Display', serif;
                font-size: 3rem;
                color: white;
                text-shadow: 0 0 40px var(--color-accent, #a855f7);
                opacity: 0;
                transform: scale(0.5);
            }

            .star-field {
                position: absolute;
                width: 4px;
                height: 4px;
                background: white;
                border-radius: 50%;
                opacity: 0;
            }

            @media (max-width: 768px) {
                .warp-text {
                    font-size: 1.8rem;
                }
            }
        `;

        document.head.appendChild(styles);
        document.body.appendChild(this.overlay);
    }
    /**
     * Esegue la transizione hyper-speed
     * @param {string} galleryName - Nome della galleria da mostrare
     * @param {string} galleryUrl - URL della galleria
     * @param {number} doorColor - Colore della porta in formato hex
     */
    async execute(galleryName, galleryUrl, doorColor) {
        const overlay = this.overlay;
        const tunnelContainer = document.getElementById('tunnel-container');
        const speedLinesContainer = document.getElementById('speed-lines-container');
        const warpText = document.getElementById('warp-text');

        // Imposta il colore basato sulla porta
        const colorHex = '#' + doorColor.toString(16).padStart(6, '0');
        overlay.style.setProperty('--color-accent', colorHex);

        // Imposta il testo
        warpText.textContent = galleryName;

        // Pulisci contenitori
        tunnelContainer.innerHTML = '';
        speedLinesContainer.innerHTML = '';

        // Attiva overlay
        overlay.classList.add('active');

        // Crea elementi per l'animazione
        this.createTunnelRings(tunnelContainer, 15);
        this.createSpeedLines(speedLinesContainer, 60);
        this.createStarField(speedLinesContainer, 100);

        // Esegui animazione
        await this.animateHyperspeed(tunnelContainer, speedLinesContainer, warpText, colorHex);

        // Naviga alla galleria
        window.location.href = `${galleryUrl}?gallery=${encodeURIComponent(galleryName)}`;
    }
    createTunnelRings(container, count) {
        for (let i = 0; i < count; i++) {
            const ring = document.createElement('div');
            ring.className = 'tunnel-ring';
            const size = 50 + i * 80;
            ring.style.width = size + 'px';
            ring.style.height = size + 'px';
            ring.dataset.index = i;
            container.appendChild(ring);
        }
    }
    createSpeedLines(container, count) {
        for (let i = 0; i < count; i++) {
            const line = document.createElement('div');
            line.className = 'speed-line';

            // Posizione radiale dal centro
            const angle = (i / count) * Math.PI * 2;
            const startRadius = 100;
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;

            const x = centerX + Math.cos(angle) * startRadius;
            const y = centerY + Math.sin(angle) * startRadius;

            line.style.left = x + 'px';
            line.style.top = y + 'px';
            line.style.height = '200px';
            line.style.transform = `rotate(${angle + Math.PI / 2}rad)`;
            line.dataset.angle = angle;

            container.appendChild(line);
        }
    }
    createStarField(container, count) {
        for (let i = 0; i < count; i++) {
            const star = document.createElement('div');
            star.className = 'star-field';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.width = (Math.random() * 3 + 1) + 'px';
            star.style.height = star.style.width;
            star.dataset.index = i;
            container.appendChild(star);
        }
    }
    async animateHyperspeed(tunnelContainer, speedLinesContainer, warpText, color) {
        return new Promise((resolve) => {
            const rings = tunnelContainer.querySelectorAll('.tunnel-ring');
            const lines = speedLinesContainer.querySelectorAll('.speed-line');
            const stars = speedLinesContainer.querySelectorAll('.star-field');

            // Timeline GSAP
            const tl = gsap.timeline({
                onComplete: resolve
            });

            // Fase 1: Stelle che si allungano (0-0.5s)
            tl.to(stars, {
                opacity: 0.8,
                scaleY: 5,
                duration: 0.5,
                stagger: 0.01,
                ease: 'power2.out'
            }, 0);

            // Fase 2: Speed lines che si estendono dal centro (0.3-1s)
            lines.forEach((line, i) => {
                const angle = parseFloat(line.dataset.angle);
                const distance = Math.max(window.innerWidth, window.innerHeight);

                tl.to(line, {
                    opacity: 0.9,
                    height: distance + 'px',
                    duration: 0.7,
                    ease: 'power2.in'
                }, 0.3 + i * 0.005);
            });

            // Fase 3: Tunnel rings che si espandono (0.5-1.5s)
            rings.forEach((ring, i) => {
                tl.to(ring, {
                    opacity: 0.6,
                    scale: 4,
                    duration: 0.8,
                    ease: 'power3.out'
                }, 0.5 + i * 0.08);

                tl.to(ring, {
                    opacity: 0,
                    duration: 0.3
                }, 0.8 + i * 0.08);
            });

            // Fase 4: Stelle che sfrecciano verso l'esterno (0.5-1.2s)
            stars.forEach((star, i) => {
                const centerX = window.innerWidth / 2;
                const centerY = window.innerHeight / 2;
                const starX = parseFloat(star.style.left) / 100 * window.innerWidth;
                const starY = parseFloat(star.style.top) / 100 * window.innerHeight;

                const dirX = starX - centerX;
                const dirY = starY - centerY;
                const distance = Math.sqrt(dirX * dirX + dirY * dirY);
                const normalX = dirX / distance;
                const normalY = dirY / distance;

                const moveDistance = Math.max(window.innerWidth, window.innerHeight);

                tl.to(star, {
                    x: normalX * moveDistance,
                    y: normalY * moveDistance,
                    opacity: 0,
                    duration: 0.7,
                    ease: 'power2.in'
                }, 0.5 + Math.random() * 0.2);
            });

            // Fase 5: Testo che appare (1s)
            tl.to(warpText, {
                opacity: 1,
                scale: 1,
                duration: 0.5,
                ease: 'back.out(1.7)'
            }, 1);

            // Fase 6: Testo che zooma verso l'utente (1.5-2.5s)
            tl.to(warpText, {
                scale: 5,
                opacity: 0,
                duration: 0.8,
                ease: 'power4.in'
            }, 2);

            // Fase 7: Flash bianco finale (2.3s)
            tl.to(this.overlay, {
                backgroundColor: 'white',
                duration: 0.2,
                ease: 'power2.in'
            }, 2.5);
        });
    }
}
/**
 * Estende la classe DoorsCarousel esistente
 * per aggiungere la navigazione verso la galleria
 */
class DoorConnectionManager {
    constructor() {
        this.hyperspeed = new HyperspeedTransition();
        this.setupEnterButton();
        this.setupKeyboardNavigation();
    }
    setupEnterButton() {
        const enterBtn = document.getElementById('door-enter');

        if (enterBtn) {
            // Rimuovi listener esistenti
            const newBtn = enterBtn.cloneNode(true);
            enterBtn.parentNode.replaceChild(newBtn, enterBtn);

            // Aggiungi nuovo listener
            newBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.enterCurrentGallery();
            });
        }
    }
    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            // Enter per entrare nella galleria corrente
            if (e.key === 'Enter' && this.isDoorsCarouselVisible()) {
                e.preventDefault();
                this.enterCurrentGallery();
            }
        });
    }
    isDoorsCarouselVisible() {
        const doorsSection = document.getElementById('doors');
        if (!doorsSection) return false;

        const rect = doorsSection.getBoundingClientRect();
        const viewHeight = window.innerHeight;

        return rect.top < viewHeight && rect.bottom > 0;
    }
    enterCurrentGallery() {
        // Ottieni la porta corrente dal carousel
        const carousel = window.doorsCarousel;

        if (!carousel) {
            console.warn('DoorsCarousel non trovato');
            // Fallback: usa il primo door della config
            this.navigateToGallery(GALLERY_CONFIG.doors[0]);
            return;
        }

        const currentDoorIndex = carousel.currentDoor;
        const doorConfig = GALLERY_CONFIG.doors[currentDoorIndex];

        if (!doorConfig) {
            console.warn('Configurazione porta non trovata per indice:', currentDoorIndex);
            return;
        }

        // Anima la porta nel carousel (se esiste il metodo)
        if (carousel.doors && carousel.doors[currentDoorIndex]) {
            const door = carousel.doors[currentDoorIndex];

            // Animazione apertura porta
            if (typeof gsap !== 'undefined') {
                gsap.to(door.doorPivot.rotation, {
                    y: -Math.PI / 2,
                    duration: 0.8,
                    ease: 'power2.inOut'
                });

                // Zoom camera
                gsap.to(carousel.camera.position, {
                    z: 2,
                    duration: 1,
                    ease: 'power2.in'
                });
            }
        }

        // Avvia transizione dopo breve delay per vedere apertura porta
        setTimeout(() => {
            this.navigateToGallery(doorConfig);
        }, 600);
    }
    navigateToGallery(doorConfig) {
        const lang = window.i18n ? window.i18n.currentLang : 'it';
        const galleryName = doorConfig.name[lang];

        this.hyperspeed.execute(
            galleryName,
            doorConfig.galleryUrl,
            doorConfig.color
        );
    }
}
// ============================================
// AUTO-INITIALIZATION
// ============================================
// Inizializza quando il DOM è pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDoorConnection);
} else {
    initDoorConnection();
}
function initDoorConnection() {
    // Attendi che il DoorsCarousel sia inizializzato
    const checkCarousel = setInterval(() => {
        if (window.doorsCarousel || document.getElementById('door-enter')) {
            clearInterval(checkCarousel);
            window.doorConnectionManager = new DoorConnectionManager();
            console.log('🚪 Door Connection Manager inizializzato');
        }
    }, 100);

    // Timeout dopo 5 secondi
    setTimeout(() => {
        clearInterval(checkCarousel);
        if (!window.doorConnectionManager) {
            // Inizializza comunque se il carousel non è stato trovato
            window.doorConnectionManager = new DoorConnectionManager();
            console.log('🚪 Door Connection Manager inizializzato (fallback)');
        }
    }, 5000);
}
// ============================================
// ESPORTAZIONI (per uso modulare)
// ============================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        GALLERY_CONFIG,
        HyperspeedTransition,
        DoorConnectionManager
    };
}
