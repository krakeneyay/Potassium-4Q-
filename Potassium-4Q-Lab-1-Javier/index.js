function validateForm() {
    let username = document.forms["checkout-form"]["username"].value = username.trim();
    if (username.trim() === "") {
        alert("Enter name!");
        return false;
    }

    return true;
}
