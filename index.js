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
