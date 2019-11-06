console.clear()
const createPolicy = (name, amount) => {
  return {
    type : 'CREATEPOLICY',
    payload : {
      name, amount, bill
    }
  }
}
const deletePolicy = (name) => {
  return {
    type : 'DELETEPOLICY',
    payload : {
      name
    }
  }
}
const claimRequest = (name, amountofclaim, fees) => {
  return {
    type : 'CLAIMREQUEST',
    payload : {
      name, amountofclaim, fees
    }
  }
}

const creteReducer = (previesdelte = [], action) => {
  if(action.type === "CREATEPOLICY") {return [...previesdelte, action.payload ]}
    else{return previesdelte}
}
const clamReducer = (totalamount=200, action) => {
  if(action.type === "CLAIMREQUEST") {
    return totalamount - (action.payload.amountofclaim  + action.payload.fees)}
  else if(action.type === "CREATEPOLICY") {
    return totalamount + (action.payload.amount + action.payload.bill)}
  else{return totalamount}
}
const deleteReducer = (userlist = [], action) => {
  if(action.type === "CREATEPOLICY"){
    return [...userlist, action.payload]
  }
  else if(action.type === "DELETEPOLICY") {
    return userlist.filter( name => name !== action.payload.name)
  }
  else {
    return userlist
  }
}
const {createStore, combineReducers} = Redux;
const allReducers = combineReducers({
  creteReducer:creteReducer,
  clamReducer:clamReducer,
  deleteReducer:deleteReducer
})
const store = createStore(allReducers)
store.dispatch(createPolicy('fff', 20, 3))
store.dispatch(claimRequest('fff', 150, 5))
console.log(store.getState())
