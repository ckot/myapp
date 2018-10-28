import React from "react";
import PropTypes from "prop-types";

const Tab = ({id, label, type, active, visible, onClick}) => {
  const isActive = active ? "active" : "";
  return (
    <button 
      className={`tablink ${isActive}`}
      onClick={onClick}>
      {label}
    </button>
  );
}

Tab.proptypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  visible: PropTypes.bool.isRequired,
  onClick: PropTypes.func
};

export default Tab;
