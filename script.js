document.addEventListener("DOMContentLoaded", function(){

const bookingForm = document.getElementById("bookingForm");
const nameInput = document.getElementById("name");
const message = document.getElementById("message");

if(bookingForm){
bookingForm.addEventListener("submit", function(e){

e.preventDefault();

message.innerHTML = "Booking Confirmed for " + nameInput.value;

this.reset();

});
}

});
