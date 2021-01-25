//Declaring global variables to use in later functions

let editedWorkText;

//variables declaring each row 
let row9am = document.querySelector(".row-9am");
let row10am = document.querySelector(".row-10am");
let row11am = document.querySelector(".row-11am");
let row12pm = document.querySelector(".row-12pm");
let row1pm = document.querySelector(".row-1pm");
let row2pm = document.querySelector(".row-2pm");
let row3pm = document.querySelector(".row-3pm");
let row4pm = document.querySelector(".row-4pm");
let row5pm = document.querySelector(".row-5pm");

//variables declaring the time text itself
let text9am = document.querySelector("#time-9am");
let text10am = document.querySelector("#time-10am");
let text11am = document.querySelector("#time-11am");
let text12pm = document.querySelector("#time-12pm");
let text1pm = document.querySelector("#time-1pm");
let text2pm = document.querySelector("#time-2pm");
let text3pm = document.querySelector("#time-3pm");
let text4pm = document.querySelector("#time-4pm");
let text5pm = document.querySelector("#time-5pm");

///// variables declaring the text/schedule within each row
let workText9am = document.querySelector("#work-text-9am");
let workText10am = document.querySelector("#work-text-10am");
let workText11am = document.querySelector("#work-text-11am");
let workText12pm = document.querySelector("#work-text-12pm");
let workText1pm = document.querySelector("#work-text-1pm");
let workText2pm = document.querySelector("#work-text-2pm");
let workText3pm = document.querySelector("#work-text-3pm");
let workText4pm = document.querySelector("#work-text-4pm");
let workText5pm = document.querySelector("#work-text-5pm");

/// variables for the save button for each row
let saveWork9am = document.querySelector("#save-button-9am");
let saveWork10am = document.querySelector("#save-button-10am");
let saveWork11am = document.querySelector("#save-button-11am");
let saveWork12pm = document.querySelector("#save-button-12pm");
let saveWork1pm = document.querySelector("#save-button-1pm");
let saveWork2pm = document.querySelector("#save-button-2pm");
let saveWork3pm = document.querySelector("#save-button-3pm");
let saveWork4pm = document.querySelector("#save-button-4pm");
let saveWork5pm = document.querySelector("#save-button-5pm");

/// time variables
let currentTime = document.querySelector("#current-time");
let rightNow;
let displayDate = moment().format('LLLL'); ///to display the time above the Work Day schedule header
let now = new Date();
let nine9am = new Date();
nine9am.setHours(9, 0, 0, 0);
let ten10am = new Date();
ten10am.setHours(10, 0, 0, 0);
let eleven11am = new Date();
eleven11am.setHours(11, 0, 0, 0);
let twelve12pm = new Date();
twelve12pm.setHours(12, 0, 0, 0);
let one1pm = new Date();
one1pm.setHours(13, 0, 0, 0);
let two2pm = new Date();
two2pm.setHours(14, 0, 0, 0);
let three3pm = new Date();
three3pm.setHours(15, 0, 0, 0);
let four4pm = new Date();
four4pm.setHours(16, 0, 0, 0);
let five5pm = new Date();
five5pm.setHours(17, 0, 0, 0);

//function to display the current time
let displayCurrentTime = function () {
    rightNow = document.createElement('p');
    rightNow.textContent = displayDate;
    currentTime.parentNode.replaceChild(rightNow, currentTime);
}

////functions below adjust the color of the rows depending on the time
let change9amTimeColor = function () {
    if (now.getHours() === nine9am.getHours()) {
        row9am.setAttribute('style', 'background-color: #ff6961');
    } else if (now < nine9am) {
        row9am.setAttribute('style', 'background-color: #77dd77');
    } else if (now > nine9am) {
        row9am.setAttribute('style', 'background-color: #d3d3d3');
    }
}

let change10amTimeColor = function () {
    if (now.getHours() === ten10am.getHours()) {
        row10am.setAttribute('style', 'background-color: #ff6961');
    } else if (now < ten10am) {
        row10am.setAttribute('style', 'background-color: #77dd77');
    } else if (now > ten10am) {
        row10am.setAttribute('style', 'background-color: #d3d3d3');
    }
}

let change11amTimeColor = function () {
    if (now.getHours() === eleven11am.getHours()) {
        row11am.setAttribute('style', 'background-color: #ff6961');
    } else if (now < eleven11am) {
        row11am.setAttribute('style', 'background-color: #77dd77');
    } else if (now > eleven11am) {
        row11am.setAttribute('style', 'background-color: #d3d3d3');
    }
}

