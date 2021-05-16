$('.message_link').click(function(){
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});
 
const loginPage = document.querySelector(".login-page")
const enterPage = document.querySelector('.login-form');
const enterEmail = document.getElementsByClassName("enter_email")
const enterPassword = document.getElementsByClassName("enter_password")
const btnLog = document.getElementsByClassName("btn_log")
const regPage = document.querySelector('.register-form');
const regEmail = document.getElementsByClassName('email');
const regPassword = document.getElementsByClassName('pass');
const regPasswordCheck = document.getElementsByClassName('password');
const btn = document.getElementsByClassName("btn")



const mainScreen = document.getElementById('main_screen');
const mainTab = document.getElementById('main');
const clientsTab = document.getElementById('clients');
const mapTab = document.getElementById('map');
const exitBtn = document.querySelector('.exit');
const table = document.querySelector('.clients_table');


btn.addEventListener("click", registrate)

let usersArray = [];
class newUser {
    constructor(userName, password) {
        this.userName = userName;
        this.password = password;
    }
}
function registrate() {
    let user = new newUser(regEmail.value, regPassword.value);
    usersArray.push(user);
    regPage.style.display = "none";
    enterPage.style.display = "flex";
}
function checkRegInput() {
    if (regEmail.value !== "" && regPassword.value !== "" && regPasswordCheck.value !== "") {
        btn.classList.remove('disabled');
        btn.removeAttribute('disabled');
        document.querySelector('.errorMessageEmail').style.display = "none";
        document.querySelector('.errorMessagePass').style.display = "none";
    } else {
        if(regEmail.value === "") {
            document.querySelector('.errorMessageEmail').style.display = "inline";
        } else if (regPassword.value === "") {
            document.querySelector('.errorMessagePass').style.display = "inline";
        } else if (regPasswordCheck.value === "") {
            document.querySelector('.errorMessagePass').style.display = "inline";
        }
        btn.classList.add('disabled');
        btn.setAttribute('disabled', 'true');
    
}
}

function checkInputs() {
    if (enterEmail.value !== "" && enterPassword.value !== "") {
        btnLog.classList.remove('disabled');
        btnLog.removeAttribute('disabled');
        document.querySelector('.errorMessageEmail').style.display = "none";
        document.querySelector('.errorMessagePass').style.display = "none";
    } else {
        if(enterEmail.value === "") {
            document.querySelector('.errorMessageEmail').style.display = "inline";
        } else if (enterPassword.value === "") {
            document.querySelector('.errorMessagePass').style.display = "inline";
        }
        btnLog.classList.add('disabled');
        btnLog.setAttribute('disabled', 'true');
    }
}
function enterApp() {

    if(localStorage.getItem('email') === null && localStorage.getItem('password') === null) {
        for (let i = 0; i < usersArray.length; i++) {
            if(usersArray[i].userName === enterEmail.value) {
                if(usersArray[i].password === enterPassword.value) {
                    localStorage.setItem('email', enterEmail.value);
                    localStorage.setItem('password', enterPassword.value);
                    loginPage.style.display = 'none';
                    mainScreen.style.display = 'block';
                }
            } else {
                alert("There's no such a user");
            }
        }
       
        if(usersArray.length === 0) {
            alert("User not found");
        }

      } else {
        enterEmail.value = localStorage.getItem('email');
        enterPassword.value = localStorage.getItem('name');
        loginPage.style.display = 'none';
        mainScreen.style.display = 'block';
      }
    
}

function exit() {
        loginPage.style.display = 'block';
        mainScreen.style.display = 'none';
}
enterEmail.addEventListener('change', checkInputs);
enterPassword.addEventListener('change', checkInputs);
regEmail.addEventListener('change', checkRegInput);
regPassword.addEventListener('change', checkRegInput);
regPasswordCheck.addEventListener('change', checkRegInput);
btnLog.addEventListener('click', enterApp);
exitBtn.addEventListener('click', exit);