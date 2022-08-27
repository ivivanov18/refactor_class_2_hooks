import React, { useState } from "react";
import DashboardShell from "./features/Dashboard/DashboardShell";
import { StateProvider } from "./context";
import { useFetch } from "./common/hooks/useFetch";

const App = () => {
  const [selectedOption, setSelectedOption] = useState("sales");
  const state = useFetch(selectedOption);
  return (
    <StateProvider state={state}>
      <DashboardShell
        fetchDataSet={setSelectedOption}
        selectedOption={selectedOption}
      />
    </StateProvider>
  );
};

export default App;
