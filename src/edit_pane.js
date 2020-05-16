import '@simonwep/pickr/dist/themes/nano.min.css';
import Pickr from '@simonwep/pickr';

function openNav() {
    document.querySelector("#sidenav").style.width = "30vw";
    document.querySelector(".s2-3").style.marginLeft = "10vw";
    document.querySelector(".open-edit-pane").style.marginLeft = "30vw";
}

function closeNav() {
    document.querySelector("#sidenav").style.width = "0";
    document.querySelector(".s2-3").style.marginLeft = "0";
    document.querySelector(".open-edit-pane").style.marginLeft = "0";
    document.querySelector(".open-edit-pane").style.display = "flex";
    openEditPane.classList.remove("opened");
}

const openEditPane = document.querySelector(".open-edit-pane");
const closeEditPane = document.querySelector(".closebtn");
const mainBody = document.querySelector("s2-3");

// Toggle to make edit pane close and open
function toggleOpenClose() {

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

const defaultValues = {
    name: "Haejun Chung",
    position: "Full-Stack Developer",
    phone: "(862) 485-6213",
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

//Frontside Edit
const editLineOne = document.querySelector(".change-line-1");
const editLineTwo = document.querySelector(".change-line-2");
const editLineThree = document.querySelector(".change-line-3");
const editBlockColor = document.querySelector(".change-block-color");
const colorSquare = document.querySelector(".pickr");


const lineOne = document.querySelector(".line-1");
const lineTwo = document.querySelector(".line-2");
const lineThree = document.querySelector(".line-3");
const blockColor = document.querySelector(".opacity");


const pickr = Pickr.create({
    el: '.color-picker',
    theme: 'nano', // or 'monolith', or 'nano'
    appClass: 'pickr',
    comparison: false,

    swatches: [
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 0.95)',
        'rgba(156, 39, 176, 0.9)',
        'rgba(103, 58, 183, 0.85)',
        'rgba(63, 81, 181, 0.8)',
        'rgba(33, 150, 243, 0.75)',
        'rgba(3, 169, 244, 0.7)',
        'rgba(0, 188, 212, 0.7)',
        'rgba(0, 150, 136, 0.75)',
        'rgba(76, 175, 80, 0.8)',
        'rgba(139, 195, 74, 0.85)',
        'rgba(205, 220, 57, 0.9)',
        'rgba(255, 235, 59, 0.95)',
        'rgba(255, 193, 7, 1)'
    ],

    defaultRepresentation: 'HEX',

    autoReposition: true,

    components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            rgba: false,
            hsla: false,
            hsva: false,
            cmyk: false,
            input: true,
            clear: true,
            save: true
        }
    }

});


pickr.on('change', (color, instance) => {
    blockColor.style.backgroundColor = color.toHEXA();
    editBlockColor.value = color.toHEXA();
    localStorage.removeItem(editBlockColor.className);
    saveInfo(editBlockColor.className, editBlockColor.value);
});


editLineOne.addEventListener("keyup", editInputFuncA);
editLineTwo.addEventListener("keyup", editInputFuncA);
editLineThree.addEventListener("keyup", editInputFuncA);

