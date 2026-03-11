function validInformation() {
    let name = document.forms["information"]["name"].value;
    if (name.trim() === "") {
        alert("Username is empty!");
        return false;
    }
}
