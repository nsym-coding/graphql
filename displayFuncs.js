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
  for (let i = 0; i < xpArray.length; i++) {
    console.log(xpArray[i].amount);
    console.log(xpArray[i].object.name);
    if (xpArray[i].amount >= maxXpFromProject) {
      maxXpFromProject = xpArray[i].amount;
      maxXP.innerHTML = `Max: ${xpArray[i].object.name} ${
        maxXpFromProject / 1000
      }KB`;
    }
    if (xpArray[i].amount < minXpFromProject && xpArray[i].amount >= 5000) {
      minXpFromProject = xpArray[i].amount;
      minXP.innerHTML = `Min: ${xpArray[i].object.name} ${
        minXpFromProject / 1000
      }KB`;
    }
    if (
      xpArray[i].amount > 9000 ||
      (xpArray[i].amount >= 5000 && xpArray[i].object.name !== "forum")
    ) {
      totalXpFromProject += xpArray[i].amount;
    }
  }
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
