// Album Data
const albums = [
    {
        id: 'jeju',
        title: '제주도 여행',
        desc: '바다와 바람이 좋았던 날',
        photos: [
            'images/jeju/jeju1.JPG',
            'images/jeju/jeju2.JPG',
            'images/jeju/jeju3.JPG'
        ]
    },
    {
        id: 'camping',
        title: '가족 캠핑',
        desc: '별이 빛나는 밤에',
        photos: [
            'images/camping/camping1.jpg',
            'images/camping/camping2.jpg'
        ]
    },
    {
        id: 'daily',
        title: '소소한 일상',
        desc: '평범하지만 행복한',
        photos: [
            'images/daily1.jpg',
            'images/daily2.jpg',
            'images/daily3.jpg',
            'images/daily4.jpg'
        ]
    }
];

// Portfolio Data
const portfolios = [
    {
        title: 'Standard Cell Development',
        desc: 'Samsung Foundary 제품 탑제 Primitive cell 개발',
        icon: '💻',
        color: '#FFD166',
        content: `
            <h3>Project Overview</h3>
            <p>This project automates semiconductor layout design tasks using KLayout's Python/Ruby API.</p>
            <ul>
                <li>Automated DRC/LVS checks</li>
                <li>Custom pattern generation</li>
                <li>Batch processing of GDS/OASIS files</li>
            </ul>
            <h3>Results</h3>
            <p>Reduced manual design time by 40% and minimized human errors.</p>
        `
    },
    {
        title: 'Standard Cell Physical Design Automation',
        desc: 'Standard cell 개발 표준화 및 자동화 솔루션 구축',
        icon: '🔧',
        color: '#06D6A0',
        content: `
            <h3>Project Overview</h3>
            <p>Description of the second project goes here.</p>
            <ul>
                <li>Feature 1</li>
                <li>Feature 2</li>
            </ul>
            <p>Details about results.</p>
        `
    },
    {
        title: 'Standard Cell Physical QA Solutions',
        desc: 'Standard cell Quality Assurance 솔루션 개발',
        icon: '🚀',
        color: '#118AB2',
        content: `
            <h3>Project Overview</h3>
            <p>Description of the third project.</p>
            <p>Details about the tech stack and outcomes.</p>
        `
    }
];

