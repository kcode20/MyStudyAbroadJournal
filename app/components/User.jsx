
/*

  This is the view for the users profile. Once the user is signed in they are routed to their page. 
  It includes info on the place studied abroad, a map of area, and other user details.
  Future implementations will also have a bucketlist and photogallery based in map.

*/



//--------------------- USER COMPONENT -------------------//
import React, { Component } from 'react';
import Map from './Map';

export class User extends Component {  

  render(){
    const user=this.props.user, place=this.props.place;
    return (
      <div>
        <div className="row">
          <div className="col-md-4 div_center">
            <h1>{place.country}</h1>
            <h1> {place.city} </h1>
          </div>
          <div className="col-md-8 div_center"> 
            <Map/>
          </div>
        </div>
      </div>
    )
  } 
}


//--------------------- USER CONTAINER -------------------//
import {getPlaceAsync} from '../reducers/place'
import {connect} from 'react-redux'

const mapStateToProps = function(state) {
  console.log("the state once in user: ", state);
  return {
    //pass down the current user on state to display the user information.
    user: state.auth,
    //pass down the current place on state to display user place information.
    place: state.place
  };
};

export default connect(
      mapStateToProps,
      null)
(User)


