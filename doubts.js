function doubts() {
    console.log();
    if (document.querySelector('#name').value == "") {
        return error("Please Enter Your Name");
    } else if (document.querySelector('#email').value == "") {
        return error("Please Enter Your E-Mail");
    } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.querySelector('#email').value))) {
        return error("Please Enter Valid E-Mail");
    } else if (document.querySelector('#link').value == "") {
        return error("Please Enter Your Problem Link");
    } else if (document.querySelector('#lang').value == "-1") {
        return error("Please Select poreferred langauge");
    } else if (document.querySelector('#doubt').value == "") {
        return error("Please provide Your Doubt regarding problem");
    }
    return true;
}