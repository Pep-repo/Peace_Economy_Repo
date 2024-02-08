document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('query').toLowerCase();

    if (query) {
        const articles = document.querySelectorAll('.post');
        articles.forEach(article => {
            // Include both visible and hidden text for search
            const visibleText = article.innerText.toLowerCase();
            const hiddenText = article.querySelector('.more-text') ? article.querySelector('.more-text').textContent.toLowerCase() : '';
            const combinedText = visibleText + " " + hiddenText;

            if (!combinedText.includes(query)) {
                article.style.display = 'none';
            }
        });
    }
});