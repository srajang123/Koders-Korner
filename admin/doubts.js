let l = document.querySelectorAll('tr.doubt-show');
console.log(l);
for (i = 1; i < l.length; i++) {
    l[i].children[0].innerHTML = i;
    console.log(l[i].children[0]);
}
let x = document.querySelectorAll('.doubt');
x.forEach(el => {
    el.addEventListener('click', e => {
        let b = el.parentNode.children[0].value;
        console.log(b);
        b = JSON.parse(b);
        console.log(b);
        let name, mail, link, lang, doubt;
        name = b.name;
        mail = b.email;
        link = b.link;
        lang = b.language;
        doubt = b.doubt;
        document.querySelector('.message').style.visibility = "visible";
        document.querySelector('.subscribers').style.visibility = "hidden";
        document.querySelector('#name').value = name;
        document.querySelector('#email').value = mail;
        document.querySelector('#doubt').value = doubt;
        document.querySelectorAll('tr.doubt-field')[2].children[1].innerHTML = '<input type="hidden" name="link" value="' + link + '">' + '<a href="' + link + '">Open Problem</a>';
    })
});
document.onkeydown = function(evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key === "Escape" || evt.key === "Esc");
    } else {
        isEscape = (evt.keyCode === 27);
    }
    if (isEscape) {
        closeDoubt();
    }
};
let closeDoubt = () => {
    document.querySelector('.message').style.visibility = "hidden";
    document.querySelector('.subscribers').style.visibility = "visible";
}