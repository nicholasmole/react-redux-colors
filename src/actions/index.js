import axios from "axios";

//This send API requests

export function loadColor(){
  //dispatch is just the value we are sending off
  return(dispatch)=>{
    return axios.get("http://www.colr.org/json/color/random").then((response)=> {
      dispatch(changeColor("#"+response.data.new_color))
    })
    
  }
}

export function changeColor(color){
  return {
    type:"CHANGE_COLOR",
    color:color
  }
}