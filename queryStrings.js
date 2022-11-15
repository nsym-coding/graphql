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
  transaction(
    order_by: {amount: desc}
    where: {_and: [{user: {id: {_eq: 1344}}}, {object: {type: {_eq: "project"}}}, {type: {_eq: "xp"}}, {user:{progresses:{isDone:{_eq:true}}}}]}
  ) {
    object{
      name
    }
    amount
    
  }
}`;

export { gradeQueryString, userIDQueryString, totalXPQueryString };
