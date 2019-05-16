import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
const TextinputGroup = ({
  type,
  name,
  placeholder,
  value,
  label,
  onChange,
  error
}) => {
  return (
    <div className="form-grouup">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        className={classnames("form-control form-control-lg", {
          "is-invalid": error
        })}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        error={error}
      />
      {error && <div className="invalid-feedback">{error}</div>}
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
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired
};

export default TextinputGroup;
