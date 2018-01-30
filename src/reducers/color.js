//import reducers from './index'
let defaultState={
  color:"red"
}
//This sets that state and can return payload
//const reducer=(state=defaultState,action)=>{
//color
export default function reducers(state=defaultState,action){
  if(action.type==="CHANGE_COLOR"){
    console.log(action.color);
    return{
      ...state,
      color:action.color
    }

  }else {
    console.log("here");
    return{
      ...state
    }
  }
}