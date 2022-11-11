let gradeQueryString = `{
  user(where: {login: {_eq: "nsym_coding"}}) {
    progresses(
      where: {_and: [{object: {type: {_eq: "project"}}}, {isDone: {_eq: true}}]}
      order_by: {updatedAt: asc}
    ) {
      object {
        name
      }
      grade
    }
  }
}`;

const displayGradeData = (gradedata) => {
  console.log(gradedata.data.user[0].progresses);
  let progressArray = gradedata.data.user[0].progresses;
  let dataResult = document.getElementById("grades");
  for (let i = 0; i < progressArray.length; i++) {
    let projectNameAndGrade = document.createElement("p");

    projectNameAndGrade.innerHTML = `${
      progressArray[i].object.name
    }: ${progressArray[i].grade.toFixed(2)}&nbsp`;

    dataResult.appendChild(projectNameAndGrade);
  }
};

const gradeQuery = {
  method: "post",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    query: gradeQueryString,
  }),
};

fetch(`https://learn.01founders.co/api/graphql-engine/v1/graphql`, gradeQuery)
  .then((res) => res.json())
  .then(function (gradedata) {
    displayGradeData(gradedata);
  });
