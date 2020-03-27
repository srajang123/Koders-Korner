function CHK() {
    if (document.querySelector('#name').value == "")
        return Showerror("Please Enter Your Name");
    else if (document.querySelector('.year').value == "-1")
        return Showerror("Please select year");
    else if (document.querySelector('.branch').value == "-1")
        return Showerror("Please select Your Branch");
    else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.querySelector('#mail').value)))
        return Showerror("Please enter a valid E-mail");
    else if (document.querySelector("#query").value == "")
        return Showerror("Please enter your Query");
    else
        return true;
}
let Showerror = (msg) => {
    //alert(msg);
    document.querySelector('.error h2').innerHTML = '!! ' + msg + ' !!';
    let a = setTimeout(() => {
        document.querySelector('.error h2').innerHTML = '&nbsp;';
    }, 2000);
    return false;
}