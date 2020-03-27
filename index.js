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

let error = (msg) => {
    document.querySelector('.error h2').innerHTML = '!! ' + msg + ' !!';
    let a = setTimeout(() => {
        document.querySelector('.error h2').innerHTML = '&nbsp;';
    }, 2000);
    return false;
}
document.querySelector('#name').addEventListener('keyup', (e) => {
    document.querySelector('#name').value = document.querySelector('#name').value.toUpperCase();
});