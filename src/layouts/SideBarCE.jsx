import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'


function SideBarCE() {

const{user}=useContext(AuthContext)

  return (

    <div>
      <nav id="sidebar">
        
        <div className="sidebar_blog_1">
          <div className="sidebar-header">
            <div className="logo_section">
              <a href="index.html"><img className="logo_icon img-responsive" src="images/logo/logo_icon.png" alt="#" /></a>
            </div>
          </div>
          <div className="sidebar_user_info mb-5 mt-3 ml-5">
            <div className="icon_setting" />
            <div className="user_profle_side">
              
              <div className="user_img"><img className="img-responsive"  style={{ height: "80px",width:"180px"}} src={'http://localhost:5000/getfile/'+ user.avatar}  alt="#" /></div>
            </div>
          </div>
        </div>

        <div className="sidebar_blog_2">
          <ul className="list-unstyled components">
            <li className="active">
              <Link to='/Acceuil' > <i class="fa fa-tachometer ml-3 mr-3 red_green"> </i><span>Acceuil</span> </Link>
            </li>
          </ul>
        </div>

        <div className="sidebar_blog_2">
          <ul className="list-unstyled components">
            <li className="active">
              <Link to='/profil' > <i class="fa fa-user ml-3 mr-3 red_color"> </i><span>Profil</span> </Link>
            </li>
          </ul>
        </div>

        <div className="sidebar_blog_2">
          <ul className="list-unstyled components">
            <li className="active">
              <Link to='/ContentClient' > <i class="fa fa-paper-plane ml-3 mr-3 blue1_color"></i> <span>Demande microcrédit</span> </Link>
            </li>
          </ul>
        </div>

      </nav>
    </div>

  )
}

export default SideBarCE
