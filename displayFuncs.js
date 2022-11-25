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

const displayUserIdData = (userIdData) => {
  console.log(userIdData.data.user[0].progresses[0].campus);
  let userInfoDiv = document.getElementById("user-identification");
  let userID = document.createElement("p");
  let userLogin = document.createElement("p");
  let userCampus = document.createElement("p");

  userID.innerHTML = `User ID: ${userIdData.data.user[0].id}`;
  userLogin.innerHTML = `Username: ${userIdData.data.user[0].login}`;
  userCampus.innerHTML = `Campus: ${userIdData.data.user[0].progresses[0].campus}`;

  userInfoDiv.appendChild(userID);
  userInfoDiv.appendChild(userLogin);
  userInfoDiv.appendChild(userCampus);
};

const displayTotalXpData = (totalXpData) => {
  console.log(totalXpData.data.user[0].transactions);

  let xpArray = totalXpData.data.user[0].transactions;
  let totalXpFromProject = 0;
  let maxXpFromProject = xpArray[0].amount;
  let minXpFromProject = xpArray[0].amount;
  let maxXP = document.createElement("p");
  let minXP = document.createElement("p");
  //for (let i = 0; i < xpArray.length; i++) {
  xpArray.forEach((elem) => {
    console.log(elem.amount);
    console.log(elem.object.name);
    if (elem.amount >= maxXpFromProject) {
      maxXpFromProject = elem.amount;
      maxXP.innerHTML = `Max: ${elem.object.name} ${maxXpFromProject / 1000}KB`;
    }
    if (elem.amount < minXpFromProject && elem.amount >= 5000) {
      minXpFromProject = elem.amount;
      minXP.innerHTML = `Min: ${elem.object.name} ${minXpFromProject / 1000}KB`;
    }
    if (
      elem.amount > 9000 ||
      (elem.amount >= 5000 && elem.object.name !== "forum")
    ) {
      totalXpFromProject += elem.amount;
    }
  });

  //}
  let avgXpPerProject = totalXpFromProject / xpArray.length;

  let totalXpDiv = document.getElementById("xp");

  let totalXP = document.createElement("p");

  let avgXP = document.createElement("p");

  totalXP.innerHTML = `Total: ${totalXpFromProject / 1000}KB`;
  avgXP.innerHTML = `Avg: ${(avgXpPerProject / 1000).toFixed(2)}KB`;
  totalXpDiv.appendChild(totalXP);
  totalXpDiv.appendChild(avgXP);
  totalXpDiv.appendChild(maxXP);
  totalXpDiv.appendChild(minXP);
};

export { displayGradeData, displayUserIdData, displayTotalXpData };
