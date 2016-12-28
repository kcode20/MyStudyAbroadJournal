import React, { Component } from 'react';
/*
  The SignUp Info component is displayed after a user signs up for an account.
  It is used to collect relevant information from the user before navigating them to their homepage. 
*/

//--------------------- SIGNUPINFO COMPONENT -------------------//
export class SignUpInfo extends Component {  
  render(){
    const user=this.props.user
    return (
      <div>
        <div className="row">
          <div className="col-md-4 div_center">
            <h1> SignUpInfo PlaceHolder </h1>
          </div>
        </div>
      </div>
    )
  } 
}


//--------------------- SIGNUPINFO CONTAINER -------------------//
import {connect} from 'react-redux'

const mapStateToProps = function(state) {
  return {
    //pass down the current user on state to update the user.
    user: state.auth,
  };
};

export default connect(
      mapStateToProps,
      null)
(SignUpInfo)