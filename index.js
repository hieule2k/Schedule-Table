(function () {
  const subjectList = [
    "Math",
    "history",
    "literature",
    "English",
    "Biology",
    "Chemistry",
    "Physics",
    "Physical education",
  ];

  for (let i = 0; i < subjectList.length; i++) {
    let subject = subjectList[i];
    const subjectTextNode = document.createTextNode(subject);
    const Div = document.createElement("div");
    Div.setAttribute("class", "subject__name");
    Div.appendChild(subjectTextNode);
    document.getElementById("subject-container").appendChild(Div);
  }
})();

(function () {
  const daysList = [
    "",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  for (let i = 0; i < daysList.length; i++) {
    let day = daysList[i];
    const dayTextNode = document.createTextNode(day);
    const Div = document.createElement("div");
    Div.setAttribute("class", "day");
    Div.appendChild(dayTextNode);
    document.querySelector(".day-container").appendChild(Div);
  }
  document.querySelector(".day").setAttribute("id", "corner");
})();

function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data));
}

document.getElementsByClassName("subject__name")[0].setAttribute("id", "math");
document
  .getElementsByClassName("subject__name")[1]
  .setAttribute("id", "history");
document
  .getElementsByClassName("subject__name")[2]
  .setAttribute("id", "literature");
document
  .getElementsByClassName("subject__name")[3]
  .setAttribute("id", "english");
document
  .getElementsByClassName("subject__name")[4]
  .setAttribute("id", "biology");
document
  .getElementsByClassName("subject__name")[5]
  .setAttribute("id", "chemistry");
document
  .getElementsByClassName("subject__name")[6]
  .setAttribute("id", "physics");
document
  .getElementsByClassName("subject__name")[7]
  .setAttribute("id", "physical eduaction");

var subjects = document.getElementsByClassName("subject__name");
for (let i = 0; i < subjects.length; i++) {
  subjects[i].setAttribute("draggable", "true");
  subjects[i].setAttribute("ondragstart", "drag(event)");
}
