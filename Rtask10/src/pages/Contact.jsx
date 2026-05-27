import "./Pages.css";

function Contact() {
  return (
    <div className="page">
      <h1>Contact Stackly</h1>

      <p>Email: info@thestackly.com</p>
      <p>Phone: +91 70107 92745</p>

      <div className="info-card">
        <h3>Head Office</h3>
        <p>MMR Complex, Chinna Thirupathi, Salem</p>
      </div>

      <div className="info-card">
        <h3>Our Branches</h3>
        <p>Bengaluru, Karnataka</p>
        <p>Hyderabad, Telangana</p>
        <p>Chennai, Tamil Nadu</p>
        <p>Coimbatore, Tamil Nadu</p>
      </div>

      <div className="info-card">
        <h3>Office Hours</h3>
        <p>Monday - Friday : 9:30 AM to 6:30 PM</p>
      </div>
    </div>
  );
}

export default Contact;