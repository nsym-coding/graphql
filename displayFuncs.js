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
  console.log(totalXpData.data.transaction);
  let xpArray = totalXpData.data.transaction;
  let totalXpDiv = document.getElementById("xp");
  let totalXPAmount = 0;
  let maxXPAmount = xpArray[0].amount;

  let totalXP = document.createElement("p");
  let maxXP = document.createElement("p");

  for (let i = 0; i < xpArray.length; i++) {
    totalXPAmount += xpArray[i].amount;
  }
  maxXP.innerHTML = `Most XP:\n\n ${xpArray[0].object.name} -> ${maxXPAmount}`;

  totalXP.innerHTML = `Total XP: ${totalXPAmount}`;
  totalXpDiv.appendChild(totalXP);
  totalXpDiv.appendChild(maxXP);
};

export { displayGradeData, displayUserIdData, displayTotalXpData };
