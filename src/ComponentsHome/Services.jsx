import React from "react";

export default function Service() {
  return (
    <div>
      <section id="service">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-12">
              <h1 className="display-6 fw-bold text-center mb-4">
              Facteurs Clés De Succès
              </h1>
              <hr className="w-25 mx-auto" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card border-dark mb-3">
                <div className="card-body text-center">
                    <i className="fa fa-bolt fa-4x mb-4" style={{color: "#424949" }}></i>
                  <h5 className="card-title mb-3 fs-4 fw-bold">Satisfaction clients</h5>
                  <p className="card-text lead">
                  Nous offrons cet opportunité de qualité adapté aux besoins de nos clients.
                  </p> 
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-dark mb-3">
                <div className="card-body text-center">
                    <i className="fa fa-shield fa-4x mb-4" style={{color: "#424949" }}></i>
                  <h5 className="card-title mb-3 fs-4 fw-bold">Sécurité, Sûreté et Fiabilité</h5>
                  <p className="card-text lead">
                  la fiabilité est essentielle à la réussite de Notre programme.
                  </p> 
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-dark mb-3">
                <div className="card-body text-center">
                    <i className="fa fa-thumbs-up fa-4x mb-4" style={{color: "#424949" }}></i>
                  <h5 className="card-title mb-3 fs-4 fw-bold">Transparence</h5>
                  <p className="card-text lead">
                  Nous érigeons la transparence en valeur primordiale.
                  </p> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}