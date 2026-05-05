document.addEventListener("DOMContentLoaded", function(){

const bookingForm = document.getElementById("bookingForm");
const nameInput = document.getElementById("name");
const message = document.getElementById("message");

if(bookingForm){

let savedName = localStorage.getItem("bookedName");

if(savedName){
message.innerHTML = "Booking Confirmed for " + savedName;
}

bookingForm.addEventListener("submit", function(e){

e.preventDefault();

let userName = nameInput.value;

localStorage.setItem("bookedName", userName);

message.innerHTML = "Booking Confirmed for " + userName;

this.reset();

});

}

});