let change12pmTimeColor = function () {
    if (now.getHours() === twelve12pm.getHours()) {
        row12pm.setAttribute('style', 'background-color: #ff6961');
    } else if (now < twelve12pm) {
        row12pm.setAttribute('style', 'background-color: #77dd77');
    } else if (now > twelve12pm) {
        row12pm.setAttribute('style', 'background-color: #d3d3d3');
    }
}

let change1pmTimeColor = function () {
    if (now.getHours() === one1pm.getHours()) {
        row1pm.setAttribute('style', 'background-color: #ff6961');
    } else if (now < one1pm) {
        row1pm.setAttribute('style', 'background-color: #77dd77');
    } else if (now > one1pm) {
        row1pm.setAttribute('style', 'background-color: #d3d3d3');
    }
}

let change2pmTimeColor = function () {
    if (now.getHours() === two2pm.getHours()) {
        row2pm.setAttribute('style', 'background-color: #ff6961');
    } else if (now < two2pm) {
        row2pm.setAttribute('style', 'background-color: #77dd77');
    } else if (now > two2pm) {
        row2pm.setAttribute('style', 'background-color: #d3d3d3');
    }
}

let change3pmTimeColor = function () {
    if (now.getHours() === three3pm.getHours()) {
        row3pm.setAttribute('style', 'background-color: #ff6961');
    } else if (now < three3pm) {
        row3pm.setAttribute('style', 'background-color: #77dd77');
    } else if (now > three3pm) {
        row3pm.setAttribute('style', 'background-color: #d3d3d3');
    }
}

let change4pmTimeColor = function () {
    if (now.getHours() === four4pm.getHours()) {
        row4pm.setAttribute('style', 'background-color: #ff6961');
    } else if (now < four4pm) {
        row4pm.setAttribute('style', 'background-color: #77dd77');
    } else if (now > four4pm) {
        row4pm.setAttribute('style', 'background-color: #d3d3d3');
    }
}

let change5pmTimeColor = function () {
    if (now.getHours() === five5pm.getHours()) {
        row5pm.setAttribute('style', 'background-color: #ff6961');
    } else if (now < five5pm) {
        row5pm.setAttribute('style', 'background-color: #77dd77');
    } else if (now > five5pm) {
        row5pm.setAttribute('style', 'background-color: #d3d3d3');
    }
}

// save Storage and load storage functions for the 9am row
let saveStorage9am = function () {
    localStorage.setItem("workText9am", savedWork9am);
}

function loadStorage9am() {
    let myText = localStorage.getItem("workText9am") || "Select this text to input your event!";
    $('#work-text-9am').text(myText);
}

// save Storage and load storage functions for the 10am row
let saveStorage10am = function () {
    localStorage.setItem("workText10am", savedWork10am);
}

function loadStorage10am () {
    let myText = localStorage.getItem("workText10am") || "Select this text to input your event!";
    $('#work-text-10am').text(myText);
}

// save Storage and load storage functions for the 11am row
let saveStorage11am = function () {
    localStorage.setItem("workText11am", savedWork11am);
}

function loadStorage11am() {
    let myText = localStorage.getItem("workText11am") || "Select this text to input your event!";
    $('#work-text-11am').text(myText);
}

// save Storage and load storage functions for the 12pm row
let saveStorage12pm = function () {
    localStorage.setItem("workText12pm", savedWork12pm);
}

function loadStorage12pm () {
    let myText = localStorage.getItem("workText12pm") || "Select this text to input your event!";
    $('#work-text-12pm').text(myText);
}

// save Storage and load storage functions for the 1pm row
let saveStorage1pm = function () {
    localStorage.setItem("workText1pm", savedWork1pm);
}

function loadStorage1pm () {
    let myText = localStorage.getItem("workText1pm") || "Select this text to input your event!";
    $('#work-text-1pm').text(myText);
}

// save Storage and load storage functions for the 2pm row
let saveStorage2pm = function () {
    localStorage.setItem("workText2pm", savedWork2pm);
}

function loadStorage2pm () {
    let myText = localStorage.getItem("workText2pm") || "Select this text to input your event!";
    $('#work-text-2pm').text(myText);
}

// save Storage and load storage functions for the 3pm row
let saveStorage3pm = function () {
    localStorage.setItem("workText3pm", savedWork3pm);
}

function loadStorage3pm () {
    let myText = localStorage.getItem("workText3pm") || "Select this text to input your event!";
    $('#work-text-3pm').text(myText);
}

// save Storage and load storage functions for the 4pm row
let saveStorage4pm = function () {
    localStorage.setItem("workText4pm", savedWork4pm);
}

