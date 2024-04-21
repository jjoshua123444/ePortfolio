document.addEventListener("scroll", function() {
    var button = document.getElementById("back-to-top-button");
    if (window.pageYOffset > 300) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
});
