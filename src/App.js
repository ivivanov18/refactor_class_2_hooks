import React from "react";
import DashboardShell from "./features/Dashboard/DashboardShell";
import DisplayDataContainer from "./common/components/DisplayDataContainer";
import { StateProvider } from "./context";

const App = () => {
  return (
    <StateProvider>
      <DisplayDataContainer />;
    </StateProvider>
  );
};

export default App;
