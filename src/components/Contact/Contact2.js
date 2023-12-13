import React from "react";
import ContactForm from "./ContactForm";

function Contact2() {
  return (
    <>
      <section id="contact" className="single-bg">
        <div className="bg-dark"></div>
        <div className="block">
          <div className="section-sub-title center">
            <article className="section-title-body white">
              <h1 className="head-title">
                Can you <span>Contact</span> us
              </h1>
            </article>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 ">
                <div className="text-center white">
                  <h4 className="widget-title">
                    <i className="ion-home"></i>Address:
                  </h4>
                  <p>
                    <p>
                      99 Queens Road Central Hong Kong 888777
                      <br /> email: nnnhko@nnn.cloud
                    </p>
                  </p>
                  <h4 className="widget-title">
                    <i className="ion-android-call"></i>Phone:
                  </h4>

                  <p>
                    (10 808) 321-1785-952
                    <br />
                    (10 808) 321-1785-953
                  </p>
                  <h4 className="widget-title">
                    <i className="ion-email"></i>Email:
                  </h4>
                  <p>
                    {" "}
                    social@nnn.cloud
                    <br />
                    support@nnn.cloud
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact2;
