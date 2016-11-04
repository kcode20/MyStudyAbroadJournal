import React from 'react'
import Login from './Login'
import WhoAmI from './WhoAmI'
import {connect} from 'react-redux'
import Navbar from './Navbar'

export default connect(
  ({ auth }) => ({ user: auth })
) (
  ({ user, children }) =>
    <div>
      <Navbar/>
      {children}
    </div>
)