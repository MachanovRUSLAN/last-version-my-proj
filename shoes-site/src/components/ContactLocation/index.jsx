import React from "react";
import "./ContactLocation.css";

function ContactLocation() {
  return (
    <div className="map">
      <div className="location">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d24300.967021530625!2d49.84093525200111!3d40.417248812816744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sshoes%20stores!5e0!3m2!1str!2saz!4v1707994006121!5m2!1str!2saz"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactLocation;
