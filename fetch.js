import * as qBody from "./queryBodies.js";
import * as display from "./displayFuncs.js";

function fetchGradeData() {
  fetch(
    `https://learn.01founders.co/api/graphql-engine/v1/graphql`,
    qBody.gradeQuery
  )
    .then((res) => res.json())
    .then(function (gradedata) {
      display.displayGradeData(gradedata);
    });
}

const fetchUserIdData = () => {
  fetch(
    `https://learn.01founders.co/api/graphql-engine/v1/graphql`,
    qBody.userIDQuery
  )
    .then((res) => res.json())
    .then(function (userIdData) {
      display.displayUserIdData(userIdData);
    });
};

export { fetchGradeData, fetchUserIdData };
