import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'


function Sidebar() {
  const { user } = useContext(AuthContext)

  return (

    <div>
      <nav id="sidebar">
        <div className="sidebar_blog_1">
       
          <div className="sidebar_user_info mb-5 mt-3 ml-5">
            <div className="icon_setting" />
            <div className="user_profle_side">
              
              <div className="user_img"><img className="img-responsive"  src={'http://localhost:5000/getfile/'+ user.avatar}  style={{ height: "80px",width:"180px"}}   alt="#" /></div>

            </div>
          </div>
        </div>

        {user.role === "comite" &&
          <div className="sidebar_blog_2">
            <ul className="list-unstyled components">
              <li className="active">
                <Link to='/profil'> <i class="fa fa-user ml-3 mr-3 blue_color"></i> <span>Profil</span> </Link>
              </li>
            </ul>
          </div>
        }

        {user.role === "admin" &&
          <div className="sidebar_blog_2">
            <ul className="list-unstyled components">
              <li className="active">
                <Link to='/users'> <i class="fa fa-users ml-3 mr-3 green_color"></i> <span>Utilisateurs</span> </Link>
              </li>
            </ul>
       
            <ul className="list-unstyled components">
              <li className="active">
                <Link to='/comites'> <i class="fa fa-user ml-3 mr-3 lightgray_color"></i> <span>Comites</span> </Link>
              </li>
            </ul>
          </div>
        }

        <div className="sidebar_blog_2">
          <ul className="list-unstyled components">
            <li className="active">
              <Link to='/demandes'> <i class="fa fa-file ml-3 mr-3 red_color"> </i><span>Demandes microcrédits</span> </Link>
            </li>
          </ul>
        </div>

        <div className="sidebar_blog_2">
          <ul className="list-unstyled components">
            <li className="active">
              <Link to='/CreateEcheancier'> <i class="fa fa-object-group  ml-3 mr-3 yellow_color"></i><span>Écheancier microcrédits</span> </Link>
            </li>
          </ul>
        </div>

      </nav>
    </div>
  )
}

export default Sidebar