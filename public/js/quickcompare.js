function toggleContainer() {
    var container = document.querySelector('.containers');
    var icon = document.getElementById('toggle-icon');
    if (container.style.maxHeight === "120px") {
        container.style.maxHeight = "1000px"; // Set back to default height
        icon.innerHTML = " &#8593;"; // Show ">" when collapsed
    } else {
        container.style.maxHeight = "120px"; // Collapse container
        icon.innerHTML = " &#8595;"; // Show "<" when expanded
    }
}