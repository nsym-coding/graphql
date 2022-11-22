import * as qBody from "./queryBodies.js";
import * as display from "./displayFuncs.js";
import * as graphs from "./createGraphs.js";

const fetchGradeData = () => {
  fetch(
    `https://learn.01founders.co/api/graphql-engine/v1/graphql`,
    qBody.gradeQuery
  )
    .then((res) => res.json())
    .then(function (gradedata) {
      display.displayGradeData(gradedata);
    });
};

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

const fetchTotalXPData = () => {
  fetch(
    `https://learn.01founders.co/api/graphql-engine/v1/graphql`,
    qBody.totalXPQuery
  )
    .then((res) => res.json())
    .then(function (totalXpData) {
      display.displayTotalXpData(totalXpData);
      graphs.createXpGraph(totalXpData);
    });
};

export { fetchGradeData, fetchUserIdData, fetchTotalXPData };
