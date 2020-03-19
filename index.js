let a = document.querySelector('.mem1');
let b, c;
a.addEventListener('click', e => {
    b = a.children[2].value;
    b = JSON.parse(b);
    console.log(b);
    document.querySelector('.meminfo .mem-name').innerHTML = b.name;
    document.querySelector('.meminfo .mem-img').innerHTML = '<img src="src/img/srajan.jpg" height=100px width=60px>';
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