// =========== COPYRIGHT UPDATE YEAR ============ //

// *** Selectors ***
let yearSpan = document.querySelector("#year");
let dateObject = new Date();
let year = dateObject.getFullYear().toString();

// *** Function Declaration ***
function updateCopyright(){
   yearSpan.innerHTML = year;
}



// =========== TYPEWRITER EFFECT ============ //

// *** Selectors ***
var twArr = ["Just your friendly neighborhood coder."];
var twPosition = 0;
var twSpeed = 180;

// *** Typewriter Function ***
typewrite = () => {
    document.querySelector("#twText").innerHTML = twArr[0].substring(0, twPosition) + `<span id="twSpan">\u25ae</span>`;

    if(twPosition++ != twArr[0].length){
        setTimeout(typewrite, twSpeed);
    } else {
        twPosition = 0;
        setTimeout(typewrite, twSpeed);
    }
}



// =========== PROJECT CARD HOVER EFFECT ============ //

function changeSkill(btn){
    btn.style.border = "3px solid #f86d58";
}

function revertSkill(btn) {
    btn.style.border = "3px solid #fff9f1";
}



function projectBounce(project){
    project.classList.add("animate__animated", "animate__pulse");
    // document.querySelector(".project-title").style.color = "#64ffda";
}

function projectStill(project){
    project.classList.remove("animate__animated", "animate__pulse");
    // document.querySelector(".project-title").style.color = "#fff9f1";
}

// #######################################################

function animateCheck(skill){
    let check = document.querySelector("#htmlCheck");
    check.classList.add("animate__animated", "animate__bounce");
}

function resetCheck(skill){
    let check = document.querySelector("#htmlCheck");
    check.classList.remove("animate__animated", "animate__bounce");
}

function changeHtml(skill){
    let img = document.querySelector("#htmlSvg");
    img.setAttribute("src", "/assets/img/html-light.svg");
    skill.style.border = "3px solid #f86d58";
    
}

function originalHtml(skill){
    let img = document.querySelector("#htmlSvg");
    img.setAttribute("src", "/assets/img/html-dark.svg");
    skill.style.border = "3px solid #fff9f1";
}

function changeCss(skill){
    let img = document.querySelector("#cssSvg");
    img.setAttribute("src", "/assets/img/css-light.svg");
    skill.style.border = "3px solid #f86d58";
}

function originalCss(skill){
    let img = document.querySelector("#cssSvg");
    img.setAttribute("src", "/assets/img/css-dark.svg");
    skill.style.border = "3px solid #fff9f1";
}

function changeJs(skill){
    let img = document.querySelector("#jsSvg");
    img.setAttribute("src", "/assets/img/javascript-light.svg");
    skill.style.border = "3px solid #f86d58";
}

function originalJs(skill){
    let img = document.querySelector("#jsSvg");
    img.setAttribute("src", "/assets/img/javascript-dark.svg");
    skill.style.border = "3px solid #fff9f1";
}

function changeReact(skill){
    let img = document.querySelector("#reactSvg");
    img.setAttribute("src", "/assets/img/react-light.svg");
    skill.style.border = "3px solid #f86d58";
}

function originalReact(skill){
    let img = document.querySelector("#reactSvg");
    img.setAttribute("src", "/assets/img/react-dark.svg");
    skill.style.border = "3px solid #fff9f1";
}

function changeNode(skill){
    let img = document.querySelector("#nodeSvg");
    img.setAttribute("src", "/assets/img/node-light.svg");
    skill.style.border = "3px solid #f86d58";
}

function originalNode(skill){
    let img = document.querySelector("#nodeSvg");
    img.setAttribute("src", "/assets/img/node-dark.svg");
    skill.style.border = "3px solid #fff9f1";
}

function changeGit(skill){
    let img = document.querySelector("#gitSvg");
    img.setAttribute("src", "/assets/img/git-light.svg");
    skill.style.border = "3px solid #f86d58";
}

function originalGit(skill){
    let img = document.querySelector("#gitSvg");
    img.setAttribute("src", "/assets/img/git-dark.svg");
    skill.style.border = "3px solid #fff9f1";
}

function changeBs(skill){
    let img = document.querySelector("#bsSvg");
    img.setAttribute("src", "/assets/img/bootstrap-light.svg");
    skill.style.border = "3px solid #f86d58";
}

function originalBs(skill){
    let img = document.querySelector("#bsSvg");
    img.setAttribute("src", "/assets/img/bootstrap-dark.svg");
    skill.style.border = "3px solid #fff9f1";
}

function changeMongo(skill){
    let img = document.querySelector("#mongoSvg");
    img.setAttribute("src", "/assets/img/mongo-light.svg");
    skill.style.border = "3px solid #f86d58";
}

function originalMongo(skill){
    let img = document.querySelector("#mongoSvg");
    img.setAttribute("src", "/assets/img/mongo-dark.svg");
    skill.style.border = "3px solid #fff9f1";
}


function changeSass(skill){
    let img = document.querySelector("#sassSvg");
    img.setAttribute("src", "/assets/img/sass-light.svg");
    skill.style.border = "3px solid #f86d58";
}

function originalSass(skill){
    let img = document.querySelector("#sassSvg");
    img.setAttribute("src", "/assets/img/sass-dark.svg");
    skill.style.border = "3px solid #fff9f1";
}






// *** EVENT LISTENERS ***
window.addEventListener("load", typewrite);
window.addEventListener("load", updateCopyright);

