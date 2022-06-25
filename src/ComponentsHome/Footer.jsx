import React from "react";

export default function Contact() {
return (
    <div>
      <footer
        className="text-center text-white"
        style={{ backgroundColor: "#424949" }}
      >
        {/* Grid container */}
        <div className="container p-3">

          {/* Section: Iframe */}
          <section className>
            <div className="row d-flex justify-content-center">
              <div className="col-lg-6">
                <div className="ratio ratio-16x9">
                  <iframe
                    width={560}
                    height={315}
                    src="https://www.youtube.com/embed/wgo3CxdG6EM"
                    title="YouTube video player"
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </section>
          {/* Section: Iframe */}
        </div>

        {/* Grid container */}
        <div className="container">

          {/* Section: Social media */}
          <section className="mb-6">

            {/* Facebook */}
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://www.facebook.com/utss1/"
              role="button"
            >
              <i className="fa fa-facebook" />
            </a>

            {/* Twitter */}
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://twitter.com/utss2"
              role="button"
            >
              <i className="fa fa-twitter" />
            </a>

            {/* Google */}
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="http://www.utss.org.tn/"
              role="button"
            >
              <i className="fa fa-google" />
            </a>
          </section>
        </div>

        {/* Grid container */}
        
        {/* Copyright */}
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2022 Copyright:
          <a className="text-white" href="/#">
            {" "}
            UTSS-MICROCRED
          </a>
        </div>
        {/* Copyright */}
      </footer>
    </div>
  );
}