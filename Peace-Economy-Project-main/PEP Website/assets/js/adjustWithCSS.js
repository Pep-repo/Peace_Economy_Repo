function toggleText(button) {
    var article = button.closest('.post');
    
    // Toggle the 'show-more' class on the article
    article.classList.toggle('show-more');

    // Update the button text based on the article's class
    if (article.classList.contains('show-more')) {
        button.textContent = "Read Less"; // Change button text to "Read Less"
    } else {
        button.textContent = "Read More"; // Change button text to "Read More"
    }
}