function editInputFuncA(e) {
    e.preventDefault();

    switch (e.currentTarget.className) {
        case "change-line-1":
            if (e.currentTarget.value === "") {
                lineOne.innerText = defaultValues.lineOne;
            } else {
                lineOne.innerText = e.currentTarget.value;
            }
            break;
        case "change-line-2":
            if (e.currentTarget.value === "") {
                lineTwo.innerText = defaultValues.lineTwo;
            } else {
                lineTwo.innerText = e.currentTarget.value;
            }
            break;
        case "change-line-3":
            if (e.currentTarget.value === "") {
                lineThree.innerText = defaultValues.lineThree
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
                name.innerText = defaultValues.name;
            } else {
                name.innerText = e.currentTarget.value;
            }
            break;
        case "change-position":
            if (e.currentTarget.value === "") {
                position.innerText = defaultValues.position;
            } else {
                position.innerText = e.currentTarget.value;
            }
            break;
        case "change-phone":
            if (e.currentTarget.value === "") {
                phone.innerText = defaultValues.phone;
                phone.href = "tel:" + defaultValues.phone;
            } else {
                phone.innerText = e.currentTarget.value;
                phone.href = "tel:" + e.currentTarget.value;
            }
            break;
        case "change-email":
            if (e.currentTarget.value === "") {
                email.innerText = defaultValues.email;
                email.href = "mailto:" + defaultValues.email;
            } else {
                email.innerText = e.currentTarget.value;
                email.href = "mailto:" + e.currentTarget.value;
            }
            break;
        case "change-linkedin":
            if (e.currentTarget.value === "") {
                linkedin.innerText = defaultValues.linkedin
                linkedin.href = "https://" + defaultValues.linkedin;
            } else {
                linkedin.innerText = e.currentTarget.value;
                if (e.currentTarget.value.startsWith("https://")) {
                    linkedin.href = e.currentTarget.value;
                } else {
                    linkedin.href = "https://" + e.currentTarget.value;
                };
            }
            break;
        case "change-github":
            if (e.currentTarget.value === "") {
                github.innerText = defaultValues.github;
                github.href = "https://" + defaultValues.github;
            } else {
                github.innerText = e.currentTarget.value;
                if (e.currentTarget.value.startsWith("https://")) {
                    github.href = e.currentTarget.value;
                } else {
                    github.href = "https://" + e.currentTarget.value;
                };
            }
            break;
        case "change-angellist":
            if (e.currentTarget.value === "") {
                angellist.innerText = defaultValues.angel;
                github.href = "https:" + defaultValues.angel;
            } else {
                angellist.innerText = e.currentTarget.value;
                if (e.currentTarget.value.startsWith("https://")) {
                    angellist.href = e.currentTarget.value;
                } else {
                    angellist.href = "https://" + e.currentTarget.value;
                };
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
                name.innerText = defaultValues.name;
            } else {
                name.innerText = info;
                editNameForm.value = info;
            }
            break;
        case "change-position":
            if (!info) {
                position.innerText = defaultValues.position;
            } else {
                position.innerText = info;
                editPositionForm.value = info;
            }
            break;
        case "change-phone":
            if (!info) {
                phone.innerText = defaultValues.phone;
                phone.href = "tel:" + defaultValues.phone;
            } else {
                phone.innerText = info;
                editPhoneForm.value = info;
                phone.href = "tel:" + info;
            }
            break;
        case "change-email":
            if (!info) {
                email.innerText = defaultValues.email;
                email.href = "mailto:" + defaultValues.email;
            } else {
                email.innerText = info;
                email.href = "mailto:" + info;
                editEmailForm.value = info;
            }
            break;
        case "change-linkedin":
            if (!info) {
                linkedin.innerText = defaultValues.linkedin;
                linkedin.href = "https://" + defaultValues.linkedin;
            } else {
                linkedin.innerText = info;
                editLinkedinForm.value = info;
                if (info.startsWith("https://")) {
                    linkedin.href = info;
                } else {
                    linkedin.href = "https://" + info;
                };
            }
            break;
        case "change-github":
            if (!info) {
                github.innerText = defaultValues.github;
                github.href = defaultValues.github;
                github.href = "https://" + defaultValues.github;
            } else {
                github.innerText = info;
                editGithubForm.value = info;
                if (info.startsWith("https://")) {
                    github.href = info;
                } else {
                    github.href = "https://" + info;
                };
            }
            break;
        case "change-angellist":
            if (!info) {
                angellist.innerText = defaultValues.angel;
                angellist.href = defaultValues.angel;
                angellist.href = "https://" + defaultValues.angel;
            } else {
                angellist.innerText = info;
                editAngellistForm.value = info;
            }
            break;
        case "change-line-1":
            if (!info) {
                lineOne.innerText = defaultValues.lineOne;
            } else {
                lineOne.innerText = info;
                editLineOne.value = info;
            }
            break;
        case "change-line-2":
            if (!info) {
                lineTwo.innerText = defaultValues.lineTwo
            } else {
                lineTwo.innerText = info;
                editLineTwo.value = info;
            }
            break;
        case "change-line-3":
            if (!info) {
                lineThree.innerText = defaultValues.lineThree
            } else {
                lineThree.innerText = info;
                editLineThree.value = info;
            }
            break;
        case "dropdown-li":
            if (!info) {
                lineOne.style.fontFamily = defaultValues.font;
                lineTwo.style.fontFamily = defaultValues.font;
                lineThree.style.fontFamily = defaultValues.font;
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
                blockColor.style.backgroundColor = defaultValues.blockColor;
            } else {
                blockColor.style.backgroundColor = info;
                editBlockColor.value = info;
                newColor.btnColor = info;
            }
            break;
    }
}

