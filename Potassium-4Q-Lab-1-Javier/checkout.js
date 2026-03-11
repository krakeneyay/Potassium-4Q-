const QUERY = window.location.search;
const PARAMS = new URLSearchParams(QUERY)


function checkOut() {
    let name = PARAMS.get("name");
    document.getElementById("greetings").innerText = `Hello, ${name}!`;

    let apple = PARAMS.get("apple");
    document.getElementById("apple").innerText = `You purchased ${apple} pcs of apple.`;

    let juice = PARAMS.get("juice");
    document.getElementById("juice").innerText = `You purchased ${juice} pcs of juice.`;

    let result = (((apple) * 40) + ((juice) * 20));
    document.getElementById("result").innerText = `Your total is ${result} pesos.`;

    let pay = PARAMS.get("pay");
    document.getElementById("pay").innerText = `You paid ${pay} pesos.`;

    let change = pay - result;
    if (pay < result) {
        change = document.getElementById("change").innerText = "Your money is not enough.";
    } else if (pay > result) {
        document.getElementById("change").innerText = `Your change is ${change} pesos.`;
    }
}
