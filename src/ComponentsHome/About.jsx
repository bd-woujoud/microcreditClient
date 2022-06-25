import React from "react";

export default function About() {

  return (
        <div>
            <section id="about">
                <div className="container my-4 py-5">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="/images/Home_img/utss.jpg " alt="About" className="w-75 mt-9"/>
                        </div>
                        <div className="col-md-6">
                            <h3 className="fs-5 mb-0">À propos de nous</h3>
                            <h1 className="display-6 mb-2">Qui <b>Sommes-Nous</b> ?</h1>
                            <hr className="w-40"/>
                            <p className="lead mb-4">L'Union Tunisienne de Solidarité Sociale "UTSS" 
                            est une organisation non gouvernementale tunisienne œuvrant pour 
                            le développement du concept de solidarité et d'entraide et 
                            réalisant des programmes sociaux, d'aide de secours 
                            et d'auto-développement au profit des démunis.
                            Elle est réagie par la loi des associations N°154 de 1959 
                            telle que modifiée en 1988 et 1992.
                            </p>
                            <buttom className="btn btn-light rounded-pill py-2" style={{color: "#808B6C" }}>Démarrer Avec Nous</buttom>
                        </div>
                    </div>
                </div>
            </section>
        </div>
 )
}