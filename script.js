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
let text9am = document.querySelector("#time-9am") 
///maybe declare this value as a specific time??

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

let displayDate = moment().format('LLLL') ///to display the time above the Work Day schedule header

let now = new Date() //moment().format('LLLL')

let nine9am = new Date()
nine9am.setHours(9, 0, 0, 0)

let ten10am = new Date()
ten10am.setHours(10, 0, 0, 0)


let eleven11am = new Date()
eleven11am.setHours(11, 0, 0, 0)

let twelve12pm = new Date()
twelve12pm.setHours(12, 0, 0, 0)
///////

let one1pm = new Date()
one1pm.setHours(13, 0, 0, 0)

let two2pm = new Date()
two2pm.setHours(14, 0, 0, 0)

let three3pm = new Date()
three3pm.setHours(15, 0, 0, 0)

let four4pm = new Date()
four4pm.setHours(16, 0, 0, 0)

let five5pm = new Date()
five5pm.setHours(17, 0, 0, 0)

let timeColorBlock = document.querySelectorAll("time")


//function to display the current time
let displayCurrentTime = function () {
    rightNow = document.createElement('p')
    rightNow.textContent = displayDate
    currentTime.parentNode.replaceChild(rightNow, currentTime)
}

///maybe distguish even function separately based on time?
////may need to add an else clause just to turn the rows white when the clock is at a time which isnt displayed on the planner
let change9amTimeColor = function () {
  if (now.getHours() === nine9am.getHours()) {
      row9am.setAttribute('style', 'background-color: #ff6961')
  } else if (now < nine9am) {
      row9am.setAttribute('style', 'background-color: #77dd77')
  } else if (now > nine9am){ ////may have to adjust these else statement to reset the color of the rowss
      row9am.setAttribute('style', 'background-color: #d3d3d3')
  }
//
}

let change10amTimeColor = function () {
    if (now.getHours() === ten10am.getHours()) {
        row10am.setAttribute('style', 'background-color: #ff6961')
    } else if (now < ten10am) {
        row10am.setAttribute('style', 'background-color: #77dd77')
    } else if (now > ten10am) {
        row10am.setAttribute('style', 'background-color: #d3d3d3')
    }
  
  }


  let change11amTimeColor = function () {
    if (now.getHours() === eleven11am.getHours()) {
        row11am.setAttribute('style', 'background-color: #ff6961')
    } else if (now < eleven11am) {
        row11am.setAttribute('style', 'background-color: #77dd77')
    } else if (now > eleven11am) {
        row11am.setAttribute('style', 'background-color: #d3d3d3')
    }
  
  }


  let change12pmTimeColor = function () {
    if (now.getHours() === twelve12pm.getHours()) {
        row12pm.setAttribute('style', 'background-color: #ff6961')
    } else if (now < twelve12pm) {
        row12pm.setAttribute('style', 'background-color: #77dd77')
    } else if (now > twelve12pm) {
        row12pm.setAttribute('style', 'background-color: #d3d3d3')
    }
  
  }

  let change1pmTimeColor = function () {
    if (now.getHours() === one1pm.getHours()) {
        row1pm.setAttribute('style', 'background-color: #ff6961')
    } else if (now < one1pm) {
        row1pm.setAttribute('style', 'background-color: #77dd77')
    } else if (now > one1pm) {
        row1pm.setAttribute('style', 'background-color: #d3d3d3')
    }
  
  }

  let change2pmTimeColor = function () {
    if (now.getHours() === two2pm.getHours()) {
        row2pm.setAttribute('style', 'background-color: #ff6961')
    } else if (now < two2pm) {
        row2pm.setAttribute('style', 'background-color: #77dd77')
    } else if (now > two2pm) {
        row2pm.setAttribute('style', 'background-color: #d3d3d3')
    }
  
  }

  let change3pmTimeColor = function () {
    if (now.getHours() === three3pm.getHours()) {
        row3pm.setAttribute('style', 'background-color: #ff6961')
    } else if (now < three3pm) {
        row3pm.setAttribute('style', 'background-color: #77dd77')
    } else if (now > three3pm) {
        row3pm.setAttribute('style', 'background-color: #d3d3d3')
    }
  
  }

  let change4pmTimeColor = function () {
    if (now.getHours() === four4pm.getHours()) {
        row4pm.setAttribute('style', 'background-color: #ff6961')
    } else if (now < four4pm) {
        row4pm.setAttribute('style', 'background-color: #77dd77')
    } else if (now > four4pm) {
        row4pm.setAttribute('style', 'background-color: #d3d3d3')
    }
  
  }

  let change5pmTimeColor = function () {
    if (now.getHours() === five5pm.getHours()) {
        row5pm.setAttribute('style', 'background-color: #ff6961')
    } else if (now < five5pm) {
        row5pm.setAttribute('style', 'background-color: #77dd77')
    } else if (now > five5pm) {
        row5pm.setAttribute('style', 'background-color: #d3d3d3')
    }
  
  }

  let saveStorage9am = function () {
      localStorage.setItem("workText9am", JSON.stringify(savedWork9am)) //workText9am may have to be in quotes or declared as a variable
  }

let loadStorage9am = function () {
    let myText = localStorage.getItem("workText9am")
    console.log(myText)
    return myText.replace(/[""]/gi, '');
}


let saveStorage10am = function () {
    localStorage.setItem("workText10am", JSON.stringify(savedWork10am)) 
}

let loadStorage10am = function () {
     let myText = localStorage.getItem("workText10am")
     console.log(myText)
     return myText.replace(/[""]/gi, '');
}

let saveStorage11am = function () {
    localStorage.setItem("workText11am", JSON.stringify(savedWork11am)) 
}

