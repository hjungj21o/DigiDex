function openNav() {
    document.querySelector("#sidenav").style.width = "40vh";
    document.querySelector(".s2-3").style.marginLeft = "40vh";
    document.querySelector(".open-edit-pane").style.display = "none";
}

function closeNav() {
    document.querySelector("#sidenav").style.width = "0";
    document.querySelector(".s2-3").style.marginLeft = "0";
    document.querySelector(".open-edit-pane").style.display = "flex";
}

const openEditPane = document.querySelector(".open-edit-pane");
const closeEditPane = document.querySelector(".closebtn");
const mainBody = document.querySelector("s2-3");

openEditPane.addEventListener("click", openNav);
closeEditPane.addEventListener("click", closeNav);



document.addEventListener("DOMContentLoaded", () => {
    const classNames = [
        "change-name",
        "change-position",
        "change-phone",
        "change-email",
        "change-linkedin",
        "change-github",
        "change-angellist",
        "change-line-1",
        "change-line-2",
        "change-line-3"
    ]

    classNames.forEach(className => {
        getInfo(className);
    });
})

//Frontside Edit
const editLineOne = document.querySelector(".change-line-1");
const editLineTwo = document.querySelector(".change-line-2");
const editLineThree = document.querySelector(".change-line-3");

const lineOne = document.querySelector(".line-1")
const lineTwo = document.querySelector(".line-2")
const lineThree = document.querySelector(".line-3")

editLineOne.addEventListener("keyup", editInputFuncA);
editLineTwo.addEventListener("keyup", editInputFuncA);
editLineThree.addEventListener("keyup", editInputFuncA);

function editInputFuncA(e) {
    e.preventDefault();

    switch (e.currentTarget.className) {
        case "change-line-1":
            if (e.currentTarget.value === "") {
                lineOne.innerText = "Full-Stack";
            } else {
                lineOne.innerText = e.currentTarget.value;
            }
            break;
        case "change-line-2":
            if (e.currentTarget.value === "") {
                lineTwo.innerText = "Developer";
            } else {
                lineTwo.innerText = e.currentTarget.value;
            }
            break;
        case "change-line-3":
            if (e.currentTarget.value === "") {
                lineThree.innerText = "For Hire";
            } else {
                lineThree.innerText = e.currentTarget.value;
            }
            break;
    }
    localStorage.removeItem(e.currentTarget.className);
    saveInfo(e.currentTarget.className, e.currentTarget.value);
}


//Backside Edit
const editNameForm = document.querySelector(".change-name");
const editPositionForm = document.querySelector(".change-position");
const editPhoneForm = document.querySelector(".change-phone");
const editEmailForm = document.querySelector(".change-email");
const editLinkedinForm = document.querySelector(".change-linkedin");
const editGithubForm = document.querySelector(".change-github");
const editAngellistForm = document.querySelector(".change-angellist");

const name = document.querySelector(".name");
const position = document.querySelector(".position");
const phone = document.querySelector(".phone");
const email = document.querySelector(".email");
const linkedin = document.querySelector(".linkedin");
const github = document.querySelector(".github");
const angellist = document.querySelector(".angellist");

editNameForm.addEventListener("keyup", editInputFuncB);
editPositionForm.addEventListener("keyup", editInputFuncB);
editPhoneForm.addEventListener("keyup", editInputFuncB);
editEmailForm.addEventListener("keyup", editInputFuncB);
editLinkedinForm.addEventListener("keyup", editInputFuncB);
editGithubForm.addEventListener("keyup", editInputFuncB);
editAngellistForm.addEventListener("keyup", editInputFuncB);

