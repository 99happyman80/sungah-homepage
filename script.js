// Album Data (Add your albums here)
const albums = [
    {
        id: 'jeju',
        title: '제주도 여행',
        desc: '바다와 바람이 좋았던 날',
        cover: 'images/jeju_cover.jpg',
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
        cover: 'images/camping_cover.jpg',
        photos: [
            'images/camping/camping1.jpg',
            'images/camping/camping2.jpg'
        ]
    },
    {
        id: 'daily',
        title: '소소한 일상',
        desc: '평범하지만 행복한',
        cover: 'images/daily_cover.jpg',
        photos: [
            'images/daily1.jpg',
            'images/daily2.jpg',
            'images/daily3.jpg',
            'images/daily4.jpg'
        ]
    }
];

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    
    // 2. Album Logic
    const albumsContainer = document.getElementById('albums-container');
    const albumViewer = document.getElementById('album-viewer');
    const viewerTitle = document.getElementById('viewer-title');
    const photosContainer = document.getElementById('photos-container');
    const backBtn = document.getElementById('back-btn');

    // 1. Smooth Scrolling for Nav Links & Logo
    const navLinks = document.querySelectorAll('.nav-links a');
    const logoBtn = document.getElementById('logo-btn');

    const resetAlbumView = () => {
        albumViewer.style.display = 'none';
        albumsContainer.style.display = 'grid';
    };

    const handleHomeClick = (e) => {
        e.preventDefault();
        resetAlbumView();
        document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
    };

    logoBtn.addEventListener('click', handleHomeClick);

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetId === 'home') {
                resetAlbumView();
            }
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Render Albums
    function renderAlbums() {
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

    // Open Album
    function openAlbum(album) {
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

    // Back to List
    backBtn.addEventListener('click', () => {
        albumViewer.style.display = 'none';
        albumsContainer.style.display = 'grid';
    });

    renderAlbums();

    // 3. Lightbox for Gallery Images
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

    // 4. Simple Header Scroll Effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        }
    });
});
