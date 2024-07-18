
// List of YouTube videos with URLs, titles, and categories
const videos = [
    { url: 'https://www.youtube.com/watch?v=DYav0hb9piY', title: 'SaaS Full Tech Stack breakdown', category: 'SaaS' },
    { url: 'https://www.youtube.com/watch?v=jaDuld1W73A', title: 'SaaS Case Study 1', category: 'SaaS' },
    { url: 'https://www.youtube.com/watch?v=QxHE4af5BQE', title: 'Web Scraping for LLMs', category: 'LLM' },
    { url: 'https://www.youtube.com/watch?v=jmPE5c5R7eo', title: 'SaaS Case Study 2', category: 'SaaS' },
    { url: 'https://www.youtube.com/watch?v=ffcTwHZRhSk', title: 'How to find strangers/Farza life', category: 'BuildSpace' },
    { url: 'https://www.youtube.com/watch?v=u8sW-NhGfXw', title: '1M Crypto SaaS', category: 'SaaS' },
    { url: 'https://www.youtube.com/watch?v=SaZttbQUjLI', title: 'Solopreneur Breakdown/How to start', category: 'Solopreneur' },
    { url: 'https://www.youtube.com/watch?v=_xdTLNgc1Fc', title: 'sol rng dev', category: 'Roblox Dev' },
    { url: 'https://www.youtube.com/watch?v=4GwUOxm3OSg', title: 'Building business online', category: 'Solopreneur' },
    { url: 'https://www.youtube.com/watch?v=zToKI65doDk', title: '$200,000 in 15 months', category: 'Startup' },
    { url: 'https://www.youtube.com/watch?v=yreUsrL_Vks', title: '$65,000 AI startup', category: 'Startup' },
    { url: 'https://www.youtube.com/watch?v=rVI1buMGqZU', title: 'Object detection ml5.js p5.js', category: 'Code' },
    // Add or remove videos as needed
];

function getYouTubeEmbedUrl(url) {
    const videoId = url.split('v=')[1];
    return `https://www.youtube.com/embed/${videoId}`;
}

function createVideoElement(video) {
    const embedUrl = getYouTubeEmbedUrl(video.url);
    return `
                <div class="video-item">
                    <div class="video-container">
                        <iframe src="${embedUrl}" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div class="video-title">${video.title}</div>
                </div>
            `;
}

function populateCategories(filteredVideos = videos) {
    const container = document.getElementById('categoryContainer');
    container.innerHTML = ''; // Clear existing content
    const categories = [...new Set(filteredVideos.map(video => video.category))];

    categories.forEach(category => {
        const categoryVideos = filteredVideos.filter(video => video.category === category);
        const categoryHTML = `
                    <div class="category">
                        <h2 class="category-title">${category}</h2>
                        ${categoryVideos.map(createVideoElement).join('')}
                    </div>
                `;
        container.innerHTML += categoryHTML;
    });
}

function filterVideos() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredVideos = videos.filter(video =>
        video.title.toLowerCase().includes(searchTerm)
    );
    populateCategories(filteredVideos);
}

// Initialize the page
window.onload = () => {
    populateCategories();
    document.getElementById('searchInput').addEventListener('input', filterVideos);
};
