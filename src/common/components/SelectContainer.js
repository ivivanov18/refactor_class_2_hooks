import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import DisplayData from "./DisplayData";
import Select from "./Select";

const OPTIONS = [
  { value: "", label: "--" },
  { value: "sales", label: "Sales" },
  { value: "subscriptions", label: "Subscriptions" },
];

const SelectContainer = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const data = useFetch(selectedOption);

  const onChangeSelect = (value) => {
    console.log(value.target.value);
    setSelectedOption(value.target.value);
  };

  return (
    <>
      <Select onChange={onChangeSelect} options={OPTIONS} />
      <DisplayData data={data} />
    </>
  );
};

export default SelectContainer;
