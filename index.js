// (function () {
//   const subjectList = {
//     math: "Math",
//     history: "history",
//     literature: "literature",
//     english: "English",
//     biology: "Biology",
//     chemistry: "Chemistry",
//     physics: "Physics",
//     physicalEducation: "Physical education",
//   };
//   const mathTextNode = document.createTextNode(subjectList.math);
//   const historyTextNode = document.createTextNode(subjectList.history);
//   const literatureTextNode = document.createTextNode(subjectList.literature);
//   const englishTextNode = document.createTextNode(subjectList.english);
//   const biologyTextNode = document.createTextNode(subjectList.biology);
//   const chemistryTextNode = document.createTextNode(subjectList.chemistry);
//   const physicsTextNode = document.createTextNode(subjectList.physics);
//   const physicalEducation = document.createTextNode(
//     subjectList.physicalEducation
//   );

//   const mathDiv = document.createElement("div");
//   const historyDiv = document.createElement("div");
//   const literatureDiv = document.createElement("div");
//   const englishDiv = document.createElement("div");
//   const biologyDiv = document.createElement("div");
//   const chemistryDiv = document.createElement("div");
//   const physicsDiv = document.createElement("div");
//   const physicalEducationDiv = document.createElement("div");

//   mathDiv.setAttribute("class", "subject__name");
//   mathDiv.setAttribute("style", "background-color: #e642f5");

//   historyDiv.setAttribute("class", "subject__name");
//   historyDiv.setAttribute("style", "background-color: #42a4f5");

//   literatureDiv.setAttribute("class", "subject__name");
//   literatureDiv.setAttribute("style", "background-color: #f5a742");

//   englishDiv.setAttribute("class", "subject__name");
//   englishDiv.setAttribute("style", "background-color: #9ef542");

//   biologyDiv.setAttribute("class", "subject__name");
//   biologyDiv.setAttribute("style", "background-color: #42eff5");

//   chemistryDiv.setAttribute("class", "subject__name");
//   chemistryDiv.setAttribute("style", "background-color: #f54242");

//   physicsDiv.setAttribute("class", "subject__name");
//   physicsDiv.setAttribute("style", "background-color: #f5ef42");

//   physicalEducationDiv.setAttribute("class", "subject__name");
//   physicalEducationDiv.setAttribute("style", "background-color: #42a4f5");

//   mathDiv.appendChild(mathTextNode);
//   historyDiv.appendChild(historyTextNode);
//   literatureDiv.appendChild(literatureTextNode);
//   englishDiv.appendChild(englishTextNode);
//   biologyDiv.appendChild(biologyTextNode);
//   chemistryDiv.appendChild(chemistryTextNode);
//   physicsDiv.appendChild(physicsTextNode);
//   physicalEducationDiv.appendChild(physicalEducation);

//   document.getElementById("subject-container").appendChild(mathDiv);
//   document.getElementById("subject-container").appendChild(historyDiv);
//   document.getElementById("subject-container").appendChild(literatureDiv);
//   document.getElementById("subject-container").appendChild(englishDiv);
//   document.getElementById("subject-container").appendChild(biologyDiv);
//   document.getElementById("subject-container").appendChild(chemistryDiv);
//   document.getElementById("subject-container").appendChild(physicsDiv);
//   document
//     .getElementById("subject-container")
//     .appendChild(physicalEducationDiv);
// })();

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
