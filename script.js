console.log("SCRIPT LOADED");

/* ================= CAFE TABLE BOOKING ================= */

const reserveForm = document.getElementById("reserveForm");

if (reserveForm) {

    reserveForm.addEventListener("submit", function (e) {

        e.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let date = document.getElementById("date").value;
        let time = document.getElementById("time").value;
        let guests = document.getElementById("guests").value;

        let whatsappNumber = "918287468765";

        let message =
            "New Table Reservation:%0A" +
            "Name: " + name + "%0A" +
            "Email: " + email + "%0A" +
            "Date: " + date + "%0A" +
            "Time: " + time + "%0A" +
            "Guests: " + guests;

        let whatsappURL =
            "https://wa.me/" + whatsappNumber + "?text=" + message;

        window.open(whatsappURL, "_blank");

    });

}

/* ================= ROOM BOOKING ================= */

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

    let url =
        `https://wa.me/918287468765?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");

}

/* ================= DISABLE PAST DATES ================= */

document.addEventListener("DOMContentLoaded", function () {

    const today = new Date().toISOString().split("T")[0];

    const checkin = document.getElementById("checkin");
    const checkout = document.getElementById("checkout");

    if (checkin && checkout) {

        checkin.min = today;
        checkout.min = today;

        checkin.addEventListener("change", function () {

            checkout.min = this.value;

            if (checkout.value && checkout.value <= this.value) {

                checkout.value = "";

            }

        });

    }

});