let loadStorage11am = function () {
     let myText = localStorage.getItem("workText11am")
     console.log(myText)
     return myText.replace(/[""]/gi, '');
}


let saveStorage12pm = function () {
    localStorage.setItem("workText12pm", JSON.stringify(savedWork12pm)) 
}

let loadStorage12pm = function () {
     let myText = localStorage.getItem("workText12pm")
     console.log(myText)
     return myText.replace(/[""]/gi, '');
}

let saveStorage1pm = function () {
    localStorage.setItem("workText1pm", JSON.stringify(savedWork1pm)) 
}

let loadStorage1pm = function () {
     let myText = localStorage.getItem("workText1pm")
     console.log(myText)
     return myText.replace(/[""]/gi, '');
}

let saveStorage2pm = function () {
    localStorage.setItem("workText2pm", JSON.stringify(savedWork2pm)) 
}

let loadStorage2pm = function () {
     let myText = localStorage.getItem("workText2pm")
     console.log(myText)
     return myText.replace(/[""]/gi, '');
}

let saveStorage3pm = function () {
    localStorage.setItem("workText3pm", JSON.stringify(savedWork3pm)) 
}

let loadStorage3pm = function () {
     let myText = localStorage.getItem("workText3pm")
     console.log(myText)
     return myText.replace(/[""]/gi, '');
}


let saveStorage4pm = function () {
    localStorage.setItem("workText4pm", JSON.stringify(savedWork4pm)) 
}

let loadStorage4pm = function () {
     let myText = localStorage.getItem("workText4pm")
     console.log(myText) ///this is null until i save/load data into localstorage
     return myText.replace(/[""]/gi, '');
}

let saveStorage5pm = function () {
    localStorage.setItem("workText5pm", JSON.stringify(savedWork5pm)) 
}

let loadStorage5pm = function () {
     let myText = localStorage.getItem("workText5pm")
     console.log(myText) ///this is null until i save/load data into localstorage
     return myText.replace(/[""]/gi, '');
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
  workText9am.setAttribute('id', 'work-text-9am')
  workText9am.textContent = savedWork9am
  editedWorkText.parentNode.replaceChild(workText9am, editedWorkText)
  saveStorage9am()

  //// this correctly loads the value
  console.log(editedWorkText.value)
/// below doesnt work
//workText9am.textContent = loadStorage9am()

}

saveWork10am.onclick = function (event) {
    //event.preventDefault()
    savedWork10am = editedWorkText.value
    workText10am = document.createElement("p")
    workText10am.textContent = savedWork10am
    editedWorkText.parentNode.replaceChild(workText10am, editedWorkText)
    saveStorage10am()
  }

  saveWork11am.onclick = function (event) {
    //event.preventDefault()
    savedWork11am = editedWorkText.value
    workText11am = document.createElement("p")
    workText11am.textContent = savedWork11am
    editedWorkText.parentNode.replaceChild(workText11am, editedWorkText)
    saveStorage11am()
  }

  saveWork12pm.onclick = function (event) {
    //event.preventDefault()
    savedWork12pm = editedWorkText.value
    workText12pm = document.createElement("p")
    workText12pm.textContent = savedWork12pm
    editedWorkText.parentNode.replaceChild(workText12pm, editedWorkText)
    saveStorage12pm()
  }

  saveWork1pm.onclick = function (event) {
    //event.preventDefault()
    savedWork1pm = editedWorkText.value
    workText1pm = document.createElement("p")
    workText1pm.textContent = savedWork1pm
    editedWorkText.parentNode.replaceChild(workText1pm, editedWorkText)
    saveStorage1pm()
  }

  saveWork2pm.onclick = function (event) {
    //event.preventDefault()
    savedWork2pm = editedWorkText.value
    workText2pm = document.createElement("p")
    workText2pm.textContent = savedWork2pm
    editedWorkText.parentNode.replaceChild(workText2pm, editedWorkText)
    saveStorage2pm()
  }

  saveWork3pm.onclick = function (event) {
    //event.preventDefault()
    savedWork3pm = editedWorkText.value
    workText3pm = document.createElement("p")
    workText3pm.textContent = savedWork3pm
    editedWorkText.parentNode.replaceChild(workText3pm, editedWorkText)
    saveStorage3pm()
  }

  saveWork4pm.onclick = function (event) {
    //event.preventDefault()
    savedWork4pm = editedWorkText.value
    workText4pm = document.createElement("p")
    workText4pm.textContent = savedWork4pm
    editedWorkText.parentNode.replaceChild(workText4pm, editedWorkText)
    saveStorage4pm()
  }

  saveWork5pm.onclick = function (event) {
    //event.preventDefault()
    savedWork5pm = editedWorkText.value
    workText5pm = document.createElement("p")
    workText5pm.textContent = savedWork5pm
    editedWorkText.parentNode.replaceChild(workText5pm, editedWorkText)
    saveStorage5pm()
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

change9amTimeColor() ///calling function to change the row color based on time INCOMPLETE!!

change10amTimeColor()

change11amTimeColor()

change12pmTimeColor()

change1pmTimeColor()

change2pmTimeColor()

change3pmTimeColor()

change4pmTimeColor()

change5pmTimeColor()

/////right now, i have to add each data set in this order, in order for the data to appear
workText9am.textContent = loadStorage9am()

workText10am.textContent = loadStorage10am()

workText11am.textContent = loadStorage11am()

workText12pm.textContent = loadStorage12pm()

workText1pm.textContent = loadStorage1pm()

workText2pm.textContent = loadStorage2pm()

workText3pm.textContent = loadStorage3pm()

workText4pm.textContent = loadStorage4pm()

workText5pm.textContent = loadStorage5pm()



