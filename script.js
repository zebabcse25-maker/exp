const bookingForm = document.getElementById("bookingForm");

if(bookingForm){

bookingForm.addEventListener("submit", function(e){
e.preventDefault();

let userName = document.getElementById("name").value;

document.getElementById("message").innerHTML =
"Booking Confirmed for " + userName;

this.reset();
});

}
