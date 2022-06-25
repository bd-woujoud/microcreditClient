import React from 'react'
import SideBarPrincipal from '../../../layouts/SiderBarPrincipal';
import Amortization from './EcheancierForm/Form/Amortization';
import BodyPage from './EcheancierForm/BodyPage/BodyPageIndex';


function CreateEcheancier() {

  return (
    <div>
      <SideBarPrincipal />
      <div id="content" >
        <div class='main' style={{ marginTop: '50px' }}>
          <div class="midde_cont">
            <div class="container">
              <BodyPage title={"Calculer le plan"} component={<Amortization />}/>
            </div>
          </div>
        </div>
      </div>
    </div> 
  )
}

export default CreateEcheancier


