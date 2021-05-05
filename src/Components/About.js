import React from "react";
import ReactGA from 'react-ga';

function About(props) {
  function handleClick(e) {
    ReactGA.event({
      category: 'User',
      action: 'Viewed Resume'
    })
    // e.preventDefault();
  }
  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src={"images/" + props.data.image}
            alt="Arslan Gait Profile Pic"
          />
        </div>
        <div className="nine columns main-col">
          <div className="header">
            <h2>About Me</h2>
          </div>
          <p>{props.data.bio}</p>
          <div className="row">
            <div className="columns contact-details">
              <div className="header">
                <h2>Contact Details</h2>
              </div>
              <p className="address">
                <span>{props.data.name}</span>
                <br />
                <span>
                  {props.data.address.city}, {props.data.address.state}
                </span>
                <br />
                <span>{props.data.phone}</span>
                <br />
                <span>{props.data.email}</span>
              </p>
            </div>
            <div className="columns download">
              <p>
                <a href={props.data.resumedownload} className="button" onClick={handleClick} rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-download"></i>
                  Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
