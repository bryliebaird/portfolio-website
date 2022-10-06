// =========== COPYRIGHT UPDATE YEAR ============ //

// *** Selectors ***
let yearSpan = document.querySelector("#year");
let dateObject = new Date();
let year = dateObject.getFullYear().toString();

// *** Function Declaration ***
function updateCopyright(){
   yearSpan.innerHTML = year;
}

// *** Event Listeners ***
window.onload = function(){
    updateCopyright();
}
