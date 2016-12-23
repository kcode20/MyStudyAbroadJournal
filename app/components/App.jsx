import React from 'react'
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