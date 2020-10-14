import React from "react";
import "./Contact.css";
import PropTypes from "prop-types";

function Contact(props) {
  return (
    <div className="Contact">
      <img className="avatar" src={props.image} alt={props.name} />
      <div className="status">
        <p className="name">{props.name}</p>
        <div
          className={props.status === true ? "status-online" : "status-offline"}
        >
          <p className="status-text">
            {props.status === true ? "online" : "offline"}
          </p>
        </div>
      </div>
    </div>
  );
}
Contact.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool,
};
export default Contact;
