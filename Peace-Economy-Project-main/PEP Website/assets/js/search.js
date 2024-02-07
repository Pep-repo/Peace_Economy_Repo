document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('query').toLowerCase();

    if (query) {
        const articles = document.querySelectorAll('.post');
        articles.forEach(article => {
            const articleText = article.innerText.toLowerCase();
            if (!articleText.includes(query)) {
                article.style.display = 'none';
            }
        });
    }
});