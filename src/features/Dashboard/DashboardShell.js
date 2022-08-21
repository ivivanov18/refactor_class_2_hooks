import React, { useState } from "react";
import Aside from "../../common/components/Aside";
import ChartContainer from "./ChartContainer";
import Layout from "../../common/components/Layout";
import Main from "../../common/components/Main";
import SummaryContainer from "./SummaryContainer";
import Select from "../../common/components/Select";
// import { fetchDataset } from "./DashboardSlice";

const optionsForSelect = [
  { label: "Sales", value: "sales" },
  {
    label: "Subscriptions",
    value: "subscriptions",
  },
];

function DashboardShell() {
  const [selectedLabel, setSelectedLabel] = useState("");

  // componentDidMount() {
  //   this.props.fetchDataset(`${process.env.REACT_APP_BASE_URL}/totals/`);
  // }

  const handleSelectChange = (event) => {
    // const selectedLabel = event.target.selectedOptions[0].label;
    // this.props.fetchDataset(event.target.value);
    // this.setState({ selectedLabel });
  };

  return (
    <Layout>
      <Aside>
        <h2># Polly dashboard</h2>
        <Select
          id="select-product"
          label="Please select a chart:"
          onChange={handleSelectChange}
          options={optionsForSelect}
        />
      </Aside>
      <Main>
        <h1>
          Welcome, <span className="bold">learner!</span>
        </h1>
        <SummaryContainer />
        <ChartContainer selectedLabel={selectedLabel} />
      </Main>
    </Layout>
  );
}

export default DashboardShell;
