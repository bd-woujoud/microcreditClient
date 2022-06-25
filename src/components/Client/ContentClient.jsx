import React from 'react'
import SideBarPrincipal from '../../layouts/SiderBarPrincipal'
import GetDemandeClient from './GetDemandeClient'

function ContentClient() {
    
    return (

        <div>
            <SideBarPrincipal />
            <div id="content">
                <div class='main ml-5'>
                    <div class='container-fluid'>
                        <div className = "row column1" style={{ marginTop: "100px" ,width:"80%"}}> {/*Dashboared*/}
                            {/* getAlldemande */}
                            <div class="col-md-12">
                                <GetDemandeClient />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentClient