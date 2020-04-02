function doubts() {
    console.log('Hello');
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
let error = (msg) => {
    document.querySelector('.error h2').innerHTML = '!! ' + msg + ' !!';
    let a = setTimeout(() => {
        document.querySelector('.error h2').innerHTML = '&nbsp;';
    }, 2000);
    return false;
}