console.log("JS OK!")

const kmInput = document.getElementById("km_input");
const ageInput = document.getElementById("age_input");

const ticketGeneratorButton = document.getElementById("ticket_generator");

ticketGeneratorButton.addEventListener("click",
    function () {
        const kmValue = parseInt(kmInput.value);
        const ageValue = parseInt(ageInput.value);
        let ticketPrice = (kmValue * 0.21);
        if (!isNaN(kmValue) && !isNaN(ageValue)) {
            let ticketPriceCurrent = 0;
            if (ageValue < 18) {
                ticketPriceCurrent = ticketPrice * 4 / 5;
            } else if (ageValue > 64) {
                ticketPriceCurrent = ticketPrice * 3 / 5;
            } else {
                ticketPriceCurrent = ticketPrice;
            }
            document.getElementById("ticket_price").innerHTML = ticketPriceCurrent.toFixed(2) + " Euro";
        }
        else {
            document.getElementById("ticket_price").innerHTML = "Non hai inserito un numero!";
        }
    }
)


const nameInput = document.getElementById("name_input");

ticketGeneratorButton.addEventListener("click",
    function () {
        const nameValue = nameInput.value;
        document.getElementById("customer_name").innerHTML = nameValue;
    }
)


ticketGeneratorButton.addEventListener("click",
    function () {
        let wagonRandom = Math.floor(Math.random() * 10);
        document.getElementById("wagon_number").innerHTML = wagonRandom;
    }
)

ticketGeneratorButton.addEventListener("click",
    function () {
        let codeRandom = Math.floor(Math.random() * 10001);
        document.getElementById("code_number").innerHTML = codeRandom;
    }
)

ticketGeneratorButton.addEventListener("click",
    function () {
        document.getElementById("ticket_display").classList.add("d-block");
    }
)