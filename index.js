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
