let close = document.querySelector('.meminfo .close button');
close.addEventListener('click', e => {
    //document.querySelector('.meminfo').style.visibility = "Hidden";
    closer();
})
let profile = document.querySelectorAll('.member');
profile.forEach(el => {
        el.addEventListener('click', e => {
            document.querySelector('.meminfo').style.visibility = "Visible";
        })
    })
    //if(document.querySelector('.meminfo').style.visibility == "Visible" && )
function closer() {
    document.querySelector('.meminfo').style.visibility = "Hidden";
    document.querySelector('.meminfo .mem-name').innerHTML = "";
    document.querySelector('.meminfo .mem-img').innerHTML = "";
    document.querySelector('.meminfo .mem-profiles').innerHTML = "";
    document.querySelector('.meminfo .mem-achi').innerHTML = "";
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
        //document.querySelector('.meminfo').style.visibility = "Hidden"
        closer();
    }
};
let a = document.querySelector('.mem1');
let b, c;
a.addEventListener('click', e => {
    b = a.children[2].value;
    console.log(b);
    b = JSON.parse(b);
    console.log(b);
    document.querySelector('.meminfo .mem-name').innerHTML = b.name;
    document.querySelector('.meminfo .mem-img').innerHTML = '<img src="../img/srajan.jpg" height=100px width=60px>';
    c = b.profiles;
    document.querySelector('.meminfo .mem-profiles').innerHTML = '<table class="profiles"> <tr><td><a href="https://www.codeforces.com/profile/' + c.codeforces + '" target="_blank">Codeforces</a></td><td><a href="https://www.codechef.com/users/' + c.codechef + '" target="_blank">Codechef</a></td><td><a href="https://www.hackerrank.com/' + c.hackerrank + '" target="_blank">Hackerrank</a></td><td><a href="https://www.github.com/' + c.github + '" target="_blank">Github</a></td><td><a href="https://www.stopstalk.com/user/profile/' + c.stopstalk + '" target="_blank">StopStalk</a></td></tr></table>';
    c = b.achievements.split(",");
    console.log(c);
    let w = '<h1 class="tit">Achievements</h1><ul class="ach">';
    c.forEach(el => {
        console.log(w);
        w += '<li class="ac">' + el + '</li>';
    });
    w += '</ul>';
    document.querySelector('.meminfo .mem-achi').innerHTML = w;
})