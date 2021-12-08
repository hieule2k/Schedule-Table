(function () {
  const subjectList = [
    { subject: "Math", id: "math" },
    { subject: "history", id: "history" },
    { subject: "literature", id: "literature" },
    { subject: "english", id: "english" },
    { subject: "biology", id: "biology" },
    { subject: "Chemistry", id: "chemistry" },
    { subject: "Physics", id: "physics" },
    { subject: "Physical education", id: "physical eduaction" },
  ];

  for (let i = 0; i < subjectList.length; i++) {
    let sub = subjectList[i];
    const subjectTextNode = document.createTextNode(sub.subject);
    const div = document.createElement("div");
    div.setAttribute("class", "subject__name");
    div.appendChild(subjectTextNode);
    document.getElementById("subject-container").appendChild(div);
    div.setAttribute("id", sub.id);
  }
})();

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
for (let i = 0; i < array.length; i++) {
  var tr = document.createElement("tr");
  document.getElementById("my-row").appendChild(tr);
  for (let j = 0; j < array[i].length; j++) {
    var tdElement = document.createElement("td");
    tdElement.innerHTML = array[i][j];
    tr.appendChild(tdElement);
  }
}
