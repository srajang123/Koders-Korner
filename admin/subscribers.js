let a = document.querySelectorAll('.subscribers table tr');
for (i = 1; i < a.length; i++) {
    a[i].children[0].innerHTML = i;
    a[i].children[3].innerHTML = '<a href="/subscriber/remove/' + a[i].children[2].innerHTML + '/">Remove</a>';
}
document.querySelector('.btn').addEventListener('click', r => {
    document.querySelector('.subscribers').style.visibility = 'hidden';
    document.querySelector('.message').style.visibility = 'visible';
    document.querySelector('.msg button').style.visibility = 'hidden';
})

function subsClose() {
    document.querySelector('.subscribers').style.visibility = 'visible';
    document.querySelector('.message').style.visibility = 'hidden';
    document.querySelector('.msg button').style.visibility = 'visible';
}
document.onkeydown = function(evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key === "Escape" || evt.key === "Esc");
    } else {
        isEscape = (evt.keyCode === 27);
    }
    if (isEscape) {
        subsClose();
    }
};

function subscribers() {
    if (document.querySelector('#subject').value == "")
        return subMailError('Please provide the subject of the E-mail');
    else if (document.querySelector('#body').value == "")
        return subMailError('Please provide the body of the E-mail');
    else
        return true;
}
let subMailError = (msg) => {
    document.querySelector('.error h2').innerHTML = msg;
    let a = setTimeout(() => {
        document.querySelector('.error h2').innerHTML = '&nbsp;';
    }, 2000);
    return false;
}