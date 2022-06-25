import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import AuthService from '../services/AuthService';



function TopBar(props) {
  const { user } = useContext(AuthContext)
  const { isAuth } = useContext(AuthContext)

  const { setUser, setIsAuth } = useContext(AuthContext);

  function handleLogout() {
    AuthService.logout().then(jsonData => {
      if (jsonData.success) {
        setUser(jsonData.user);
        setIsAuth(false)
        console.log("..logout")

        window.location.href = '/login'

      }
      else {
        window.location.href = '/home'
      }
    })
  }


  return (
    <div>

      <div className="topbar">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="full">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div className="right_topbar">
              <div className="icon_info">

                <ul className="user_profile_dd" >

                  <li className="nav-item"><NavLink style={{ marginRight: "10px" }} aria-current="page" to="/">Acceuil</NavLink></li>
                  <li className="nav-item"><NavLink style={{ marginRight: "10px" }} to="/utss">UTSS</NavLink></li>
                  <li className="nav-item"><NavLink style={{ marginRight: "10px" }} to="/services">Services</NavLink></li>
                  <li className="nav-item"><NavLink style={{ marginRight: "10px" }} to="/contact">Contact</NavLink></li>


                  {/* <li>
                      <a className="dropdown-item" href="#" onClick={() => dispatch(logout())} ><span>Se déconnecter</span> <i className="fa fa-sign-out" /></a>
                   
                  </li> */}

                </ul>


                <ul className="user_profile_dd " >

                  {(user.role === "comite" || user.role === "admin") ?

                    <li className="nav-item"><NavLink style={{ marginRight: "10px" }} to="/dash">dashboard</NavLink></li> :
                    <li className="nav-item"><NavLink style={{ marginRight: "10px" }} to="/dashClient">dashboard</NavLink></li>
                    //  <Link to= "/dashClient"> <li class="nav-item">dashboard</li></Link> 
                  }

                  <li>
                    <button class="btn btn-light" style={{ marginRight: "10px", backgroundColor: "#FFFFFF" }} onClick={handleLogout}>Se déconnecter</button>

                  </li>
                </ul>

              </div>
            </div>

          </div>
        </nav>
      </div>



    </div>
  )
}

export default TopBar
