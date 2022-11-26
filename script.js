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


console.log("hiii");

// =========== PROJECT CARD HOVER EFFECT ============ //

// *** Selectors ***




// *** EVENT LISTENERS ***
window.addEventListener("load", typewrite);
window.addEventListener("load", updateCopyright);

