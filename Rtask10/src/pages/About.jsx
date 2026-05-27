import "./Pages.css";

function About() {
  return (
    <div className="page">
      <h1>About Stackly</h1>

      <p>
        Founded in 2015, Stackly has grown into one of Salem’s leading
        technology companies, delivering innovative digital solutions for
        businesses worldwide.
      </p>

      <div className="info-card">
        <h3>Our Mission</h3>
        <p>
          To create smart tools and digital solutions that solve real-world
          business challenges.
        </p>
      </div>

      <div className="info-card">
        <h3>Our Vision</h3>
        <p>
          To become a global leader in scalable technology innovation.
        </p>
      </div>
    </div>
  );
}

export default About;