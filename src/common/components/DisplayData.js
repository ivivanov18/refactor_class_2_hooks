import React from "react";
import PropTypes from "prop-types";

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