function loadStorage4pm () {
    let myText = localStorage.getItem("workText4pm") || "Select this text to input your event!";
    $('#work-text-4pm').text(myText);
}

// save Storage and load storage functions for the 5pm row
let saveStorage5pm = function () {
    localStorage.setItem("workText5pm", savedWork5pm);
}

function loadStorage5pm () {
    let myText = localStorage.getItem("workText5pm") || "Select this text to input your event!";
    $('#work-text-5pm').text(myText);
}

// function for below 9am row when trying to change the text/schedule text 
workText9am.onclick = function () {
    editedWorkText = document.createElement('input');
    editedWorkText.setAttribute('type', 'text');
    workText9am.parentNode.replaceChild(editedWorkText, workText9am);
}

// function for below 10am row when trying to change the text/schedule text 
workText10am.onclick = function () {
    editedWorkText = document.createElement('input');
    editedWorkText.setAttribute('type', 'text');
    workText10am.parentNode.replaceChild(editedWorkText, workText10am);
}

// function for below 11am row when trying to change the text/schedule text 
workText11am.onclick = function () {
    editedWorkText = document.createElement('input');
    editedWorkText.setAttribute('type', 'text');
    workText11am.parentNode.replaceChild(editedWorkText, workText11am);
}

// function for below 12pm row when trying to change the text/schedule text 
workText12pm.onclick = function () {
    editedWorkText = document.createElement('input');
    editedWorkText.setAttribute('type', 'text');
    workText12pm.parentNode.replaceChild(editedWorkText, workText12pm);
}

// function for below 1pm row when trying to change the text/schedule text 
workText1pm.onclick = function () {
    editedWorkText = document.createElement('input');
    editedWorkText.setAttribute('type', 'text');
    workText1pm.parentNode.replaceChild(editedWorkText, workText1pm);
}

// function for below 2pm row when trying to change the text/schedule text 
workText2pm.onclick = function () {
    editedWorkText = document.createElement('input');
    editedWorkText.setAttribute('type', 'text');
    workText2pm.parentNode.replaceChild(editedWorkText, workText2pm);
}

// function for below 3pm row when trying to change the text/schedule text
workText3pm.onclick = function () {
    editedWorkText = document.createElement('input');
    editedWorkText.setAttribute('type', 'text');
    workText3pm.parentNode.replaceChild(editedWorkText, workText3pm);
}

// function for below 4pm row when trying to change the text/schedule text
workText4pm.onclick = function () {
    editedWorkText = document.createElement('input');
    editedWorkText.setAttribute('type', 'text');
    workText4pm.parentNode.replaceChild(editedWorkText, workText4pm);
}

// function for below 5pm row when trying to change the text/schedule text
workText5pm.onclick = function () {
    editedWorkText = document.createElement('input');
    editedWorkText.setAttribute('type', 'text');
    workText5pm.parentNode.replaceChild(editedWorkText, workText5pm);
}

// function to save the text within 9am row, also utilizing saveStorage function
saveWork9am.onclick = function (event) {
    savedWork9am = editedWorkText.value;
    workText9am = document.createElement("p");
    workText9am.textContent = savedWork9am;
    editedWorkText.parentNode.replaceChild(workText9am, editedWorkText);
    saveStorage9am();

    workText9am.onclick = function () {
        editedWorkText = document.createElement('input');
        editedWorkText.setAttribute('type', 'text');
        workText9am.parentNode.replaceChild(editedWorkText, workText9am);
    }
}

// function to save the text within 10am row, also utilizing saveStorage function
saveWork10am.onclick = function (event) {
    savedWork10am = editedWorkText.value;
    workText10am = document.createElement("p");
    workText10am.textContent = savedWork10am;
    editedWorkText.parentNode.replaceChild(workText10am, editedWorkText);
    saveStorage10am();

    workText10am.onclick = function () {
        editedWorkText = document.createElement('input');
        editedWorkText.setAttribute('type', 'text');
        workText10am.parentNode.replaceChild(editedWorkText, workText10am);
    }
}

// function to save the text within 11am row, also utilizing saveStorage function
saveWork11am.onclick = function (event) {
    savedWork11am = editedWorkText.value;
    workText11am = document.createElement("p");
    workText11am.textContent = savedWork11am;
    editedWorkText.parentNode.replaceChild(workText11am, editedWorkText);
    saveStorage11am();

    workText11am.onclick = function () {
        editedWorkText = document.createElement('input');
        editedWorkText.setAttribute('type', 'text');
        workText11am.parentNode.replaceChild(editedWorkText, workText11am);
    }
}

