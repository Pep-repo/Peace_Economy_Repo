function toggleText() {
    var moreText = document.getElementById("more-text");
    var btnText = document.getElementById("toggleButton");

    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        btnText.textContent = "Read Less"; // Change button text to "Read Less"
    } else {
        moreText.style.display = "none";
        btnText.textContent = "Read More"; // Change button text to "Read More"
    }
}
