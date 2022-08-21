import React, { useState } from "react";
import Aside from "../../common/components/Aside";
import ChartContainer from "./ChartContainer";
import Layout from "../../common/components/Layout";
import Main from "../../common/components/Main";
import SummaryContainer from "./SummaryContainer";
import Select from "../../common/components/Select";
// import { fetchDataset } from "./DashboardSlice";

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

  const buildSelect = () => {
    const optionsForSelect = [
      { label: "Sales", value: "sales" },
      {
        label: "Subscriptions",
        value: "subscriptions",
      },
    ];

    return (
      <>
        <div className="field">
          <Select
            id="select-product"
            label="Please select a chart:"
            onChange={handleSelectChange}
            options={optionsForSelect}
          />
          <div className="chevron-wrapper flex">
            <svg
              className="chevron"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </>
    );
  };

  return (
    <Layout>
      <Aside>
        <h2># Polly dashboard</h2>
        {buildSelect()}
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
