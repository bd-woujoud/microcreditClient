import React from 'react'
import Acceuil from '../components/Client/Acceuil'
import SideBarPrincipal from '../layouts/SiderBarPrincipal'

function DashClient() {
  return (
    <div>
        <div className="dashboard dashboard_1">
                <div className="full_container">
                    <div className="inner_container">
                        <SideBarPrincipal/>
                        <Acceuil />
                    </div>
                </div>
            </div>
    </div>
  )
}

export default DashClient


