import * as query from "./queryStrings.js";

const gradeQuery = {
  method: "post",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    query: query.gradeQueryString,
  }),
};

const userIDQuery = {
  method: "post",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    query: query.userIDQueryString,
  }),
};

export { gradeQuery, userIDQuery };