function editInputFuncB(e) {
    e.preventDefault();

    switch (e.currentTarget.className) {
        case "change-name":
            if (e.currentTarget.value === "") {
                name.innerText = "Haejun Chung"
            } else {
                name.innerText = e.currentTarget.value;
            }
            break;
        case "change-position":
            if (e.currentTarget.value === "") {
                position.innerText = "Full Stack Developer"
            } else {
                position.innerText = e.currentTarget.value;
            }
            break;
        case "change-phone":
            if (e.currentTarget.value === "") {
                phone.innerHTML = '<i class="fas fa-mobile-alt"></i>' + "(862) 485 - 6213"
            } else {
                phone.innerHTML = '<i class="fas fa-mobile-alt"></i>' + e.currentTarget.value;
            }
            break;
        case "change-email":
            if (e.currentTarget.value === "") {
                email.innerHTML = '<i class="fas fa-at"></i>' + "haejun.chung210@gmail.com"
            } else {
                email.innerHTML = '<i class="fas fa-at"></i>' + e.currentTarget.value;
            }
            break;
        case "change-linkedin":
            if (e.currentTarget.value === "") {
                linkedin.innerHTML = '<i class="fab fa-linkedin"></i>' + "linkedin.com/in/haejunchung/"
            } else {
                linkedin.innerHTML = '<i class="fab fa-linkedin"></i>' + e.currentTarget.value;
            }
            break;
        case "change-github":
            if (e.currentTarget.value === "") {
                github.innerHTML = '<i class="fab fa-github-square"></i>' + "github.com/hjungj21o"
            } else {
                github.innerHTML = '<i class="fab fa-github-square"></i>' + e.currentTarget.value;
            }
            break;
        case "change-angellist":
            if (e.currentTarget.value === "") {
                angellist.innerHTML = '<i class="fab fa-angellist"></i>' + "angel.co/u/haejun-chung-19"
            } else {
                angellist.innerHTML = '<i class="fab fa-angellist"></i>' + e.currentTarget.value;
            }
            break;
    }
    localStorage.removeItem(e.currentTarget.className);
    saveInfo(e.currentTarget.className, e.currentTarget.value);
}


function saveInfo(className, userInput = "") {
    let infos;
    if (localStorage.getItem(className) === null) {
        infos = [];
    } else {
        infos = JSON.parse(localStorage.getItem(className));
    }
    infos.push(userInput);
    localStorage.setItem(className, JSON.stringify(infos));
}

function getInfo(className) {
    let infos;
    if (localStorage.getItem(className) === null) {
        infos = [];
    } else {
        infos = JSON.parse(localStorage.getItem(className));
    }
    const info = infos[infos.length - 1];
    switch (className) {
        case "change-name":
            if (!info) {
                name.innerText = "Haejun Chung"
            } else {
                name.innerText = info;
                editNameForm.value = info;
            }
            break;
        case "change-position":
            if (!info) {
                position.innerText = "Full-Stack Developer"
            } else {
                position.innerText = info;
                editPositionForm.value = info;
            }
            break;
        case "change-phone":
            if (!info) {
                phone.innerHTML = '<i class="fas fa-mobile-alt"></i>' + "(862) 485 - 6213"
            } else {
                phone.innerHTML = '<i class="fas fa-mobile-alt"></i>' + info;
                editPhoneForm.value = info;
            }
            break;
        case "change-email":
            if (!info) {
                email.innerHTML = '<i class="fas fa-at"></i>' + "haejun.chung210@gmail.com"
            } else {
                email.innerHTML = '<i class="fas fa-at"></i>' + info;
                editEmailForm.value = info;
            }
            break;
        case "change-linkedin":
            if (!info) {
                linkedin.innerHTML = '<i class="fab fa-linkedin"></i>' + "linkedin.com/in/haejunchung/"
            } else {
                linkedin.innerHTML = '<i class="fab fa-linkedin"></i>' + info;
                editLinkedinForm.value = info;
            }
            break;
        case "change-github":
            if (!info) {
                github.innerHTML = '<i class="fab fa-github-square"></i>' + "github.com/hjungj21o"
            } else {
                github.innerHTML = '<i class="fab fa-github-square"></i>' + info;
                editGithubForm.value = info;
            }
            break;
        case "change-angellist":
            if (!info) {
                angellist.innerHTML = '<i class="fab fa-angellist"></i>' + "angel.co/u/haejun-chung-19"
            } else {
                angellist.innerHTML = '<i class="fab fa-angellist"></i>' + info;
                editAngellistForm.value = info;
            }
            break;
        case "change-line-1":
            if (!info) {
                lineOne.innerText = "Full-Stack";
            } else {
                lineOne.innerText = info;
                editLineOne.value = info;
            }
            break;
        case "change-line-2":
            if (!info) {
                lineTwo.innerText = "Developer";
            } else {
                lineTwo.innerText = info;
                editLineTwo.value = info;
            }
            break;
        case "change-line-3":
            if (!info) {
                lineThree.innerText = "For Hire";
            } else {
                lineThree.innerText = info;
                editLineThree.value = info;
            }
            break;
    }
}

// Reset button 
function reset() {
    localStorage.clear();
    //clear all input fields
}

const resetLS = document.querySelector(".reset-button");
debugger;
resetLS.addEventListener("click", reset)
