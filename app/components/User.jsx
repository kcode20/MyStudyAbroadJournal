
/*

  This is the view for the users profile. Once the user is signed in the are routed to their page. 
  It includes info on the place studied abroad, a map of area, and other user details.

*/


//--------------------- USER COMPONENT -------------------//
import React, { Component } from 'react';
import Map from './Map'

export class User extends Component {  
  componentDidMount(){
    this.props.onLoadPlace(this.props.user.place_id);
  } 

  render(){
    const User=this.props.user;
    return (
      <div>
        <div className="row">
          <div className="col-md-4">
            <h1>{User.name} Page</h1>
            <img src={User.pictureURL} width='50px' height='50px'/>
            <h3> Country Abroad </h3>
            <h5> {this.props.place.country} </h5>
            <h3> City </h3>
            <h5> {this.props.place.city} </h5>
          </div>
          <div className="col-md-8"> 
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
  console.log(state);
  return {
    user: state.auth,
    place: state.place
  };

};

const mapDispatchToProps= function (dispatch) {
  return {
    onLoadPlace: function(id) {
        dispatch(getPlaceAsync(id))
    }
  };
};

export default connect(
      mapStateToProps,
     mapDispatchToProps)
(User)


