import React from 'react'
import {Link} from 'react-router'
// <Link to={auth? `/user` : `/login`}>{auth? `Hello, ${auth.name}` : `Login/SignUp`}</Link>
export const Navbar = ({auth, logout}) => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">

      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="#">My Study Abroad Journal</a>
      </div>
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav navbar-right">
          <li className="navbar-form">
              {auth? <button type="button" className="btn btn-default">
                        <span className="glyphicon glyphicon-home" aria-hidden="true"></span>
                     </button> : ""}
          </li>
          <li className="navbar-form">
              {auth? <button type="button" className="btn btn-default">
                        <span className="glyphicon glyphicon-comment" aria-hidden="true"></span>
                     </button> : ""}
          </li>
          <li className="navbar-form">
              {auth? <button type="button" className="btn btn-default">
                        <span className="glyphicon glyphicon-globe" aria-hidden="true"></span>
                     </button> : ""}
          </li>
          <li><a href="#">{auth?  <li className="dropdown">
                                      <span href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> Hello, {auth.name} <span className="caret"></span></span>
                                      <ul className="dropdown-menu">
                                        <li><a href="#">Settings</a></li>
                                        <li role="separator" className="divider"></li>
                                        <li><a href="#">Help</a></li>
                                        <li role="separator" className="divider"></li>
                                        <li><a href="#">Report A Problem</a></li>
                                      </ul>
                                    </li>
                          : <Link to='/login'>Login/SignUp</Link>}</a></li>
          <li className="navbar-form">
              {auth? <button onClick={()=> logout()} className="btn btn-success">Logout</button> : ""}
          </li>
        </ul>
      </div>
    </div>
  </nav>
)


import {connect} from 'react-redux'
import {logout} from 'APP/app/reducers/auth'

export default connect (
  ({auth}) => ({auth}),
  {logout}
) (Navbar)
