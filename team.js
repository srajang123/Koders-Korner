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
    //if(document.querySelector('.meminfo').style.visibility == "Visible" && )
document.onkeydown = function(evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key === "Escape" || evt.key === "Esc");
    } else {
        isEscape = (evt.keyCode === 27);
    }
    if (isEscape) {
        document.querySelector('.meminfo').style.visibility = "Hidden"
    }
};