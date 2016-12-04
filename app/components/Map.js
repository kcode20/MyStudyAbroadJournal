
/* 

	This component renders a map of where the student has studied abroad.
	Potentially, this will also render markers of where the student has visited.

*/


//--------------------- MAP COMPONENT -------------------//
import React, { Component } from 'react';
import {Map} from 'google-maps-react';
//Map Key: AIzaSyB07jf1Z405Jv9QelQTOOVcejPh96NvMSU

export class map extends Component{
	render(){
		return(
			<Map google={window.google}
					zoom={7}
			    initialCenter={{lat: this.props.place.location[0],
							lng: this.props.place.location[1]}}
			    style={{width: '100%', height: '75%', position: 'relative'}}/>
		)
	}
} 






//------------------- MAP CONTAINER -------------------//
import {connect} from 'react-redux';


const mapStateToProps = function(state) {
  console.log(state);
  return {
    place: state.place
  };
};

export default connect(
      mapStateToProps,
    	null)
(map)




