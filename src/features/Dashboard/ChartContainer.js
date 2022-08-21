import React, { useMemo } from "react";
import LineChart from "./LineChart";
import PropTypes from "prop-types";
import { StateContext } from "../../context";

const ChartContainer = ({ selectedLabel }) => {
  const { data } = React.useContext(StateContext);
  const chartLabels = useMemo(
    data.map((dataPoint) => dataPoint.timestamp),
    [data]
  );
  const chartValues = useMemo(
    data.map((dataPoint) => dataPoint.amount),
    [data]
  );

  return (
    <div>
      <LineChart
        chartLabels={chartLabels}
        chartValues={chartValues}
        label={selectedLabel}
      />
    </div>
  );
};

ChartContainer.propTypes = {
  selectedLabel: PropTypes.string.isRequired,
};

export default ChartContainer;
