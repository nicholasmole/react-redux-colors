import React from 'react';
import {connect} from "react-redux";
import * as actionCreators from "../actions/index.js"
import Box from '../component/box';

/*---------
Add store
----------*/

class BoxCon extends React.Component{
  render() {
    return(
      <Box handleClick={this.props.loadColor} color={this.props.color}></Box>
    )
  }
}

const mapStateToProps=(state)=>{
  return state;
};
//export default BoxCon;
export default connect (mapStateToProps, actionCreators)(BoxCon);

