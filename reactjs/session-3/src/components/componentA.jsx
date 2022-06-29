import React from "react";
import PropTypes from "prop-types";
import Contact from "../models/contact.model";
import ComponentB from "./componentB";

const ComponentA = ({ contact }) => {
  return (
    <div>
      <h2>
        Name: {contact.name} {contact.lastname}
      </h2>
      <p>Email: {contact.email}</p>
      <ComponentB state={contact.connected} />
    </div>
  );
};

ComponentA.propTypes = {
  contact: PropTypes.instanceOf(Contact),
};

export default ComponentA;
