import React from "react";
import PropTypes from "prop-types";

const TextinputGroup = ({
  type,
  name,
  placeholder,
  value,
  label,
  onChange
}) => {
  return (
    <div className="form-grouup">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        className="form-control form-control-lg"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
TextinputGroup.defaultProps = { type: "text" };

TextinputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default TextinputGroup;
