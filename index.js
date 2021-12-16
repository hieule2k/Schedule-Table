const subjectList = [
  { subject: "Math", id: "math", class: "math__color", idDiv: "mathDiv" },
  {
    subject: "history",
    id: "history",
    class: "history__color",
    idDiv: "historyDiv",
  },
  {
    subject: "literature",
    id: "literature",
    class: "literature__color",
    idDiv: "literatureDiv",
  },
  {
    subject: "english",
    id: "english",
    class: "english__color",
    idDiv: "englishDiv",
  },
  {
    subject: "biology",
    id: "biology",
    class: "biology__color",
    idDiv: "biologyDiv",
  },
  {
    subject: "Chemistry",
    id: "chemistry",
    class: "chemistry__color",
    idDiv: "chemistryDiv",
  },
  {
    subject: "Physics",
    id: "physics",
    class: "physics__color",
    idDiv: "physicsDiv",
  },
  {
    subject: "Physical education",
    id: "physicalEducation",
    class: "physicalEducation__color",
    idDiv: "physicalEducationDiv",
  },
];

for (let i = 0; i < subjectList.length; i++) {
  let sub = subjectList[i];
  const subjectTextNode = document.createTextNode(sub.subject);
  const superDiv = document.createElement("div");
  const div = document.createElement("div");
  div.setAttribute("class", "subject__name");
  div.appendChild(subjectTextNode);
  div.setAttribute("id", sub.id);
  div.classList.add(sub.class);
  superDiv.setAttribute("id", sub.idDiv);
  superDiv.appendChild(div);
  document.getElementById("father-div").appendChild(superDiv);
}

