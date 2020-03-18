let close = document.querySelector('.meminfo .close button');
close.addEventListener('click', e => {
    document.querySelector('.meminfo').style.visibility = "Hidden";
})
let profile = document.querySelectorAll('.member');
profile.forEach(el => {
    el.addEventListener('click', e => {
        document.querySelector('.meminfo').style.visibility = "Visible";
    })
})