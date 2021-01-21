console.log('Hello')

///createText function
//editText function
///saveTextfunction
///getTextfunction
///time functions

let body = document.body 
let editedWorkText
let row = document.querySelectorAll("row")
let individualContainer = document.querySelectorAll("col-sm-12")

let savedWork

let workText9am = document.querySelector("#work-text-9am")
let workText10am = document.querySelector("#work-text-10am")
let workText11am = document.querySelector("#work-text-11am")
let workText12pm = document.querySelector("#work-text-12pm")
let workText1pm = document.querySelector("#work-text-1pm")
let workText2pm = document.querySelector("#work-text-2pm")
let workText3pm = document.querySelector("#work-text-3pm")
let workText4pm = document.querySelector("#work-text-4pm")
let workText5pm = document.querySelector("#work-text-5pm")

let saveWork9am = document.querySelector("#save-button-9am")

workText9am.onclick = function () {
    editedWorkText = document.createElement('input')
    editedWorkText.setAttribute('type', 'text')
    workText9am.parentNode.replaceChild(editedWorkText, workText9am)
}

workText10am.onclick = function () {
    editedWorkText = document.createElement('input')
    editedWorkText.setAttribute('type', 'text')
    workText10am.parentNode.replaceChild(editedWorkText, workText10am)
}

workText11am.onclick = function () {
    editedWorkText = document.createElement('input')
    editedWorkText.setAttribute('type', 'text')
    workText11am.parentNode.replaceChild(editedWorkText, workText11am)
}

workText12pm.onclick = function () {
    editedWorkText = document.createElement('input')
    editedWorkText.setAttribute('type', 'text')
    workText12pm.parentNode.replaceChild(editedWorkText, workText12pm)
}

workText1pm.onclick = function () {
    editedWorkText = document.createElement('input')
    editedWorkText.setAttribute('type', 'text')
    workText1pm.parentNode.replaceChild(editedWorkText, workText1pm)
}

workText2pm.onclick = function () {
    editedWorkText = document.createElement('input')
    editedWorkText.setAttribute('type', 'text')
    workText2pm.parentNode.replaceChild(editedWorkText, workText2pm)
}

workText3pm.onclick = function () {
    editedWorkText = document.createElement('input')
    editedWorkText.setAttribute('type', 'text')
    workText3pm.parentNode.replaceChild(editedWorkText, workText3pm)
}

workText4pm.onclick = function () {
    editedWorkText = document.createElement('input')
    editedWorkText.setAttribute('type', 'text')
    workText4pm.parentNode.replaceChild(editedWorkText, workText4pm)
}

workText5pm.onclick = function () {
    editedWorkText = document.createElement('input')
    editedWorkText.setAttribute('type', 'text')
    workText5pm.parentNode.replaceChild(editedWorkText, workText5pm)
}

saveWork9am.onclick = function (event) {
  event.preventDefault()
  savedWork9am = editedWorkText.value
  workText9am = document.createElement("p")
  workText9am.textContent = savedWork9am
  editedWorkText.parentNode.replaceChild(workText9am, editedWorkText)
}


//let workText = document.querySelectorAll("#work-text")
//for (let count = 0; count < workText.length; count++) {
   // workText[count].addEventListener('click', function () {
     //   editedWorkText = document.createElement('input')
     //   editedWorkText.setAttribute('type', 'text')
      //  console.log(editedWorkText)
      //  workText.parentNode.replaceChild(editedWorkText, workText)
   // })
//}

let createWorkSchedule = function (workText, workList) {
    let workRow = $("<div>").
    addClass("col-sm-12")

    let workP = $("<p>")
    .addClass("m-1")
    .text(workText)

    workRow.append(workP)

    $("row" + workList).append(workRow)

}

/// question1 = document.createElement('h1');
// question1.textContent = "Commonly used data types do NOT Include:";
// question1.setAttribute('style', 'font-size:50px; padding-top: 90px');
// h1Header.parentNode.replaceChild(question1, h1Header);

//workText[1].addEventListener('click', function () {
   // console.log('Hi')
//})