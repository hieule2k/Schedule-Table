const subjectLists = [
  { subject: "Math", id: "math", class: "math__color", divId: "mathZone" },
  {
    subject: "history",
    id: "history",
    class: "history__color",
    divId: "historyZone",
  },
  {
    subject: "literature",
    id: "literature",
    class: "literature__color",
    divId: "literatureZone",
  },
  {
    subject: "english",
    id: "english",
    class: "english__color",
    divId: "englishZone",
  },
  {
    subject: "biology",
    id: "biology",
    class: "biology__color",
    divId: "biologyZone",
  },
  {
    subject: "Chemistry",
    id: "chemistry",
    class: "chemistry__color",
    divId: "chemistryZone",
  },
  {
    subject: "Physics",
    id: "physics",
    class: "physics__color",
    divId: "physicsZone",
  },
  {
    subject: "Physical education",
    id: "physicalEducation",
    class: "physicalEducation__color",
    divId: "physicalEducationZone",
  },
];

// var dragHelper = {
//   tableId: null,
//   setTableId: function (id) {
//     this.tableId = id;
//   },
//   addElementIntoArr: function (event) {
//     var days = Object.keys(array); //days from monday to sunday
//     var rows = document.getElementById("my-table").getElementsByTagName("tr");
//     for (let i = 1; i < rows.length; i++) {
//       var row = rows[i];
//       var cells = row.children;
//       for (let j = 0; j < cells.length; j++) {
//         var cell = cells[j];
//         if (cell === event.target) {
//           var subject = {
//             subject: data,
//             id: data,
//             class: data + "__color",
//             divId: data + "Div",
//           };
//           array[days[j]][i - 1] = subject;
//           break;
//         }
//       }
//     }
//   },
// };

var array = {
  monday: null,
  tuesday: null,
  wednesday: null,
  thursday: null,
  friday: null,
  saturday: null,
  sunday: null,
};
const slot = 6;

creatSubjectList();

generateArray(slot);

drawSchedule();

makeSubjectDraggable();

makeCellsDropable();

disableDropOnfirstRow();

function creatSubjectList() {
  for (let i = 0; i < subjectLists.length; i++) {
    var subjectList = subjectLists[i];
    const subjectTextNode = document.createTextNode(subjectList.subject);
    const subjectZone = document.createElement("div");
    const externalSubject = document.createElement("div");
    const abbr = document.createElement("abbr");
    abbr.setAttribute("title", subjectList.subject);
    abbr.appendChild(subjectTextNode);
    externalSubject.appendChild(abbr);
    externalSubject.setAttribute("class", "external-subject");
    externalSubject.setAttribute("id", subjectList.id);
    externalSubject.classList.add(subjectList.class);
    subjectZone.setAttribute("id", subjectList.divId);
    subjectZone.appendChild(externalSubject);
    document.getElementById("subject-zone").appendChild(subjectZone);
  }
}

function generateArray(slot) {
  var keys = Object.keys(array);
  for (i = 0; i < keys.length; i++) {
    var key = keys[i];
    array[key] = [];
    for (j = 0; j < slot; j++) {
      array[key].push(null);
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
  inputColor.setAttribute("value", "#F79191");
  inputColor.setAttribute("placeholder", "pick color");
  input.setAttribute("id", "subject");
  input.setAttribute("placeholder", "Please enter a subject ");

  form.appendChild(label);
  form.appendChild(input);
  form2.appendChild(label2);
  form2.appendChild(inputColor);

  document.querySelector("#div-form").appendChild(form);
  document.querySelector("#div-form").appendChild(form2);

  document.querySelector("#form").appendChild(button);
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
    const abbr = document.createElement("abbr");
    abbr.setAttribute("title", subject);
    abbr.appendChild(subjectTextNode);
    div.appendChild(abbr);

    div.setAttribute("class", "external-subject");
    div.classList.add(subjectName + "__color");
    div.setAttribute("style", objectColor.backgroundColor);

    div.setAttribute("id", subjectName);
    div.setAttribute("draggable", "true");
    div.setAttribute("ondragstart", "drag(event)");
    divId.setAttribute("id", subjectName + "Div");

    divId.prepend(div);

    return divId;
  }

  btn.addEventListener("click", function (event) {
    const subject = document.getElementById("subject");
    event.preventDefault();
    if (!subject.value.trim()) {
      alert("please fill out the blank");
    } else {
      document
        .getElementById("subject-zone")
        .appendChild(generateNewSubject(subject.value));
      document.getElementById("form").reset();
    }
  });
})();

function drawSchedule() {
  var days = Object.keys(array); //days =  days from monday to sunday
  var lessons = Object.values(array); // 7 array each have 6 nulls

  var tr = document.createElement("tr");
  for (let i = 0; i < days.length; i++) {
    var day = days[i]; //  day from monday to sunday
    var dayTextNode = document.createTextNode(day);
    var daytime = document.createElement("td");
    daytime.appendChild(dayTextNode);
    var icon = document.createElement("i");
    icon.setAttribute("class", "fas fa-window-close");
    daytime.prepend(icon);
    tr.appendChild(daytime);
  }
  document.getElementById("my-table").appendChild(tr);

  for (let i = 0; i < lessons[0].length; i++) {
    var tr = document.createElement("tr");

    for (let j = 0; j < lessons.length; j++) {
      var day = days[j]; //42 days from monday to sunday
      var tdInDay = document.createElement("td");
      var lessonTextNode = document.createTextNode(array[day][i] || "");
      tdInDay.appendChild(lessonTextNode);
      tr.appendChild(tdInDay);
    }
    document.getElementById("my-table").appendChild(tr);
  }
}

