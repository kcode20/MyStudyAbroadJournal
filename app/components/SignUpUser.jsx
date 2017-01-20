import React, { Component } from 'react';
import {storage, auth} from '../firebase';
import {browserHistory} from 'react-router';
/*
  The SignUp Info component is displayed after a user signs up for an account.
  It is used to collect relevant information from the user before navigating them to their homepage. 
*/



//--------------------- SIGNUPINFO COMPONENT -------------------//
export class SignUpInfo extends Component {  
  constructor(){
          super();
          this.state = {
            imageURL: null
          }
      }

  handleOnChange(evt){
    //Take the file that the user uploaded and save it to firebase storage, then download the URL for user's profile photo.
    const file= evt.target.files[0]; 
    const path= this.props.user.uid+"/profile-pic/"+file.name; 
    const storageRef= storage.ref(path);
    let task= storageRef.put(file).then(()=>{
      storageRef.getDownloadURL().then(url =>{
        this.setState({imageURL: url})
      })
    })
  }

  render(){
    const user=this.props.user, updateUser=this.props.updateUser; 
    return (
      <div className="user-cover">
        <div className="row">
          <div className="container div_center well">
            <form className='' onSubmit={evt => {
              evt.preventDefault()
              /*  */
              updateUser(evt.target.displayName.value, this.state.imageURL)
              .then(()=>{
                console.log("going to switch to place")
                browserHistory.push('/user-info/place')  
              });
            }}>
              Name: <input className="form-control" name="displayName"/>
              <br/>
              Select image to upload: <input className="form-control" type="file" name="fileToUpload" onChange={this.handleOnChange.bind(this)}/>
              <br/>
              <button className='btn btn-primary' type="submit" > Next </button>
            </form>
          </div>
        </div>
      </div>
    )
  } 
}


//--------------------- SIGNUPINFO CONTAINER -------------------//
import {connect} from 'react-redux'
import {onAuthChange} from '../reducers/auth'
const mapDispatchToProps = function(dispatch){
  return {

    updateUser: function(displayName, photoURL){
        /* update the current user with displayName and photoURL, 
          then update the state with the updated user */
      return new Promise ((resolve, reject) => {
          var user = auth.currentUser;
          user.updateProfile({
            displayName,
            photoURL
          }).then(function() {
              dispatch(onAuthChange(user))
              resolve();
          }, function(error) {
            console.log(error);
            reject(error);
          });
      })
    }
  }
}

const mapStateToProps = function(state) {
  return {
    //pass down the current user on state to update the user.
    user: state.auth,
  };
};

export default connect(
      mapStateToProps,
      mapDispatchToProps)
(SignUpInfo)