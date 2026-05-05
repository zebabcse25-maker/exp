document.addEventListener("DOMContentLoaded", function () {

const form = document.getElementById("bookingForm");
const nameInput = document.getElementById("name");
const message = document.getElementById("message");

if(form){

let savedName = localStorage.getItem("bookedName");

if(savedName){
message.innerHTML = "Booking Confirmed for " + savedName;
}

form.addEventListener("submit", function(e){
e.preventDefault();

let userName = nameInput.value;

localStorage.setItem("bookedName", userName);

message.innerHTML = "Booking Confirmed for " + userName;

form.reset();
});

}

});
