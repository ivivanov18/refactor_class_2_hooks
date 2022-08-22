import * as React from "react";
import { useState } from "react";
import { useFetch } from "../common/hooks/useFetch";
import { sales } from "../mocks";

const initialState = {
  loading: false,
  data: sales,
  error: "",
  salesTotal: 3466,
  subscriptionsTotal: 1492,
  selectedOption: "sales",
};

export const StateContext = React.createContext();

export function StateProvider({ children }) {
  const [selectedOption, setSelectedOption] = useState(
    initialState.selectedOption
  );
  const { data, loading, error } = useFetch(selectedOption);

  return (
    <StateContext.Provider
      value={{
        ...initialState,
        selectedOption,
        setSelectedOption,
        data,
        loading,
        error,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}
