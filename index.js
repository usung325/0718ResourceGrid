// List of resources (videos and articles) with URLs, titles, and categories
const resources = [
    { type: 'video', url: 'https://www.youtube.com/watch?v=DYav0hb9piY', title: 'SaaS Full Tech Stack breakdown', category: 'SaaS' },
    { type: 'video', url: 'https://www.youtube.com/watch?v=jaDuld1W73A', title: 'SaaS Case Study 1', category: 'SaaS' },
    { type: 'video', url: 'https://www.youtube.com/watch?v=QxHE4af5BQE', title: 'Web Scraping for LLMs', category: 'LLM' },
    { type: 'video', url: 'https://www.youtube.com/watch?v=jmPE5c5R7eo', title: 'SaaS Case Study 2', category: 'SaaS' },
    { type: 'video', url: 'https://www.youtube.com/watch?v=ffcTwHZRhSk', title: 'How to find strangers/Farza life', category: 'BuildSpace' },
    { type: 'video', url: 'https://www.youtube.com/watch?v=u8sW-NhGfXw', title: '1M Crypto SaaS', category: 'SaaS' },
    { type: 'video', url: 'https://www.youtube.com/watch?v=SaZttbQUjLI', title: 'Solopreneur Breakdown/How to start', category: 'Solopreneur' },
    { type: 'video', url: 'https://www.youtube.com/watch?v=_xdTLNgc1Fc', title: 'sol rng dev', category: 'Roblox Dev' },
    { type: 'video', url: 'https://www.youtube.com/watch?v=4GwUOxm3OSg', title: 'Building business online', category: 'Solopreneur' },
    { type: 'video', url: 'https://www.youtube.com/watch?v=zToKI65doDk', title: '$200,000 in 15 months', category: 'Startup' },
    { type: 'video', url: 'https://www.youtube.com/watch?v=yreUsrL_Vks', title: '$65,000 AI startup', category: 'Startup' },
    { type: 'video', url: 'https://www.youtube.com/watch?v=rVI1buMGqZU', title: 'Object detection ml5.js p5.js', category: 'Code' },
    { type: 'article', url: 'https://esportsinsider.com/2021/10/riot-games-kanga', title: 'Farza Kanga Riot', category: 'BuildSpace' },
];

function getYouTubeEmbedUrl(url) {
    const videoId = url.split('v=')[1];
    return `https://www.youtube.com/embed/${videoId}`;
}

function createResourceElement(resource) {
    if (resource.type === 'video') {
        const embedUrl = getYouTubeEmbedUrl(resource.url);
        return `
            <div class="resource-item video-item">
                <div class="video-container">
                    <iframe src="${embedUrl}" frameborder="0" allowfullscreen></iframe>
                </div>
                <div class="resource-title">${resource.title}</div>
            </div>
        `;
    } else if (resource.type === 'article') {
        return `
            <div class="resource-item article-item">
                <a href="${resource.url}" target="_blank" class="article-link">
                    <div class="article-icon">📄</div>
                    <div class="resource-title">${resource.title}</div>
                </a>
            </div>
        `;
    }
}

function populateCategories(filteredResources = resources) {
    const container = document.getElementById('categoryContainer');
    container.innerHTML = ''; // Clear existing content
    const categories = [...new Set(filteredResources.map(resource => resource.category))];

    categories.forEach(category => {
        const categoryResources = filteredResources.filter(resource => resource.category === category);
        const categoryHTML = `
            <div class="category">
                <h2 class="category-title">${category}</h2>
                ${categoryResources.map(createResourceElement).join('')}
            </div>
        `;
        container.innerHTML += categoryHTML;
    });
}

function filterResources() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredResources = resources.filter(resource =>
        resource.title.toLowerCase().includes(searchTerm)
    );
    populateCategories(filteredResources);
}

// Initialize the page
window.onload = () => {
    populateCategories();
    document.getElementById('searchInput').addEventListener('input', filterResources);
};