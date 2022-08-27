import React from "react";
import LineChart from "./LineChart";
import Loading from "../../common/components/Loading";
import { StateContext } from "../../context";

const ChartContainer = ({ label }) => {
  const { data, error, loading } = React.useContext(StateContext);
  const chartLabels = data.map((dataPoint) => dataPoint.timestamp);
  const chartValues = data.map((dataPoint) => dataPoint.amount);

  const displayed = loading ? (
    <Loading />
  ) : error ? (
    <p>{error.message}</p>
  ) : (
    <LineChart
      chartLabels={chartLabels}
      chartValues={chartValues}
      label={label}
    />
  );

  return <div>{displayed}</div>;
};

export default ChartContainer;
