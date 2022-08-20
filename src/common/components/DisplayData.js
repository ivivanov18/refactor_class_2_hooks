import React from "react";
import PropTypes from "prop-types";

/**
 * Component that displays the passed data in unordered list
 * @param {array} data - desctructured from props object, the data that needs to be displayed
 * @returns
 */
const DisplayData = ({ data }) => (
  <ul>
    {data.map((row) => (
      <li key={row.timestamp}>
        {row.timestamp} - {row.amount}
      </li>
    ))}
  </ul>
);

DisplayData.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      timestamp: PropTypes.string,
      amount: PropTypes.number,
    })
  ),
};
export default DisplayData;
