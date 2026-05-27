import { NavLink, Outlet } from "react-router-dom";
import "./Pages.css";

function Services() {
  return (
    <div className="page">
      <h1>Our Services</h1>

      <p>
        Stackly provides comprehensive IT services for businesses of all sizes.
      </p>

      <div className="services-grid">
        <div className="service-card">
          <h3>Web Development</h3>
          <p>Responsive web applications with modern frameworks.</p>
        </div>

        <div className="service-card">
          <h3>Mobile App Development</h3>
          <p>Cross-platform mobile apps for Android and iOS.</p>
        </div>

        <div className="service-card">
          <h3>AI & Automation</h3>
          <p>Smart automation tools for operational efficiency.</p>
        </div>
      </div>

      <div className="sub-nav">
        <NavLink to="web-development">Web Development</NavLink>
        <NavLink to="mobile-app">Mobile Apps</NavLink>
        <NavLink to="uiux-design">UI/UX Design</NavLink>
      </div>

      <div className="nested-content">
        <Outlet />
      </div>
    </div>
  );
}

export default Services;