// Reset button 

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
    phone.innerText = defaultValues.phone;
    phone.href = "tel:" + defaultValues.phone;
    email.innerText = defaultValues.email;
    email.href = "mailto:" + defaultValues.email;
    linkedin.innerText = defaultValues.linkedin;
    linkedin.href = "https://" + defaultValues.linkedin;
    github.innerText = defaultValues.github;
    github.href = "https://" + defaultValues.github;
    angellist.innerText = defaultValues.angel;
    angellist.href = "https://" + defaultValues.angel;
    lineOne.innerText = defaultValues.lineOne;
    lineTwo.innerText = defaultValues.lineTwo;
    lineThree.innerText = defaultValues.lineThree;
    lineOne.style.fontFamily = defaultValues.font;
    lineTwo.style.fontFamily = defaultValues.font;
    lineThree.style.fontFamily = defaultValues.font;
    fontButton.innerHTML = "varela";
    fontButton.style.fontFamily = defaultValues.font;
    blockColor.style.backgroundColor = "#FFB45A";
    newColor.btnColor = "#FFB45A";

}

const resetLS = document.querySelector(".reset-button");
resetLS.addEventListener("click", reset)

//change fonts
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
    lineOne.style.fontFamily = fontFamily[e.currentTarget.id];
    lineTwo.style.fontFamily = fontFamily[e.currentTarget.id];
    lineThree.style.fontFamily = fontFamily[e.currentTarget.id];
    // switch(e.currentTarget.id) {
    //     case "varela":
    //         lineOne.style.fontFamily = fontFamily.varela;
    //         lineTwo.style.fontFamily = fontFamily.varela;
    //         lineThree.style.fontFamily = fontFamily.varela;
    //         break;
    //     case "roboto": 
    //         lineOne.style.fontFamily = fontFamily.roboto;
    //         lineTwo.style.fontFamily = fontFamily.roboto;
    //         lineThree.style.fontFamily = fontFamily.roboto;
    //         break;
    //     case "montserrat": 
    //         lineOne.style.fontFamily = fontFamily.montserrat;
    //         lineTwo.style.fontFamily = fontFamily.montserrat;
    //         lineThree.style.fontFamily = fontFamily.montserrat;
    //         break;
    //     case "concertone": 
    //         lineOne.style.fontFamily = fontFamily.concertone;
    //         lineTwo.style.fontFamily = fontFamily.concertone;
    //         lineThree.style.fontFamily = fontFamily.concertone;
    //         break;
    //     case "spectral":
    //         lineOne.style.fontFamily = fontFamily.spectral;
    //         lineTwo.style.fontFamily = fontFamily.spectral;
    //         lineThree.style.fontFamily = fontFamily.spectral;
    //         break;
    //     case "monoton":
    //         lineOne.style.fontFamily = fontFamily.monoton;
    //         lineTwo.style.fontFamily = fontFamily.monoton;
    //         lineThree.style.fontFamily = fontFamily.monoton;
    //         break;
    //     case "indieflower":
    //         lineOne.style.fontFamily = fontFamily.indieflower;
    //         lineTwo.style.fontFamily = fontFamily.indieflower;
    //         lineThree.style.fontFamily = fontFamily.indieflower;
    //         break;
    //     case "bungee": 
    //         lineOne.style.fontFamily = fontFamily.bungee;
    //         lineTwo.style.fontFamily = fontFamily.bungee;
    //         lineThree.style.fontFamily = fontFamily.bungee;
    //         break;
    //     case "faster":
    //         lineOne.style.fontFamily = fontFamily.faster;
    //         lineTwo.style.fontFamily = fontFamily.faster;
    //         lineThree.style.fontFamily = fontFamily.faster;
    //         break;
    // }
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