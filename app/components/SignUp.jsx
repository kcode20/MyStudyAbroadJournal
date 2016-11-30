import React from 'react'
import Country from './Country'
import Location from 'react-place';
import {browserHistory, Link} from 'react-router'

export class SignUp extends React.Component{

    constructor(){
      super();
      this.state={
        description: '',
        coords: { }
      }
    }

    render(){
      const login= this.props.login, signup=this.props.signup, newState=this.props.newState;
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
              signup(evt.target.user.value, evt.target.username.value, evt.target.password.value)
              .then(function(){
                if(newState().auth){
                  browserHistory.push('/user')  
                }
                else{
                  alert("Wrong UserName/Password!!");
                }
              })
            }}>
              <input className="form-control" name="user"/>
              <br/>
              <input className="form-control" name="username" />
              <br/>
              <input className="form-control" name="password" type="password" />
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
import {signup} from 'APP/app/reducers/auth'
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
      signup: function(name, username, password){
        return dispatch(signup(name, username, password))
      }, 
      newState: function(){
        return store.getState()
      }
    }
  };

export default connect(
      mapStateToProps,
     mapDispatchToProps)
(SignUp)

