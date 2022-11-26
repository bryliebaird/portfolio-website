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

// *** EVENT LISTENERS ***
window.addEventListener("load", typewrite);
window.addEventListener("load", updateCopyright);

