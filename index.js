function checkSubscribers() {
    if (document.querySelector('#name').value === "") {
        return error("Please Enter your Name");
    } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.querySelector('#email').value))) {
        return error("Please Enter Valid E-mail");
    }
    subscribeMSG();
    return false;
}

function subscribeMSG() {
    alert("Thanks for subscribing with US");
    document.querySelector('.subscribe').style.visibility = "collapse";
    return true;
}

function error(err) {
    alert(err);
    return false;
}