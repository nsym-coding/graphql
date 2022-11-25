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

const xpPerTypeQueryString = `query{
  user(where:{_and:[{id:{_eq:1344}}, {progresses:{isDone:{_eq:true}}}]}){
   a: transactions(limit:50 offset:0 where:{type:{_eq:"xp"}} order_by:{amount:desc}){
      object{
        name
        type
      }
      amount
    }
    b: transactions(limit:50 offset:50 where:{type:{_eq:"xp"}}order_by:{amount:desc}){
      object{
        name
        type
      }
      amount
    }
    c: transactions(limit:50 offset:100 where:{type:{_eq:"xp"}}order_by:{amount:desc}){
      object{
        name
        type
      }
      amount
    }
    d: transactions(limit:50 offset:150 where:{type:{_eq:"xp"}}order_by:{amount:desc}){
      object{
        name
        type
      }
      amount
    }
    e: transactions(limit:50 offset:200 where:{_and:[{type:{_eq:"xp"}}]} order_by:{amount:desc}){
      object{
        name
        type
       reference{
        type
      }
      }
      amount
    }
   
  }
}
  `;

export {
  gradeQueryString,
  userIDQueryString,
  totalXPQueryString,
  xpPerTypeQueryString,
};
