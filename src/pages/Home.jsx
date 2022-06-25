import React from 'react'
import About from '../ComponentsHome/About'
import Service from '../ComponentsHome/Services'
import Contact from '../ComponentsHome/Contact'
import Carousel from "../ComponentsHome/Carousel";
import Footer from '../ComponentsHome/Footer';
import { NavLink } from 'react-router-dom'


const Home = () => {
  return (
    <div className="homepage">
      <section
        id="home"
        style={{ position: "relative", background: "transparent" }}
      >
        <Carousel>
          <div className="slide-placeholder">
            <div className="col-md-8">
              <p className="display-4 fw-bolder mb-4 text-center text-light">
                Nous finançons ton activité quel que soit ton besoin
              </p>
              <div className="buttoms d-flex justify-content-center">
                <NavLink to="/contact" className="btn btn-light me-4 rounded-pill px-4 py-2" style={{ marginRight: "10px" }}>Bienvenu</NavLink>
                <NavLink to="/services" className="btn btn-outline-light rounded-pill px-4 py-2" style={{ marginRight: "10px" }}>Notre Service</NavLink>
              </div>
            </div>
          </div>
        </Carousel>
      </section>
      <About />
      <Service />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;







