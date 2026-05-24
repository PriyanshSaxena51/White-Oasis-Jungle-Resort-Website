document.getElementById("reserveForm").addEventListener("submit", function (e) {
    e.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var guests = document.getElementById("guests").value;

    var whatsappNumber = "918287468765"; // Replace with your WhatsApp number

    var message =
        "New Table Reservation:%0A" +
        "Name: " + name + "%0A" +
        "Email: " + email + "%0A" +
        "Date: " + date + "%0A" +
        "Time: " + time + "%0A" +
        "Guests: " + guests;

    var whatsappURL = "https://wa.me/" + whatsappNumber + "?text=" + message;

    window.open(whatsappURL, "_blank");
});

function sendRoomBooking() {

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let checkin = document.getElementById("checkin").value;
    let checkout = document.getElementById("checkout").value;
    let guests = document.getElementById("guests").value;
    let room = document.getElementById("room").value;

    if (!name || !phone || !checkin || !checkout) {
        alert("Please fill all fields");
        return;
    }

    let message = `🏨 White Oasis Resort Room Booking

Name: ${name}
Phone: ${phone}
Check-in: ${checkin}
Check-out: ${checkout}
Guests: ${guests}
Room: ${room}`;

    let url = `https://wa.me/918287468765?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
}