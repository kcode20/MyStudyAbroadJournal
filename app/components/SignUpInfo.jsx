import React, { Component } from 'react';
import Country from './Country';
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
          <div className="col-md-8 div_center vertical_center">
            <form className='' onSubmit={evt => {
              evt.preventDefault()
              /*  */

            }}>
              Name: <input className="form-control" name="email"/>
              <br/>
              Country: <Country/>
              <br/>
              <button className='btn btn-primary' type="submit" > Submit </button>
            </form>
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