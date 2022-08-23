import React from "react";
import Loading from "../../common/components/Loading";
import { useFetch } from "../../common/hooks/useFetch";

const SummaryContainer = () => {
  const {
    loading,
    data: { salesTotal, subscriptionsTotal },
  } = useFetch("totals");

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="summary flex flex-row">
      <div className="card bg-indigo">
        <p>CellFast sales</p>
        <p>$ {salesTotal}</p>
      </div>
      <div className="card bg-blue">
        <p>CellNow subscriptions</p>
        <p>$ {subscriptionsTotal}</p>
      </div>
    </div>
  );
};

export default SummaryContainer;
