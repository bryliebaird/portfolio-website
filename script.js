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


// =========== TOGGLE ROW DISPLAY  ============ //


const animateCSS = (element, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, {once: true});
});


function displayRow(){
    let row = document.querySelector("#hidden-row");
    let projectBtn = document.querySelector("#project-btn");

    if(row.classList.contains("hidden")){
        row.classList.toggle("hidden");
        row.classList.add("fadeIn");
    } else {
        row.classList.toggle("hidden");
        row.classList.add("fadeIn");
    }

    animateCSS("#hidden-row", "fadeIn");
}



// =========== PROJECT CARD HOVER EFFECT ============ //

function mouseoverProject (project){
    let title = project.getElementsByClassName("project-title");
    title[0].classList.add("project-title-hover");
    project.classList.add("animate__animated", "animate__pulse");
}

function mouseoutProject(project){
    let title = project.getElementsByClassName("project-title");
    title[0].classList.remove("project-title-hover");
    project.classList.remove("animate__animated", "animate__pulse");
}


// #######################################################


// function mouseoverSkill(skill){
//     let checkmark = document.getElementsByClassName("checkmark");
//     checkmark[0].classList.add("animate__animated", "animate__bounce");
//     let img = document.getElementsByClassName("skill-img");   
// }

function mouseoverHTML(skill){
    skill.style.border = "3px solid #f86d58";
    document.querySelector("#htmlCheck").classList.add("animate__animated", "animate__bounce");
    document.querySelector("#htmlSvg").setAttribute("src", "/assets/img/html-light.svg");
}

function mouseoutHTML(skill){
    skill.style.border = "3px solid #fff9f1";
    document.querySelector("#htmlSvg").setAttribute("src", "/assets/img/html-dark.svg");
    document.querySelector("#htmlCheck").classList.remove("animate__animated", "animate__bounce");  
}

function mouseoverCSS(skill){
    skill.style.border = "3px solid #f86d58";
    document.querySelector("#cssSVG").setAttribute("src", "/assets/img/css-light.svg");
    document.querySelector("#cssCheck").classList.add("animate__animated", "animate__bounce");
}

function mouseoutCSS(skill){
    skill.style.border = "3px solid #fff9f1";
    document.querySelector("#cssSVG").setAttribute("src", "/assets/img/css-dark.svg");
    document.querySelector("#cssCheck").classList.remove("animate__animated", "animate__bounce");
}

function mouseoverJS(skill){
    skill.style.border = "3px solid #f86d58";
    document.querySelector("#jsSVG").setAttribute("src", "/assets/img/javascript-light.svg");
    document.querySelector("#jsCheck").classList.add("animate__animated", "animate__bounce");
}

function mouseoutJS(skill){
    skill.style.border = "3px solid #fff9f1";
    document.querySelector("#jsSVG").setAttribute("src", "/assets/img/javascript-dark.svg");
    document.querySelector("#jsCheck").classList.remove("animate__animated", "animate__bounce");
}

function mouseoverReact(skill){
    skill.style.border = "3px solid #f86d58";
    document.querySelector("#reactSVG").setAttribute("src", "/assets/img/react-light.svg");
    document.querySelector("#reactCheck").classList.add("animate__animated", "animate__bounce");
}

function mouseoutReact(skill){
    skill.style.border = "3px solid #fff9f1";
    document.querySelector("#reactSVG").setAttribute("src", "/assets/img/react-dark.svg");
    document.querySelector("#reactCheck").classList.remove("animate__animated", "animate__bounce");
}

function mouseoverNode(skill){
    skill.style.border = "3px solid #f86d58";
    document.querySelector("#nodeSVG").setAttribute("src", "/assets/img/node-light.svg");
    document.querySelector("#nodeCheck").classList.add("animate__animated", "animate__bounce");
}

function mouseoutNode(skill){
    skill.style.border = "3px solid #fff9f1";
    document.querySelector("#nodeSVG").setAttribute("src", "/assets/img/node-dark.svg");
    document.querySelector("#nodeCheck").classList.remove("animate__animated", "animate__bounce");
}

function mouseoverGit(skill){
    skill.style.border = "3px solid #f86d58";
    document.querySelector("#gitSVG").setAttribute("src", "/assets/img/git-light.svg");
    document.querySelector("#gitCheck").classList.add("animate__animated", "animate__bounce");
}

function mouseoutGit(skill){
    skill.style.border = "3px solid #fff9f1";
    document.querySelector("#gitSVG").setAttribute("src", "/assets/img/git-dark.svg");
    document.querySelector("#gitCheck").classList.remove("animate__animated", "animate__bounce");
}

function mouseoverBS(skill){
    skill.style.border = "3px solid #f86d58";
    document.querySelector("#bsSVG").setAttribute("src", "/assets/img/bootstrap-light.svg");
    document.querySelector("#bsCheck").classList.add("animate__animated", "animate__bounce");
}

function mouseoutBS(skill){
    skill.style.border = "3px solid #fff9f1";
    document.querySelector("#bsSVG").setAttribute("src", "/assets/img/bootstrap-dark.svg");
    document.querySelector("#bsCheck").classList.remove("animate__animated", "animate__bounce");
}

function mouseoverMongo(skill){
    skill.style.border = "3px solid #f86d58";
    document.querySelector("#mongoSVG").setAttribute("src", "/assets/img/mongo-light.svg");
    document.querySelector("#mongoCheck").classList.add("animate__animated", "animate__bounce");
}

function mouseoutMongo(skill){
    skill.style.border = "3px solid #fff9f1";
    document.querySelector("#mongoSVG").setAttribute("src", "/assets/img/mongo-dark.svg");
    document.querySelector("#mongoCheck").classList.remove("animate__animated", "animate__bounce");
}

function mouseoverSass(skill){
    skill.style.border = "3px solid #f86d58";
    document.querySelector("#sassSVG").setAttribute("src", "/assets/img/sass-light.svg");
    document.querySelector("#sassCheck").classList.add("animate__animated", "animate__bounce");
}

function mouseoutSass(skill){
    skill.style.border = "3px solid #fff9f1";
    document.querySelector("#sassSVG").setAttribute("src", "/assets/img/sass-dark.svg");
    document.querySelector("#sassCheck").classList.remove("animate__animated", "animate__bounce");
}






// *** EVENT LISTENERS ***
window.addEventListener("load", typewrite);
window.addEventListener("load", updateCopyright);