// Books Data
const books = [
    {
        title: '클린 코드',
        author: '로버트 C. 마틴',
        cover: 'https://placehold.co/250x350/118AB2/ffffff?text=Clean+Code',
        rating: 5,
        summary: '좋은 코드를 작성하기 위한 원칙과 실천 방법',
        content: `
            <div class="book-detail-cover">
                <img src="https://placehold.co/250x350/118AB2/ffffff?text=Clean+Code" alt="클린 코드">
            </div>
            <div class="book-detail-text">
                <h3>📖 책 소개</h3>
                <p>좋은 코드를 작성하기 위한 원칙과 실천 방법을 다룹니다.</p>
                <h3>💡 핵심 깨달음</h3>
                <ul>
                    <li>의도가 드러나는 코드를 작성하라</li>
                    <li>함수는 작게, 더 작게</li>
                    <li>주석은 나쁜 코드를 보완하지 못한다</li>
                </ul>
                <div class="highlight-quote">
                    "뒤엉킨 코드는 기능을 추가하거나 변경하기 어렵게 만든다."
                </div>
                <h3>📝 나의 생각</h3>
                <p>실무에서 바로 적용할 수 있는 내용들이 많아서 좋았습니다. 특히 네이밍 규칙과 함수 분할 원칙은 매일 참고하고 있습니다.</p>
            </div>
        `
    },
    {
        title: '도서 제목 2',
        author: '저자 이름',
        cover: 'https://placehold.co/250x350/06D6A0/ffffff?text=Book+2',
        rating: 4,
        summary: '두 번째 책에 대한 짧은 소개',
        content: `
            <div class="book-detail-cover">
                <img src="https://placehold.co/250x350/06D6A0/ffffff?text=Book+2" alt="도서 2">
            </div>
            <div class="book-detail-text">
                <h3>📖 책 소개</h3>
                <p>책에 대한 간략한 소개를 적습니다.</p>
                <h3>💡 핵심 깨달음</h3>
                <ul>
                    <li>첫 번째 깨달음</li>
                    <li>두 번째 깨달음</li>
                </ul>
                <div class="highlight-quote">
                    "인용구를 여기에 적어보세요."
                </div>
                <h3>📝 나의 생각</h3>
                <p>이 책에 대한 개인적인 리뷰를 적습니다.</p>
            </div>
        `
    }
];

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Navigation Logic
    const navLinks = document.querySelectorAll('.nav-links a');
    const logoBtn = document.getElementById('logo-btn');

    const resetViews = () => {
        // Family album reset
        const albumViewer = document.getElementById('album-viewer');
        const albumsContainer = document.getElementById('albums-container');
        if(albumViewer) albumViewer.style.display = 'none';
        if(albumsContainer) albumsContainer.style.display = 'grid';

        // Portfolio detail reset
        const portfolioDetailView = document.getElementById('portfolio-detail-view');
        const portfolioContainer = document.getElementById('portfolio-container');
        if(portfolioDetailView) portfolioDetailView.style.display = 'none';
        if(portfolioContainer) portfolioContainer.style.display = 'grid';

        // Book detail reset
        const bookDetailView = document.getElementById('book-detail-view');
        const booksContainer = document.getElementById('books-container');
        if(bookDetailView) bookDetailView.style.display = 'none';
        if(booksContainer) booksContainer.style.display = 'grid';
    };

    const handleHomeClick = (e) => {
        e.preventDefault();
        resetViews();
        document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
    };

    if(logoBtn) logoBtn.addEventListener('click', handleHomeClick);

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetId === 'home') resetViews();
            
            if (targetSection) targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // 2. Album Rendering
    const albumsContainer = document.getElementById('albums-container');
    const albumViewer = document.getElementById('album-viewer');
    const viewerTitle = document.getElementById('viewer-title');
    const photosContainer = document.getElementById('photos-container');
    const backBtn = document.getElementById('back-btn');

    function renderAlbums() {
        if(!albumsContainer) return;
        albumsContainer.innerHTML = '';
        albums.forEach(album => {
            const card = document.createElement('div');
            card.className = 'album-card';
            card.onclick = () => openAlbum(album);
            card.innerHTML = `
                <div class="album-cover">
                    <img src="${album.photos[0]}" alt="${album.title}" onerror="this.src='https://placehold.co/400x300/FFD166/ffffff?text=${album.title}'">
                    <span class="album-badge">${album.photos.length} Photos</span>
                </div>
                <div class="album-info">
                    <h3>${album.title}</h3>
                    <p>${album.desc}</p>
                </div>
            `;
            albumsContainer.appendChild(card);
        });
    }

    function openAlbum(album) {
        if(!albumViewer) return;
        albumsContainer.style.display = 'none';
        albumViewer.style.display = 'block';
        viewerTitle.textContent = album.title;
        photosContainer.innerHTML = '';
        
        album.photos.forEach(photoSrc => {
            const item = document.createElement('div');
            item.className = 'photo-item';
            item.onclick = () => openLightbox(photoSrc, album.title);
            item.innerHTML = `<img src="${photoSrc}" alt="Photo" onerror="this.src='https://placehold.co/300x300/118AB2/ffffff?text=Photo'">`;
            photosContainer.appendChild(item);
        });
    }

    if(backBtn) backBtn.addEventListener('click', () => {
        albumViewer.style.display = 'none';
        albumsContainer.style.display = 'grid';
    });

    renderAlbums();

    // 3. Portfolio Rendering
    const portfolioContainer = document.getElementById('portfolio-container');
    const portfolioDetailView = document.getElementById('portfolio-detail-view');
    const portfolioDetailTitle = document.getElementById('portfolio-detail-title');
    const portfolioDetailContent = document.getElementById('portfolio-detail-content');
    const portfolioBackBtn = document.getElementById('portfolio-back-btn');

    function renderPortfolios() {
        if(!portfolioContainer) return;
        portfolioContainer.innerHTML = '';
        portfolios.forEach(item => {
            const card = document.createElement('div');
            card.className = 'portfolio-card';
            card.onclick = () => openPortfolio(item);
            card.innerHTML = `
                <div class="card-image" style="background-color: ${item.color};">
                    <span>${item.icon}</span>
                </div>
                <div class="card-info">
                    <h3>${item.title}</h3>
                    <p>${item.desc}</p>
                </div>
            `;
            portfolioContainer.appendChild(card);
        });
    }

    function openPortfolio(item) {
        if(!portfolioDetailView) return;
        portfolioContainer.style.display = 'none';
        portfolioDetailView.style.display = 'block';
        portfolioDetailTitle.textContent = item.title;
        portfolioDetailContent.innerHTML = item.content;
    }

    if(portfolioBackBtn) portfolioBackBtn.addEventListener('click', () => {
        portfolioDetailView.style.display = 'none';
        portfolioContainer.style.display = 'grid';
    });

    renderPortfolios();

    // 4. Books Rendering
    const booksContainer = document.getElementById('books-container');
    const bookDetailView = document.getElementById('book-detail-view');
    const bookDetailTitle = document.getElementById('book-detail-title');
    const bookDetailContent = document.getElementById('book-detail-content');
    const bookBackBtn = document.getElementById('book-back-btn');

    function renderBooks() {
        if(!booksContainer) return;
        booksContainer.innerHTML = '';
        books.forEach(book => {
            const card = document.createElement('div');
            card.className = 'book-card';
            card.onclick = () => openBook(book);
            const stars = '⭐'.repeat(book.rating);
            card.innerHTML = `
                <div class="book-cover">
                    <img src="${book.cover}" alt="${book.title}" onerror="this.src='https://placehold.co/250x350/FFD166/ffffff?text=${book.title}'">
                </div>
                <div class="book-info">
                    <h3>${book.title}</h3>
                    <p class="book-author">${book.author}</p>
                    <p class="book-summary">${book.summary}</p>
                    <p class="book-rating">${stars}</p>
                </div>
            `;
            booksContainer.appendChild(card);
        });
    }

    function openBook(book) {
        if(!bookDetailView) return;
        booksContainer.style.display = 'none';
        bookDetailView.style.display = 'block';
        bookDetailTitle.textContent = book.title;
        bookDetailContent.innerHTML = book.content;
    }

    if(bookBackBtn) bookBackBtn.addEventListener('click', () => {
        bookDetailView.style.display = 'none';
        booksContainer.style.display = 'grid';
    });

    renderBooks();

    // 5. Lightbox Logic
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const captionText = document.getElementById('caption-text');
    const closeBtn = document.querySelector('.close-btn');

    function openLightbox(src, caption) {
        lightbox.style.display = 'block';
        lightboxImg.src = src;
        captionText.innerHTML = caption;
    }

    closeBtn.addEventListener('click', () => lightbox.style.display = 'none');
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) lightbox.style.display = 'none';
    });

    // 6. Header Scroll Effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        }
    });
});