// add modifier to subject in table and clone a subject
function cloneAndSetExternalStyle(target, data) {
  var dataId = document.getElementById(data);

  var copy = dataId;
  var cloneSubject = copy.cloneNode(true);

  cloneSubject.classList.remove("external-subject");
  cloneSubject.classList.add("internal-subject");

  var icon = document.createElement("i");
  icon.setAttribute("class", "fas fa-window-close close-button");

  target.appendChild(icon);
  target.appendChild(cloneSubject);
  cloneSubject.parentElement.removeEventListener("drop", dropIn);
  cloneSubject.parentElement.removeEventListener("dragover", allowDrop);
  cloneSubject.classList.add(data + "__color");

  var remove = document.getElementsByClassName("internal-subject");
  for (let i = 0; i < remove.length; i++) {
    remove[i].removeAttribute("id");
    remove[i].removeAttribute("draggable");
    remove[i].removeEventListener("dragstart", drag);
  }
}

function makeSubjectDraggable() {
  var externalSubject = document.querySelectorAll(".external-subject");
  for (let i = 0; i < externalSubject.length; i++) {
    externalSubject[i].setAttribute("draggable", "true");
    externalSubject[i].addEventListener("dragstart", drag);
  }
}

function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function dropIn(event) {
  event.preventDefault(event);
  var data = event.dataTransfer.getData("text");
  console.log(event);
  var target = event.target;
  cloneAndSetExternalStyle(target, data);

  // update subject to Json
  var days = Object.keys(array); //days from monday to sunday
  var rows = document.getElementById("my-table").getElementsByTagName("tr");
  for (let i = 1; i < rows.length; i++) {
    var row = rows[i];
    var cells = row.children;
    for (let j = 0; j < cells.length; j++) {
      var cell = cells[j];
      if (cell === event.target) {
        var subject = {
          subject: data,
          id: data,
          class: data + "__color",
          divId: data + "Div",
        };
        array[days[j]][i - 1] = subject;
        break;
      }
    }
  }
  //add remove event in a cell
  var closeButtons = document.querySelectorAll(".close-button");
  for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener("click", removeSubject);
  }
  //add remove column event
  const getAllTd = document.querySelectorAll("td");
  for (let i = 0; i < 7; i++) {
    getAllTd[i].firstChild.classList.add("delete-all-column");
  }

  var closeColumn = document.querySelectorAll(".delete-all-column");
  for (let i = 0; i < closeColumn.length; i++) {
    closeColumn[i].addEventListener("click", removeCol);
  }
}

function removeSubject(elem) {
  var tdWithSubject = elem.target;

  //update json after remove subject
  var days = Object.keys(array);
  var rows = document.getElementById("my-table").getElementsByTagName("tr");
  for (let i = 1; i < rows.length; i++) {
    var row = rows[i];
    var cells = row.children;

    for (let j = 0; j < cells.length; j++) {
      var cell = cells[j];
      if (cell === elem.target.parentElement) {
        array[days[j]][i - 1] = null;
        break;
      }
    }
  }

  tdWithSubject.nextElementSibling.remove();
  tdWithSubject.parentElement.addEventListener("drop", dropIn);
  tdWithSubject.parentElement.addEventListener("dragover", allowDrop);
  tdWithSubject.remove();
}

function makeCellsDropable() {
  var cells = document.querySelectorAll("td");
  for (let i = 0; i < cells.length; i++) {
    let cell = cells[i];

    if (cell.getElementsByTagName("div").length === 0) {
      cell.addEventListener("drop", dropIn);
      cell.addEventListener("dragover", allowDrop);
    }
  }
}

function disableDropOnfirstRow() {
  var td = document.querySelectorAll("td");
  for (let i = 0; i < 7; i++) {
    td[i].removeEventListener("drop", dropIn);
    td[i].removeEventListener("dragover", allowDrop);
  }
}
// remove subject in a column
function removeCol(elem) {
  let header = Object.keys(array);
  let tdIndex = header.indexOf(elem.target.parentElement.textContent);

  let rowList = document.querySelectorAll("tr");

  for (let i = 1; i < rowList.length; i++) {
    let row = rowList[i].childNodes;

    var data = row[tdIndex].childNodes[1];

    if (data) {
      // update json after remove a col
      var days = Object.keys(array);
      var rows = document.getElementById("my-table").getElementsByTagName("tr");
      for (let i = 1; i < rows.length; i++) {
        let row = rows[i];
        var cells = row.children;

        for (let j = 0; j < cells.length; j++) {
          var cell = cells[j];
          if (cell === data.parentElement) {
            array[days[j]][i - 1] = null;
            break;
          }
        }
      }

      data.nextElementSibling.remove();
      data.remove();
      makeCellsDropable();
      disableDropOnfirstRow();
    }
  }
}

function download() {
  let data = {
    array: array,
  };
  var file = new Blob([JSON.stringify(data)], {
    type: "application/json",
  });
  if (window.navigator.msSaveOrOpenBlob)
    window.navigator.msSaveOrOpenBlob(file, "table");
  else {
    var a = document.createElement("a"),
      url = URL.createObjectURL(file);
    a.href = url;
    a.download = "table";
    a.click();
    window.URL.revokeObjectURL(url);
  }
}
var fontWeight = document.querySelectorAll("td");
for (let i = 0; i < 7; i++) {
  fontWeight[i].setAttribute("style", "background-color: #f0a927");
}
