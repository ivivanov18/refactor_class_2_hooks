import React from "react";
import PropTypes from "prop-types";

const Select = ({ options, onChange, id, label }) => (
  <>
    <label htmlFor={id}>{label}</label>
    <select id={id} onChange={onChange}>
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  </>
);

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({ value: PropTypes.string, label: PropTypes.string })
  ),
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Select;
