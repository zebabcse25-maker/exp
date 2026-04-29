// Navigation function - JavaScript se page navigate karega
function navigateTo(page) {
    window.location.href = page;
}

// Confirm order function
function confirmOrder() {
    let username = document.getElementById("name").value;

    document.getElementById("msg").innerHTML =
    "✅ Thank You " + username + "! Your table booking is confirmed.";

    return false;
}
