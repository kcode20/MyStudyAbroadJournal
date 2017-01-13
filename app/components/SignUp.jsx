import React from 'react';
import {browserHistory, Link} from 'react-router';

/* 
  The Signup Component is linked to the login. If the user doesn't have an account they will be redirected
  to this page to create an account. Once signed up they will be automatically logged in and be redirected to 
  their user page.
  TODO: Validate email, Give info about Password Requirements (maybe a strength bar or popup?) 
*/

//----------------------- SignUp Component ----------------------------//
export class SignUp extends React.Component{
    render(){
      const signup=this.props.signup, newState=this.props.newState;
      return (
          <div className="home-cover">
            <div className='container div_center well'>
            <form className='' onSubmit={evt => {
              evt.preventDefault()
              /* signup, if you supplied the correct credentials, redirect to the sign-up info page 
              to get more information about the new user; 
              else be notified that they need a new password. */
              signup(evt.target.email.value, evt.target.password.value)
              .then(function(){
                if(newState().auth){
                  browserHistory.push('/user-info/user')  
                }
                else{
                  alert("the password must be longer than 6 characters");
                }
              })
            }}>
              Email: <input className="form-control" name="email"/>
              <br/>
              Password: <input className="form-control" name="password" type="password" />
              <br/>
              <button className='btn btn-primary' type="submit" value="Signup" > Signup </button>
            </form>
            <h5> Already have an account? <Link to='/login'> Login </Link> </h5>
            </div>
          </div>
      )
    }

} 


//--------------------- LOGIN CONTAINER -------------------//
import { signup } from 'APP/app/reducers/auth'
import {connect} from 'react-redux'
import store from '../store'

const mapDispatchToProps= function (dispatch) {
  console.log(signup);
  return {
    // pass down the function signup to create and authenticate users in firebase
      signup: function(email, password){
        return dispatch( signup(email,password))
      }, 
      /* pass down the newState function to the signup component to redirect 
      the page once signed in based on the State Change  */
      newState: function(){
        return store.getState()
      }
    }
  };

export default connect(
      null,
     mapDispatchToProps)
(SignUp)

