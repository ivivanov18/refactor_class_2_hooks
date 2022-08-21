import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import DisplayData from "./DisplayData";
import Select from "./Select";
import Loading from "./Loading";

const OPTIONS = [
  { value: "", label: "--" },
  { value: "sales", label: "Sales" },
  { value: "subscriptions", label: "Subscriptions" },
];

const DisplayDataContainer = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const { data, loading, error } = useFetch(selectedOption);

  const onChangeSelect = (value) => {
    setSelectedOption(value.target.value);
  };

  const displayed = loading ? (
    <Loading />
  ) : error ? (
    <p>{error.message}</p>
  ) : (
    <DisplayData data={data} />
  );

  return (
    <>
      <Select onChange={onChangeSelect} options={OPTIONS} id="select-product" />
      {displayed}
    </>
  );
};

export default DisplayDataContainer;
