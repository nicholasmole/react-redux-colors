import React from 'react';
import {connect} from "react-redux";
import * as actionCreators from "../actions/index.js"


/*---------
Add store
----------*/
// @connect((store) => {
//   return {
//     user: store.color
//   }; 
// })

class Header extends React.Component{
  render() {
    return(
      <div style={{backgroundColor:`${this.props.color}`}}>Berry boy</div>
    )
  }
}

const mapStateToProps=(state)=>{
  //return state;
  console.log(state);
  return {
    color: state.color.color
  }; 
};
//export default Header;
export default connect (mapStateToProps, actionCreators)(Header);
