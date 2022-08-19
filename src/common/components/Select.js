import React from "react";
import PropTypes from "prop-types";

const Select = ({ options }) => (
  <>
    <label htmlFor="chartsSelection">Please, select a chart</label>
    <select name="chartsSelection">
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
};

export default Select;
