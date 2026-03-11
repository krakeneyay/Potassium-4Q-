const QUERY = window.location.search;
const PARAMS = new URLSearchParams(QUERY);

function processData() {
    let username = PARAMS.get("username");
    document.getElementById("greetings").innerText = `Hello, ${username}`;

    let money = PARAMS.get("money");
    document.getElementById("money").innerText = `You paid Php ${money} `;

    let apple = PARAMS.get("apple")

    let juice = PARAMS.get("juice")

    let change = money - (apple*60 + juice*60)

    let result = (change);
    if (result >= 0) {
        result = "Thank you for shopping."
    } else {
        result = "Pay up!"
    }

    document.getElementById("result").innerText = `${result}`
}