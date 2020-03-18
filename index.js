let a = document.querySelector('.mem1');
let b, c;
a.addEventListener('click', e => {
    b = a.children[2].value;
    b = JSON.parse(b);
    console.log(b);
    document.querySelector('.meminfo .mem-name').innerHTML = b.name;
    document.querySelector('.meminfo .mem-img').innerHTML = '<img src="src/img/srajan.jpg" height=100px width=60px>';
    c = b.profiles;
    document.querySelector('.meminfo .mem-profiles').innerHTML = '<table class="profiles"> <tr><td><a href="' + c.codeforces + '">Codeforces</a></td><td><a href="' + c.codechef + '">Codechef</a></td><td><a href="' + c.hackerrank + '">Hackerrank</a></td><td><a href="' + c.github + '">Github</a></td><td><a href="' + c.stopstalk + '">StopStalk</a></td></tr></table>';
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