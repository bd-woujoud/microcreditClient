import React from 'react'
import { ChartBar, Chartperso } from '../components/admin/Chartperso'
import SideBarPrincipal from '../layouts/SiderBarPrincipal'


function Dash() {

    return (

        <div>
            <div className="dashboard dashboard_1">
                <div className="full_container">
                    <div className="inner_container">
                        <SideBarPrincipal/>
                        <div id="content">
                      <div class='main ml-2 ' style={{ marginTop: '100px' }}>

                        <div class="row column1" >
                        <div class="col-lg-6">
                           <div class="white_shd full margin_bottom_30">
                              <div class="full graph_head">
                                 <div class="heading1 margin_0">
                                    <h2>Line Chart users</h2>
                                 </div>
                              </div>
                              <div class="map_section padding_infor_info">
                                <Chartperso/>
                              </div>
                           </div>
                        </div>
                        <div class="col-lg-6">
                           <div class="white_shd full margin_bottom_30">
                              <div class="full graph_head">
                                 <div class="heading1 margin_0">
                                    <h2>Line Chart demande</h2>
                                 </div>
                              </div>
                              <div class="map_section padding_infor_info">
                              <Chartperso/>
                              </div>
                           </div>
                        </div>
                
                    </div>
                </div>
            </div>
            </div>
            </div>
            </div>
        </div>

    )
}

export default Dash
