import React from "react";
import "./_footer.scss";
// import Resume from '../../assets/'
function Contact(props) {
  const details = {
    resumeLink:
      "https://drive.google.com/file/d/1YUk1EDlaHudPYp_4iYpwd9DAt-FSMzLE/view?usp=drive_link",
    phone: "Phone : 9360162026",
    email: "Email: vigneshviki1x@gmail.com",
  };
  return (
    <div className="contact">
      <div className="footer">
        <div className="resume">
          <a href={details.resumeLink} target="_blank">
            <button>View Resume</button>
          </a>
        </div>
        <div className="info">
          <div className="phone">{details.phone}</div>
          <div className="mail">{details.email}</div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
