import React from "react";
import "./Pages.css";

function Profile() {
  return (
    <div className="page profile-container">
      <h1>Company Profile</h1>
      <div className="profile-card">

        <div className="profile-details">
          <h2>Leadership Excellence</h2>
          <p>
            Stackly’s leadership team is committed to innovation, strategic
            growth, and delivering impactful digital solutions for modern
            businesses.
          </p>
        </div>
      </div>

      <div className="info-card">
        <h3>Work Culture</h3>
        <p>
          We foster collaboration, creativity, and continuous learning to
          empower our teams and build future-ready technology solutions.
        </p>
      </div>


      <div className="info-card">
        <h3>Core Values</h3>
        <p>
          Innovation, Integrity, Excellence, Customer Focus, and
          Accountability define everything we do at Stackly.
        </p>
      </div>

      <div className="info-card">
        <h3>Innovation Focus</h3>
        <p>
          We continuously explore emerging technologies to create scalable,
          secure, and intelligent digital products.
        </p>
      </div>


      <div className="info-card">
        <h3>Industry Recognition</h3>
        <p>
          Stackly is recognized for delivering high-quality software solutions
          that drive measurable business transformation.
        </p>
      </div>
    </div>
  );
}

export default Profile;