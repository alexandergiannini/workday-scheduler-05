
///createText function
//editText function
///saveTextfunction
///getTextfunction
///time functions

let body = document.body 
let editedWorkText

///variables declaring each row (for now)
let row9am = document.querySelector(".row-9am")
console.log(row9am)

let row10am = document.querySelector(".row-10am") /// need to adjust this
console.log(row10am)

let row11am = document.querySelector(".row-11am")
console.log(row11am)

let row12pm = document.querySelector(".row-12pm")

let row1pm = document.querySelector(".row-1pm")

let row2pm = document.querySelector(".row-2pm")

let row3pm = document.querySelector(".row-3pm")

let row4pm = document.querySelector(".row-4pm")

let row5pm = document.querySelector(".row-5pm")
////////////////////////////


/////////variables declaring the time text itself
let text9am = document.querySelector("#time-9am") ///maybe declare this value as a specific time??

let nine9am = "9:00"
//let nineeee9am = moment(nineeee9am)
console.log(nine9am)

let ten10am = "10:00"
console.log(ten10am)

let eleven11am = "11:00"
console.log(eleven11am)
///////





let text10am = document.querySelector("#time-10am")

let text11am = document.querySelector("#time-11am")

let text12pm = document.querySelector("#time-12pm")

let text1pm = document.querySelector("#time-1pm")

let text2pm = document.querySelector("#time-2pm")

let text3pm = document.querySelector("#time-3pm")

let text4pm = document.querySelector("#time-4pm")

let text5pm = document.querySelector("#time-5pm")
////////



let individualContainer = document.querySelectorAll("col-sm-12") ///need to adjust this
console.log(individualContainer)
let entireContainer = document.querySelector("container")



let savedWork

let workText9am = document.querySelector("#work-text-9am")
console.log(workText9am)
let workText10am = document.querySelector("#work-text-10am")
let workText11am = document.querySelector("#work-text-11am")
let workText12pm = document.querySelector("#work-text-12pm")
let workText1pm = document.querySelector("#work-text-1pm")
let workText2pm = document.querySelector("#work-text-2pm")
let workText3pm = document.querySelector("#work-text-3pm")
let workText4pm = document.querySelector("#work-text-4pm")
let workText5pm = document.querySelector("#work-text-5pm")

let saveWork9am = document.querySelector("#save-button-9am")
let saveWork10am = document.querySelector("#save-button-10am")
let saveWork11am = document.querySelector("#save-button-11am")
let saveWork12pm = document.querySelector("#save-button-12pm")
let saveWork1pm = document.querySelector("#save-button-1pm")
let saveWork2pm = document.querySelector("#save-button-2pm")
let saveWork3pm = document.querySelector("#save-button-3pm")
let saveWork4pm = document.querySelector("#save-button-4pm")
let saveWork5pm = document.querySelector("#save-button-5pm")

let currentTime = document.querySelector("#current-time")
let rightNow
let now = moment().format('LLLL')
//console.log(now)


let timeColorBlock = document.querySelectorAll("time")


//using this as an example
let myTime = true

//function to display the current time
let displayCurrentTime = function () {
    rightNow = document.createElement('p')
    rightNow.textContent = now
    currentTime.parentNode.replaceChild(rightNow, currentTime)
}

///maybe distguish even function separately based on time?
let changeTimeColor = function () {
    if (rightNow > ten10am) {
       row10am.setAttribute('style', 'background-color: #d3d3d3')
   } else if (rightNow > nine9am) {
       row9am.setAttribute('style', 'background-color: #d3d3d3')
   } else if (rightNow > eleven11am) {
       row11am.setAttribute('style', 'background-color: #d3d3d3')
   }
    

}

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
  //event.preventDefault()
  savedWork9am = editedWorkText.value
  workText9am = document.createElement("p")
  workText9am.textContent = savedWork9am
  editedWorkText.parentNode.replaceChild(workText9am, editedWorkText)
}

saveWork10am.onclick = function (event) {
    //event.preventDefault()
    savedWork10am = editedWorkText.value
    workText10am = document.createElement("p")
    workText10am.textContent = savedWork10am
    editedWorkText.parentNode.replaceChild(workText10am, editedWorkText)
  }

  saveWork11am.onclick = function (event) {
    //event.preventDefault()
    savedWork11am = editedWorkText.value
    workText11am = document.createElement("p")
    workText11am.textContent = savedWork11am
    editedWorkText.parentNode.replaceChild(workText11am, editedWorkText)
  }

  saveWork12pm.onclick = function (event) {
    //event.preventDefault()
    savedWork12pm = editedWorkText.value
    workText12pm = document.createElement("p")
    workText12pm.textContent = savedWork12pm
    editedWorkText.parentNode.replaceChild(workText12pm, editedWorkText)
  }

  saveWork1pm.onclick = function (event) {
    //event.preventDefault()
    savedWork1pm = editedWorkText.value
    workText1pm = document.createElement("p")
    workText1pm.textContent = savedWork1pm
    editedWorkText.parentNode.replaceChild(workText1pm, editedWorkText)
  }

  saveWork2pm.onclick = function (event) {
    //event.preventDefault()
    savedWork2pm = editedWorkText.value
    workText2pm = document.createElement("p")
    workText2pm.textContent = savedWork2pm
    editedWorkText.parentNode.replaceChild(workText2pm, editedWorkText)
  }

  saveWork3pm.onclick = function (event) {
    //event.preventDefault()
    savedWork3pm = editedWorkText.value
    workText3pm = document.createElement("p")
    workText3pm.textContent = savedWork3pm
    editedWorkText.parentNode.replaceChild(workText3pm, editedWorkText)
  }

  saveWork4pm.onclick = function (event) {
    //event.preventDefault()
    savedWork4pm = editedWorkText.value
    workText4pm = document.createElement("p")
    workText4pm.textContent = savedWork4pm
    editedWorkText.parentNode.replaceChild(workText4pm, editedWorkText)
  }

  saveWork5pm.onclick = function (event) {
    //event.preventDefault()
    savedWork5pm = editedWorkText.value
    workText5pm = document.createElement("p")
    workText5pm.textContent = savedWork5pm
    editedWorkText.parentNode.replaceChild(workText5pm, editedWorkText)
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

//let createWorkSchedule = function (workText, workList) {
   // let workRow = $("<div>").
  //  addClass("col-sm-12")
///
  //  let workP = $("<p>")
   // .addClass("m-1")
   // .text(workText)

  //  workRow.append(workP)

  ///  $("row" + workList).append(workRow)

//}

/// question1 = document.createElement('h1');
// question1.textContent = "Commonly used data types do NOT Include:";
// question1.setAttribute('style', 'font-size:50px; padding-top: 90px');
// h1Header.parentNode.replaceChild(question1, h1Header);

//workText[1].addEventListener('click', function () {
   // console.log('Hi')
//})

displayCurrentTime() //calling function to display current time

changeTimeColor() ///calling function to change the row color based on time INCOMPLETE!!