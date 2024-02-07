function toggleText(button) {
    // Find the closest article ancestor of the button
    var article = button.closest('.post');
    
    // Within this article, find the .more-text span
    var moreText = article.querySelector('.more-text');

    // Toggle the display of the .more-text span and button text
    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        button.textContent = "Read Less"; // Change button text to "Read Less"
    } else {
        moreText.style.display = "none";
        button.textContent = "Read More"; // Change button text to "Read More"
    }
}
