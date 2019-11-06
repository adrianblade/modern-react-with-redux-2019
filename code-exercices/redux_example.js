console.clear()
const createPolicy = (name, amount) => {
  return {
    type : 'CREATE_POLICY',
    payload : {
      name, amount, bill
    }
  }
}
const deletePolicy = (name) => {
  return {
    type : 'DELETE_POLICY',
    payload : {
      name
    }
  }
}
const claimRequest = (name, amountofclaim, fees) => {
  return {
    type : 'CLAIM_REQUEST',
    payload : {
      name, amountofclaim, fees
    }
  }
}

const creteReducer = (previesdelte = [], action) => {
  if(action.type === "CREATE_POLICY") {return [...previesdelte, action.payload ]}
    else{return previesdelte}
}
const claimReducer = (totalamount=200, action) => {
  if(action.type === "CLAIM_REQUEST") {
    return totalamount - (action.payload.amountofclaim  + action.payload.fees)}
  else if(action.type === "CREATE_POLICY") {
    return totalamount + (action.payload.amount + action.payload.bill)}
  else{return totalamount}
}
const deleteReducer = (userlist = [], action) => {
  if(action.type === "CREATE_POLICY"){
    return [...userlist, action.payload]
  }
  else if(action.type === "DELETE_POLICY") {
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
