import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import AuthService from '../services/AuthService';



function Navbar(props) {

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
      else{
        window.location.href = '/home'
      }
    })
  }


  return (
    <div>
      
      <div className="Navbar">
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

                  <li className="nav-item"><NavLink className="btn btn-outline active ms-auto px-2" style={{ marginRight: "10px" }} aria-current="page" to="/">Acceuil</NavLink></li>
                  <li className="nav-item"><NavLink class="btn btn-outline active ms-auto px-2" style={{ marginRight: "10px" }} to="/utss">UTSS</NavLink></li>
                  <li className="nav-item"><NavLink className="btn btn-outline active ms-auto px-2" style={{ marginRight: "10px" }} to="/services">Services</NavLink></li>
                  <li className="nav-item"><NavLink className="btn btn-outline active ms-auto px-2" style={{ marginRight: "10px" }} to="/contact">Contact</NavLink></li>
                  {/* <li>
                      <a className="dropdown-item" href="#" onClick={() => dispatch(logout())} ><span>Se déconnecter</span> <i className="fa fa-sign-out" /></a>
                   
                  </li> */}
                  {
                    isAuth ?
                      <li>
                        <button class="btn btn-light" style={{ marginRight: "10px", backgroundColor: "#FFFFFF" }} onClick={handleLogout}>Se déconnecter</button>

                      </li> :
                      <>
                        <li class="nav-item"><button class="btn btn-light" style={{ marginRight: "10px", backgroundColor: "#FFFFFF"}} onClick={() => window.location.href = '/login'}>Se connecter</button>
                          <button class="btn btn-light" style={{ backgroundColor: "#FFFFFF" }} onClick={() => window.location.href = '/register'}>S'inscrire</button></li>
                      </>
                  }
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>



    </div>
  )
}

export default Navbar
