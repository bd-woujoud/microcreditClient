import React from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import TopBar from './layouts/TopBar';
import Login from './pages/Login';
import Register from './pages/Register';
import PrivateRoute from './HigherOrderComponents/PrivateRoute';
import PublicRoute from './HigherOrderComponents/PublicRoute';
import Service from './ComponentsHome/Services';
import Contact from './ComponentsHome/Contact';
import Home from './pages/Home';
import About from './ComponentsHome/About';
import Dash from './views/Dash';
import Profil from './components/Client/Profil';
import ContentClient from './components/Client/ContentClient';
import Navbar from './layouts/Navbar';
import { AuthContext } from './context/AuthContext';
import { useContext } from 'react';
import DashClient from './views/DashClient';
import CreateEcheancier from './components/AgentUTSS/Echeancier/CreateEcheancier';
import Acceuil from './components/Client/Acceuil';
import CreateDemandes from './pages/CreateDemandes';
import ContentDemande from './components/commite/ContentDemande';
import Users from './components/admin/Users';
import Details from './components/admin/Details';
import GetCommit from './components/admin/GetCommit';


function App() {

  const { isAuth } = useContext(AuthContext)

  return (

    <Router>
      {isAuth ? <TopBar/>:<Navbar/>}
      <Switch>  
        
         <PrivateRoute role={["client"]}  path="/createdemande" component={CreateDemandes} />
        
        
        <PublicRoute path="/utss" component={About} />
        <PublicRoute path="/services" component={Service} />
        <PublicRoute path="/contact" component={Contact} />
        <PublicRoute restricted={true} path="/register" component={Register} />
        <PublicRoute  path="/login" component={Login} />
        <PrivateRoute role={["admin", "comite"]} path="/dash"  component={Dash} />
        <PrivateRoute role={["admin", "comite"]} path="/CreateEcheancier"  component={CreateEcheancier} />
        <PrivateRoute role={["client"]} path="/dashClient"  component={DashClient} />
        <PrivateRoute role={["client"]} path="/ContentClient"  component={ContentClient} />
        <PrivateRoute role={["client"]} path="/Acceuil"  component={Acceuil} />
        <PrivateRoute role={["client", "comite"]} path="/profil" component={Profil} />
        <PrivateRoute role={["admin", "comite"]} path="/demandes" component={ContentDemande} />
        <PrivateRoute role={["admin"]} path="/users" component={Users} />
        <PrivateRoute role={["admin","comite"]} path="/details" component={Details} />
        <PrivateRoute role={["admin"]} path="/comites" component={GetCommit} />
        <PublicRoute restricted={true} path="/" component={Home} />
     
     
      </Switch>
    </Router>
  );
}

export default App;