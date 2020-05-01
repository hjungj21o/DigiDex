function openNav() {
    document.querySelector("#sidenav").style.width = "30vw";
    document.querySelector(".s2-3").style.marginLeft = "5vw";
    document.querySelector(".open-edit-pane").style.marginLeft = "30vw";
}

function closeNav() {
    document.querySelector("#sidenav").style.width = "0";
    document.querySelector(".s2-3").style.marginLeft = "0";
    document.querySelector(".open-edit-pane").style.marginLeft = "0";
    document.querySelector(".open-edit-pane").style.display = "flex";
}

const openEditPane = document.querySelector(".open-edit-pane");
const closeEditPane = document.querySelector(".closebtn");
const mainBody = document.querySelector("s2-3");

// Toggle to make edit pane close and open
function toggleOpenClose() {
    // openEditPane.classList.toggle("opened");
    console.log(openEditPane.classList);
    if (openEditPane.classList.contains("opened")) {
        openEditPane.classList.remove("opened");
        closeNav();
    } else {
        openEditPane.classList.add("opened");
        openNav();
    }
}


openEditPane.addEventListener("click", toggleOpenClose);


// openEditPane.addEventListener("click", openNav);
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
        "change-line-3",
        "change-block-color",
        "dropdown-li"
    ]

    classNames.forEach(className => {
        getInfo(className);
    });
})

//Frontside Edit
const editLineOne = document.querySelector(".change-line-1");
const editLineTwo = document.querySelector(".change-line-2");
const editLineThree = document.querySelector(".change-line-3");
const editBlockColor = document.querySelector(".change-block-color");

const lineOne = document.querySelector(".line-1");
const lineTwo = document.querySelector(".line-2");
const lineThree = document.querySelector(".line-3");
const blockColor = document.querySelector(".opacity");

editLineOne.addEventListener("keyup", editInputFuncA);
editLineTwo.addEventListener("keyup", editInputFuncA);
editLineThree.addEventListener("keyup", editInputFuncA);
editBlockColor.addEventListener("keyup", editInputFuncA);

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
        case "change-block-color":
            if (e.currentTarget.value === "") {
                blockColor.style.backgroundColor = "#FFB45A";
            } else {
                blockColor.style.backgroundColor = e.currentTarget.value;
            }
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
        case "dropdown-li":
            if (!info) {
                lineOne.style.fontFamily = "Varela Round, sans-serif";
                lineTwo.style.fontFamily = "Varela Round, sans-serif";
                lineThree.style.fontFamily = "Varela Round, sans-serif";
            } else {
                fontButton.innerText = info;
                fontButton.style.fontFamily = fontFamily[info];
                lineOne.style.fontFamily = fontFamily[info];
                lineTwo.style.fontFamily = fontFamily[info];
                lineThree.style.fontFamily = fontFamily[info];
            }
            break;
        case "change-block-color":
            if (!info) {
                blockColor.style.backgroundColor = "#FFB45A";
            } else {
                blockColor.style.backgroundColor = info;
                editBlockColor.value = info;
            }
            break;
    }
}

// Reset button 

const defaultValues = {
    name: "Haejun Chung",
    position: "Full-Stack Developer",
    phone: "(862) 485 - 6213",
    email: "haejun.chung210@gmail.com",
    linkedin: "linkedin.com/in/haejunchung/",
    github: "github.com/hjungj21o",
    angel: "angel.co/u/haejun-chung-19",
    lineOne: "Full-Stack",
    lineTwo: "Developer",
    lineThree: "For Hire",
    blockColor: "#FFB45A",
    font: "Varela Round, sans-serif"
}

const resetInputsArr = document.querySelectorAll("#edit");

