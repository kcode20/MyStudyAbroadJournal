import React from 'react'
import {browserHistory, Link} from 'react-router'


export const Navbar = ({auth, logout}) => (
  <nav className="navbar navbar-default navbar-fixed-top">
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
          <li>
              {auth? <a className="navbar-center" href='#'><span className="glyphicon glyphicon-home green" aria-hidden="true"></span></a> : ""}
          </li>
          <li>
              {auth? <a className="navbar-center" href='#'><span className="glyphicon glyphicon-comment green" aria-hidden="true"></span></a> : ""}
          </li>
          <li>
              {auth? <a className="navbar-center" href='#'><span className="glyphicon glyphicon-globe green" aria-hidden="true"></span></a> : ""}
          </li>
          <li><a href="#">{auth?  <li className="dropdown">
                                      <span href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><img src={auth.pictureURL} className='user_nav' width='25px' height='25px'/> <span className="caret"></span></span>
                                      <ul className="dropdown-menu">
                                        <li><Link to='/user'>My Profile</Link></li>
                                        <li role="separator" className="divider"></li>
                                        <li><a href="#">Settings</a></li>
                                        <li role="separator" className="divider"></li>
                                        <li><a href="#">Report A Problem</a></li>
                                        <li role="separator" className="divider"></li>
                                        <li><a onClick={()=> logout().then(()=> browserHistory.push('/login'))} href="#">Logout</a></li>
                                      </ul>
                                    </li>
                          : <span><Link to='/login'>Login |</Link><Link to="/signup"> Sign Up </Link></span> }</a></li>
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
