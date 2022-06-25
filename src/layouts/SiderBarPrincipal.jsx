import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

import Sidebar from './Sidebar'
import SideBarCE from './SideBarCE'

function SideBarPrincipal() {

    const { user } = useContext(AuthContext)


  return (

    <div>
     {(user.role === "admin" || user.role === "comite") ? <Sidebar /> :
      <SideBarCE />
     }
    </div>
  )
}

export default  SideBarPrincipal