function reset() {
    localStorage.clear();
    //clear all input fields
    resetInputsArr.forEach(input => {
        input.value = "";
    })
    //input values back to default values
    name.innerText = defaultValues.name;
    position.innerText = defaultValues.position;
    phone.innerHTML = '<i class="fas fa-mobile-alt"></i>' + defaultValues.phone;
    email.innerHTML = '<i class="fas fa-at"></i>' + defaultValues.email;
    linkedin.innerHTML = '<i class="fab fa-linkedin"></i>' + defaultValues.linkedin;
    github.innerHTML = '<i class="fab fa-github-square"></i>' + defaultValues.github;
    angellist.innerHTML = '<i class="fab fa-angellist"></i>' + defaultValues.angel;
    lineOne.innerText = defaultValues.lineOne;
    lineTwo.innerText = defaultValues.lineTwo;
    lineThree.innerText = defaultValues.lineThree;
    lineOne.style.fontFamily = defaultValues.font;
    lineTwo.style.fontFamily = defaultValues.font;
    lineThree.style.fontFamily = defaultValues.font;
    fontButton.innerHTML = "varela";
    fontButton.style.fontFamily = defaultValues.font;
    blockColor.style.backgroundColor = "#FFB45A";

}

const resetLS = document.querySelector(".reset-button");
resetLS.addEventListener("click", reset)

//change font
const changeFrontFont = document.querySelectorAll(".dropdown-li");
const fontButton = document.querySelector(".dropbtn");
const fontFamily = {
    varela: "Varela Round, sans-serif",
    roboto: "Roboto, sans-serif",
    montserrat: "Montserrat, sans-serif",
    concertone: "Concert One, cursive",
    spectral: "Spectral, serif",
    monoton: "Monoton, cursive",
    indieflower: "Indie Flower, cursive",
    bungee: "Bungee Shade, cursive",
    faster: "Faster One, cursive"
}
function editFontsFunc(e) {

    fontButton.innerText = e.currentTarget.innerText;
    fontButton.style.fontFamily = fontFamily[e.currentTarget.id];

    //Could it be refactored: lineOne.style.fontFamily = fontFamily[e.currentTarget.id]
    switch(e.currentTarget.id) {
        case "varela":
            lineOne.style.fontFamily = fontFamily.varela;
            lineTwo.style.fontFamily = fontFamily.varela;
            lineThree.style.fontFamily = fontFamily.varela;
            break;
        case "roboto": 
            lineOne.style.fontFamily = fontFamily.roboto;
            lineTwo.style.fontFamily = fontFamily.roboto;
            lineThree.style.fontFamily = fontFamily.roboto;
            break;
        case "montserrat": 
            lineOne.style.fontFamily = fontFamily.montserrat;
            lineTwo.style.fontFamily = fontFamily.montserrat;
            lineThree.style.fontFamily = fontFamily.montserrat;
            break;
        case "concertone": 
            lineOne.style.fontFamily = fontFamily.concertone;
            lineTwo.style.fontFamily = fontFamily.concertone;
            lineThree.style.fontFamily = fontFamily.concertone;
            break;
        case "spectral":
            lineOne.style.fontFamily = fontFamily.spectral;
            lineTwo.style.fontFamily = fontFamily.spectral;
            lineThree.style.fontFamily = fontFamily.spectral;
            break;
        case "monoton":
            lineOne.style.fontFamily = fontFamily.monoton;
            lineTwo.style.fontFamily = fontFamily.monoton;
            lineThree.style.fontFamily = fontFamily.monoton;
            break;
        case "indieflower":
            lineOne.style.fontFamily = fontFamily.indieflower;
            lineTwo.style.fontFamily = fontFamily.indieflower;
            lineThree.style.fontFamily = fontFamily.indieflower;
            break;
        case "bungee": 
            lineOne.style.fontFamily = fontFamily.bungee;
            lineTwo.style.fontFamily = fontFamily.bungee;
            lineThree.style.fontFamily = fontFamily.bungee;
            break;
        case "faster":
            lineOne.style.fontFamily = fontFamily.faster;
            lineTwo.style.fontFamily = fontFamily.faster;
            lineThree.style.fontFamily = fontFamily.faster;
            break;
    }
    localStorage.removeItem(e.currentTarget.className);
    saveInfo(e.currentTarget.className, e.currentTarget.id);
}


changeFrontFont.forEach(font => {
    font.addEventListener("click", editFontsFunc);
})


//Dropdown
const dropdown = document.querySelector("#myDropdown");
const dropdownbtn = document.querySelector(".dropbtn");
function toggleDropdown() {
    dropdown.classList.toggle("show");
}

dropdownbtn.addEventListener("click", toggleDropdown);


// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
    if (!e.target.matches('.dropbtn')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}