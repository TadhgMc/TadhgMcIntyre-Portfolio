import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import profilePic from '../assets/images/port_pic2.jpg'

function AboutMe() {

    return (<>
        <Header />
        <div className="row g-0 m-4 bg-redish rounded" id="aboutme">
                  <div className="col-md-4">
                    <img src={profilePic} className="mw-100 rounded-start" alt="Personal Picture" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body txt-redish">
                      <h5 className="card-title fs-3">About Me</h5>
                      <p className="card-text fs-4">My name is Tadhg McIntyre, I'm a new developer 
                        looking to make my place in the ever expanding world of Web Development. 
                        I've had a few different jobs in the past, and am now looking to begin a career in Full-Stack Web Development!
                      </p>
                    </div>
                  </div>
                </div>
        <Footer />
        </>
    )
};

export default AboutMe;