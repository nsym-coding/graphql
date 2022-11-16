const gradeQueryString = `{
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

const userIDQueryString = `{

  user(where:{id:{_eq:1344}}){
    id
    login
    progresses{
      campus
    }
   }
  
}`;

const totalXPQueryString = `{
  user(where: {login: {_eq: "nsym_coding"}}) {
    transactions(
      where: {_and: [{object: {type: {_eq: "project"}}}, {user: {login: {_eq: "nsym_coding"}}}, {type: {_eq: "xp"}}]}
      order_by: {amount: desc}
    ) {
      amount
      object {
        name
      }
    }
  }
}`;

export { gradeQueryString, userIDQueryString, totalXPQueryString };