// function to save the text within 12pm row, also utilizing saveStorage function
saveWork12pm.onclick = function (event) {
    savedWork12pm = editedWorkText.value;
    workText12pm = document.createElement("p");
    workText12pm.textContent = savedWork12pm;
    editedWorkText.parentNode.replaceChild(workText12pm, editedWorkText);
    saveStorage12pm();

    workText12pm.onclick = function () {
        editedWorkText = document.createElement('input');
        editedWorkText.setAttribute('type', 'text');
        workText12pm.parentNode.replaceChild(editedWorkText, workText12pm);
    }
}

// function to save the text within 1pm row, also utilizing saveStorage function
saveWork1pm.onclick = function (event) {
    savedWork1pm = editedWorkText.value;
    workText1pm = document.createElement("p");
    workText1pm.textContent = savedWork1pm;
    editedWorkText.parentNode.replaceChild(workText1pm, editedWorkText);
    saveStorage1pm();

    workText1pm.onclick = function () {
        editedWorkText = document.createElement('input');
        editedWorkText.setAttribute('type', 'text');
        workText1pm.parentNode.replaceChild(editedWorkText, workText1pm);
    }
}

// function to save the text within 2pm row, also utilizing saveStorage function
saveWork2pm.onclick = function (event) {
    savedWork2pm = editedWorkText.value;
    workText2pm = document.createElement("p");
    workText2pm.textContent = savedWork2pm;
    editedWorkText.parentNode.replaceChild(workText2pm, editedWorkText);
    saveStorage2pm();

    workText2pm.onclick = function () {
        editedWorkText = document.createElement('input');
        editedWorkText.setAttribute('type', 'text');
        workText2pm.parentNode.replaceChild(editedWorkText, workText2pm);
    }
}

// function to save the text within 3pm row, also utilizing saveStorage function
saveWork3pm.onclick = function (event) {
    savedWork3pm = editedWorkText.value;
    workText3pm = document.createElement("p");
    workText3pm.textContent = savedWork3pm;
    editedWorkText.parentNode.replaceChild(workText3pm, editedWorkText);
    saveStorage3pm();

    workText3pm.onclick = function () {
        editedWorkText = document.createElement('input');
        editedWorkText.setAttribute('type', 'text');
        workText3pm.parentNode.replaceChild(editedWorkText, workText3pm);
    }
}

// function to save the text within 4pm row, also utilizing saveStorage function
saveWork4pm.onclick = function (event) {
    savedWork4pm = editedWorkText.value;
    workText4pm = document.createElement("p");
    workText4pm.textContent = savedWork4pm;
    editedWorkText.parentNode.replaceChild(workText4pm, editedWorkText);
    saveStorage4pm();

    workText4pm.onclick = function () {
        editedWorkText = document.createElement('input');
        editedWorkText.setAttribute('type', 'text');
        workText4pm.parentNode.replaceChild(editedWorkText, workText4pm);
    }
}

// function to save the text within 5pm row, also utilizing saveStorage function
saveWork5pm.onclick = function (event) {
    savedWork5pm = editedWorkText.value;
    workText5pm = document.createElement("p");
    workText5pm.textContent = savedWork5pm;
    editedWorkText.parentNode.replaceChild(workText5pm, editedWorkText);
    saveStorage5pm();

    workText5pm.onclick = function () {
        editedWorkText = document.createElement('input');
        editedWorkText.setAttribute('type', 'text');
        workText5pm.parentNode.replaceChild(editedWorkText, workText5pm);
    }
}

//// calling each function to run
displayCurrentTime(); //calling function to display current time

///calling functions to change the row color based on time
change9amTimeColor();
change10amTimeColor();
change11amTimeColor();
change12pmTimeColor();
change1pmTimeColor();
change2pmTimeColor();
change3pmTimeColor();
change4pmTimeColor();
change5pmTimeColor();

//// changing the text content to display whatever is loaded from local storage functions
$(document).ready(function () {
    $(".btn").on("click", function () {
    loadStorage9am();
    loadStorage10am();
    loadStorage11am();
    loadStorage12pm();
    loadStorage1pm();
    loadStorage2pm();
    loadStorage3pm();
    loadStorage4pm();
    loadStorage5pm();
    })
    function onReload()
    {
        loadStorage9am();
        loadStorage10am();
        loadStorage11am();
        loadStorage12pm();
        loadStorage1pm();
        loadStorage2pm();
        loadStorage3pm();
        loadStorage4pm();
        loadStorage5pm();
    }
    onReload();
})