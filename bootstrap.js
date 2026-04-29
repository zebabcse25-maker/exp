
// Reservation form confirm function
function confirmOrder() {
    let username = document.getElementById("name").value.trim();

    if(username === "") {
        alert("Please enter your name!");
        return false;
    }

    document.getElementById("msg").innerHTML =
        "✅ Thank You " + username + "! Your table booking is confirmed.";

    return false; // page reload hone se rokta hai
}
