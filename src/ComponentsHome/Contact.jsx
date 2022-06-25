import React from "react";
import { Card, Col, Row, Select } from 'antd';

const { Option } = Select;


export default function Contact() {

  return (
    <div>
      <section id="contact">
        <div className="container my-5 py-5">
          <div className="row mb-5">
            <div className="col-12">
              <h3 className="fs-5 text-center mb-0">Contactez-nous</h3>
              <h1 className="display-6 text-center mb-4">
                Vous Avez <b>Des Questions?</b>
              </h1>
              <hr className="w-25 mx-auto" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <img src="/images/Home_img/contact-us.png" alt="Contact" className="w-80" />
            </div>
            <div className="site-card-wrapper col-md-6">
              <Row gutter={16}>
                <Col span={8}>
                  <Card title="Adresse :" bordered={true}> 
                  <a href="https://www.google.com/maps/place/Union+Tunisienne+de+Solidarit%C3%A9+Sociale/@36.8324309,10.1864897,15z/data=!4m5!3m4!1s0x0:0xb792d6146d2b958b!8m2!3d36.8324309!4d10.1864897" title="map">CITÉ ADMINISTRATIVE, LOT N° 7, CITÉ EL KHADHRA, Tunis.</a>  
                  </Card>
                </Col>
                <Col span={8}>
                  <Card title="Horaires :" bordered={true}>
                    <Select
                      placeholder="Ouvre à 08:30"
                    >
                      <Option value="dimande Fermé">dimande Fermé</Option>
                      <Option value="lundi	08:30–17:00">lundi	08:30–17:00</Option>
                      <Option value="mardi	08:30–17:00">mardi	08:30–17:00</Option>
                      <Option value="mercredi	08:30–17:00">mercredi	08:30–17:00</Option>
                      <Option value="jeudi	08:30–17:00">jeudi	08:30–17:00</Option>
                      <Option value="vendredi	08:30–17:00">vendredi	08:30–17:00</Option>
                      <Option value="samedi	Fermé">samedi	Fermé</Option>
                    </Select>
                  </Card>
                </Col>
                <Col span={8}>
                  <Card title="Tél / Fax :" bordered={true}>
                    +216 71 808 066 / +216 71 807 707
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
