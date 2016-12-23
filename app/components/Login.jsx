import React from 'react';
import {browserHistory, Link} from 'react-router';
import * as firebase from 'firebase';

/* 
  The Login Component is the first page that a user sees. It allows users with accounts to log in.
  Once logged in, they are redirected to their page.
*/
//--------------------- Login Component -----------------------------//
export class Login extends React.Component{
    render(){
      const login= this.props.login, newState=this.props.newState;
      return (
          <div className="home-cover">
            <div className='container div_center well'>
            <form className='' onSubmit={evt => {
              evt.preventDefault()
              /* login, if the login credentials are correct redirect to the user page,
               else alert the user of a Wrong Username/Password */
                login(evt.target.username.value, evt.target.password.value)
                .then( () => {
                  if(newState().auth){
                    browserHistory.push('/user')  
                  } 
                  else{
                    alert("Wrong UserName/Password!!");
                  }
                });
            }}>
              UserName: <input className="form-control" name="username" />
              <br/>
              Password: <input className="form-control" name="password" type="password" />
              <br/>
              <button className='btn btn-primary' type="submit" value="Login" > Login </button>
            </form>
            <h5> No account? <Link to='/signup'> Sign Up </Link> </h5>
            </div>
          </div>
      )
    }

} 


//--------------------- LOGIN CONTAINER -------------------//
import { connect } from 'react-redux'
import { login } from 'APP/app/reducers/auth'
import store from '../store'

const mapDispatchToProps= function (dispatch) {
  return {
      // pass down the function login to authenticate users in firebase
      login: function(email, password){
        return dispatch(login(email, password));
      }, 
      /* pass down the newState function to the login component to redirect 
      the page once logged based on the State Change  */
      newState: function(){
        return store.getState();
      }
    }
  };

export default connect(
      null,
     mapDispatchToProps)
(Login)

