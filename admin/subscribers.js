let a = document.querySelectorAll('table tr');
for (i = 1; i < a.length; i++) {
    a[i].children[0].innerHTML = i;
    a[i].children[3].innerHTML = '<a href="/subscriber/remove/' + a[i].children[2].innerHTML + '/">Remove</a>';
}