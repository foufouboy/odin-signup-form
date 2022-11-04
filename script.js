const psw = document.querySelector("#password");
const pswConf = document.querySelector("#password-conf");
const pswMessage = document.querySelector(".psw-message");

pswConf.addEventListener("input", (e) => {
    
    if (pswConf.value === "" || psw.value === "" || psw.value === pswConf.value) {
        pswMessage.style.display = "none";
        pswCorrect = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/.test(psw.value);

        if (!pswCorrect) {
            console.log(psw.value);
            pswConf.style.color = "rgb(158, 56, 127)";
        } else {
            pswConf.style.color = "RGB(45, 164, 78)";
        }
    } else {
        pswMessage.style.display = "initial"; 
        pswConf.style.color = "rgb(158, 56, 127)";
    }
})
