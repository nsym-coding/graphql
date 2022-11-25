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

const totalXPQuery = {
  method: "post",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    query: query.totalXPQueryString,
  }),
};

const xpPerTypeQuery = {
  method: "post",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    query: query.xpPerTypeQueryString,
  }),
};

export { gradeQuery, userIDQuery, totalXPQuery, xpPerTypeQuery };