var array = [
  [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
];

// function getSchedule() {
//   return JSON.parse(localStorage.getItem("array"));
// }

function drawSchedule(array) {
  for (let i = 0; i < array.length; i++) {
    var tr = document.createElement("tr");
    document.getElementById("my-row").appendChild(tr);
    for (let j = 0; j < array[i].length; j++) {
      var tdElement = document.createElement("td");
      if (array[i][j] && typeof array[i][j] === "object") {
        var tdElementTextNode = document.createTextNode(array[i][j].subject);
        var daddy = document.createElement("div");
        daddy.setAttribute("class", "subject-name--fit");
        daddy.classList.add(array[i][j].class);
        daddy.appendChild(tdElementTextNode);
        tdElement.appendChild(daddy);
      } else {
        tdElement.innerHTML = array[i][j];
      }
      tr.appendChild(tdElement);
      var button = document.createElement("button");
      tdElement.prepend(button);
      button.setAttribute("class", "close-button");

      if (tdElement.contains(daddy)) {
        button.classList.add("close-button--hover");
        const removeOndrops = document.querySelectorAll(".close-button--hover");
        for (let i = 0; i < removeOndrops.length; i++) {
          var removeOndrop = removeOndrops[i];
          removeOndrop.parentElement.removeAttribute("ondrop");
          removeOndrop.parentElement.removeAttribute("ondragover");
        }
      }

      // function removeElementFromArray() {
      //   var rows = document.getElementById("my-row").getElementsByTagName("tr");
      //   for (let i = 0; i < rows.length; i++) {
      //     var row = rows[i];
      //     var cells = row.childNodes;
      //     for (let j = 0; j < cells.length; j++) {
      //       var cell = cells[j];
      //       if (cell === target) {
      //         array[i][j] = "";
      //       }
      //     }
      //   }
      // }
      function remover(elem) {
        elem.target.nextElementSibling.remove();
        elem.target.classList.remove("close-button--hover");
        elem.target.parentElement.setAttribute("ondrop", "dropIn(event)");
        elem.target.parentElement.setAttribute(
          "ondragover",
          "allowDrop(event)"
        );
        // removeElementFromArray();
      }

      var removeSubject = document.querySelectorAll(".close-button--hover");
      for (let i = 0; i < removeSubject.length; i++) {
        removeSubject[i].addEventListener("click", remover);
      }
    }
  }
}

// function removeElementFromArray(event) {
//   var rows = document.getElementById("my-row").getElementsByTagName("tr");
//   for (let i = 0; i < rows.length; i++) {
//     var row = rows[i];
//     var cells = row.childNodes;
//     for (let j = 0; j < cells.length; j++) {
//       var cell = cells[j];
//       if (cell === event.target) {
//         array[i][j] = "";
//       }
//     }
//   }
// }

function addSubjectToScheduleUI(target, data) {
  var dataId = document.getElementById(data);
  target.appendChild(dataId);
  dataId.classList.add("subject-name--fit");
  dataId.classList.remove("subject__name");
  dataId.parentElement.removeAttribute("ondrop");
  dataId.parentElement.removeAttribute("ondragover");
  var copy = dataId;
  var cln = copy.cloneNode(true);
  cln.classList.add("subject__name");
  cln.classList.remove("subject-name--fit");
  document.getElementById(data + "Div").prepend(cln);

  var remove = document.getElementsByClassName("subject-name--fit");
  for (let i = 0; i < remove.length; i++) {
    remove[i].removeAttribute("id");
    remove[i].removeAttribute("draggable");
    remove[i].removeAttribute("ondragstart");
  }
}

function creatTable() {
  // var schedule = getSchedule();
  // if (schedule) {
  //   array = schedule;
  // }
  drawSchedule(array);
}
creatTable();
function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

const subjectArray = [];

function dropIn(event) {
  event.preventDefault(event);
  var data = event.dataTransfer.getData("text");

  var target = event.target;
  addSubjectToScheduleUI(target, data);

  function addElementToArray() {
    var rows = document.getElementById("my-row").getElementsByTagName("tr");
    for (let i = 0; i < rows.length; i++) {
      var row = rows[i];
      var cells = row.childNodes;
      for (let j = 0; j < cells.length; j++) {
        var cell = cells[j];
        if (cell === event.target) {
          var subject = {
            subject: data,
            id: data,
            class: data + "__color",
            idDiv: data + "Div",
          };
          array[i][j] = subject;
        }
      }
    }
  }

  // function removeElementFromArray() {
  //   var rows = document.getElementById("my-row").getElementsByTagName("tr");
  //   for (let i = 0; i < rows.length; i++) {
  //     var row = rows[i];
  //     var cells = row.childNodes;
  //     for (let j = 0; j < cells.length; j++) {
  //       var cell = cells[j];

  //       if (cell === event.target) {
  //         array[i][j] = "";
  //       }
  //     }
  //   }
  // }

  addElementToArray();

  var addButtonClass = document.querySelectorAll(".subject-name--fit");
  for (let i = 0; i < addButtonClass.length; i++) {
    addButtonClass[i].parentElement
      .querySelector(".close-button")
      .classList.add("close-button--hover");
  }

  // remove subject in table
  function remover(elem) {
    elem.target.nextElementSibling.remove();
    elem.target.classList.remove("close-button--hover");
    elem.target.parentElement.setAttribute("ondrop", "dropIn(event)");
    elem.target.parentElement.setAttribute("ondragover", "allowDrop(event)");
    // removeElementFromArray();
  }

  //remover subject in table by click button
  var removeSubject = document.querySelectorAll(".close-button--hover");
  for (let i = 0; i < removeSubject.length; i++) {
    removeSubject[i].addEventListener("click", remover);
  }

  var getAllTd = document.querySelectorAll("td");
  for (let i = 0; i < 7; i++) {
    getAllTd[i]
      .querySelector(".close-button")
      .classList.add("delete-all-column");
  }
  var closeColumn = document.querySelectorAll(".delete-all-column");
  for (let i = 0; i < closeColumn.length; i++) {
    closeColumn[i].addEventListener("click", removeColumn);
  }
}

var subjectListz = document.querySelectorAll(".subject__name");
for (let i = 0; i < subjectListz.length; i++) {
  subjectListz[i].setAttribute("draggable", "true");
  subjectListz[i].setAttribute("ondragstart", "drag(event)");
}

function setOndropAtribute() {
  var cells = document.querySelectorAll("td");
  for (let i = 0; i < cells.length; i++) {
    let cell = cells[i];
    if (cell.getElementsByTagName("div").length === 0) {
      cell.setAttribute("ondrop", "dropIn(event)");
      cell.setAttribute("ondragover", "allowDrop(event)");
    }
  }
}
// creatTable();
setOndropAtribute();

function removeDropOnDays() {
  var hehe = document.querySelectorAll("td");
  for (let i = 0; i < 7; i++) {
    hehe[i].removeAttribute("ondrop");
    hehe[i].removeAttribute("ondragover");
  }
}
removeDropOnDays();

// remove subject in a column
function removeColumn(elem) {
  let header = array[0];
  let removeColumnIndex = header.indexOf(elem.target.parentElement.textContent);

  let rowList = document.querySelectorAll("tr");

  for (let i = 1; i < rowList.length; i++) {
    let row = rowList[i].childNodes;
    data = row[removeColumnIndex].childNodes[1];
    if (data) {
      data.previousSibling.classList.remove("close-button--hover");
      data.remove();
      setOndropAtribute();
      removeDropOnDays();
    }
  }
}

// generate new subject
(function () {
  const form = document.createElement("div");
  const input = document.createElement("input");
  const label = document.createElement("label");
  const button = document.createElement("button");
  const inputColor = document.createElement("input");
  const form2 = document.createElement("div");
  const label2 = document.createElement("label");

  button.setAttribute("id", "btn");
  form2.setAttribute("class", "form-control");
  form.setAttribute("class", "form-control");
  label.setAttribute("class", "add-label");
  label2.setAttribute("class", "add-label");
  inputColor.setAttribute("type", "color");
  inputColor.setAttribute("id", "color");
  input.setAttribute("id", "subject");

  input.setAttribute("placeholder", "please enter a subject ");
  form.appendChild(label);
  form.appendChild(input);
  form2.appendChild(label2);
  form2.appendChild(inputColor);

  document.querySelector("#form").appendChild(form);
  document.querySelector("#form").appendChild(form2);
  document.querySelector("#form").appendChild(button);
  document.querySelectorAll(".add-label")[0].textContent = "Subject";
  document.querySelectorAll(".add-label")[1].textContent = "Choose color";
  document.getElementById("btn").textContent = "Add";
  function generateNewSubject(subjectName) {
    const subject = document.getElementById("subject").value;
    const subjectTextNode = document.createTextNode(subject);
    const color = document.getElementById("color").value;
    const divId = document.createElement("div");
    const div = document.createElement("div");
    const objectColor = {
      backgroundColor: "background-color:" + color + ";",
    };
    div.setAttribute("class", "subject__name");
    div.classList.add(subjectName + "__color");
    div.setAttribute("style", objectColor.backgroundColor);

    div.setAttribute("id", subjectName);
    div.setAttribute("draggable", "true");
    div.setAttribute("ondragstart", "drag(event)");
    divId.setAttribute("id", subjectName + "Div");

    div.appendChild(subjectTextNode);
    divId.appendChild(div);

    return divId;
  }
  btn.addEventListener("click", function (event) {
    const subject = document.getElementById("subject");
    event.preventDefault();
    var alert = "please fill out the blank";
    if (!subject.value.trim()) {
      alert;
    } else {
      document
        .getElementById("father-div")
        .appendChild(generateNewSubject(subject.value));
    }
  });
})();

// addElementToArray();

function download() {
  let data = {
    array: array,
  };
  var file = new Blob([JSON.stringify(data)], {
    type: "application/json",
  });
  if (window.navigator.msSaveOrOpenBlob)
    // IE10+
    window.navigator.msSaveOrOpenBlob(file, "table");
  else {
    // Others
    var a = document.createElement("a"),
      url = URL.createObjectURL(file);
    a.href = url;
    a.download = "table";
    document.body.appendChild(a);
    a.click();
    setTimeout(function () {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 0);
  }
}
