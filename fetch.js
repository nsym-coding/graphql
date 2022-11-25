import * as qBody from "./queryBodies.js";
import * as display from "./displayFuncs.js";
import * as barChart from "./createBarGraph.js";
import * as pieChart from "./createPieChart.js";

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
      barChart.createXpGraph(totalXpData);
    });
};

const fetchXPPerTypeData = () => {
  fetch(
    `https://learn.01founders.co/api/graphql-engine/v1/graphql`,
    qBody.xpPerTypeQuery
  )
    .then((res) => res.json())
    .then(function (xpPerTypeData) {
      pieChart.xpPieChart(xpPerTypeData);
    });
};

export {
  fetchGradeData,
  fetchUserIdData,
  fetchTotalXPData,
  fetchXPPerTypeData,
};
