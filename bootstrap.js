

// Confirm order function
function confirmOrder() {
    let username = document.getElementById("name").value;

    document.getElementById("msg").innerHTML =
    "✅ Thank You " + username + "! Your table booking is confirmed.";

    return false;
}
