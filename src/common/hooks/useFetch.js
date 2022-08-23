import { useEffect, useReducer } from "react";
import { Server } from "miragejs";
import { sales, subscriptions } from "../../mocks";

if (process.env.NODE_ENV === "development") {
  new Server({
    routes() {
      this.routes = 2000;
      this.namespace = process.env.REACT_APP_BASE_URL;

      this.get("sales", () => {
        return sales;
      });

      this.get("subscriptions", () => {
        return subscriptions;
      });

      this.get("totals", () => {
        const salesTotal = sales.reduce((acc, elt) => acc + elt.amount, 0);
        const subscriptionsTotal = subscriptions.reduce(
          (acc, elt) => acc + elt.amount,
          0
        );
        return { salesTotal, subscriptionsTotal };
      });
    },
  });
}

const initialState = {
  data: [],
  loading: false,
  error: "",
};

/**
 * Hook that uses fetch API to get the results from the endpoint
 * If the endpoint is empty string, returns empty array from consistency
 * If dev mode, the results from api mocking above are returned
 * @param {string} endpoint
 * @returns {array} data - data from the endpoint or []
 */
export function useFetch(endpoint) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (endpoint !== "") {
      dispatch({ type: "loading", payload: true });
      console.log("endpoint fetching: ", endpoint);
      fetch(`${process.env.REACT_APP_BASE_URL}/${endpoint}`)
        .then((response) => {
          dispatch({ type: "loading", payload: false });
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response.json();
        })
        .then((json) => {
          dispatch({ type: "data", payload: json });
        })
        .catch((err) => {
          dispatch({ type: "error", payload: err });
        });
    } else {
      dispatch({ type: "data", payload: [] });
    }
  }, [endpoint]);

  return state;
}

/**
 * Reducer that handles the actions "data" - setting data, "error": setting error
 * and "loading": setting loading.
 * In case of default action - the same state is returned to handle the case of choosing "--"
 * from Select
 * @param {Object} state - object containing data - {Array}, error - {string} and loading - {boolean}
 * @param {Object} action - object containing type - {string} and payload: depending on the action
 * @returns {Object} - the state
 */
function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, loading: action.payload };
    case "error":
      return { ...state, error: action.payload, data: [] };
    case "data":
      return { ...state, data: action.payload, error: "" };
    default:
      return state;
  }
}
