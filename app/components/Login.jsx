import React from 'react'
import Country from './Country'
import Location from 'react-place';
import {browserHistory, Link} from 'react-router'

export class Login extends React.Component{

    constructor(){
      super();
      this.state={
        description: '',
        coords: { }
      }
    }

    render(){
      const login= this.props.login, newState=this.props.newState;
      const onLocationSet = (data) => {
          this.setState({description: data.description});
          this.setState({coords: {lat: data.coords.lat, lng: data.coords.lng}});
          console.log('--------------------',this.state);
      };
      return (
          <div className="home-cover">
            <div className='container div_center well'>
            <form className='' onSubmit={evt => {
              evt.preventDefault()
              login(evt.target.username.value, evt.target.password.value)
              .then(function(){
                console.log("I finished logging in!!!");
                if(newState().auth){
                  browserHistory.push('/user')  
                } 
                else{
                  alert("Wrong UserName/Password!!");
                }
              })
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
import {login, signup} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'
import store from '../store'


const mapStateToProps = function(state) {
  console.log(state);
  return {
    user: state.auth,
    place: state.place
  };

};

const mapDispatchToProps= function (dispatch) {
  return {
      login: function(username, password){
        return dispatch(login(username, password))
      }, 
      newState: function(){
        return store.getState()
      }
    }
  };

export default connect(
      mapStateToProps,
     mapDispatchToProps)
(Login)

