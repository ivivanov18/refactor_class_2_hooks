import React, { useEffect, useState } from "react";
import { Server } from "miragejs";
import { sales, subscriptions } from "../../mocks";

if (process.env.NODE_ENV === "development") {
  new Server({
    routes() {
      this.namespace = process.env.REACT_APP_BASE_URL;

      this.get("sales", () => {
        return sales;
      });

      this.get("subscriptions", () => {
        return subscriptions;
      });
    },
  });
}

/**
 * Hook that uses fetch API to get the results from the endpoint
 * If the endpoint is empty string, returns empty array from consistency
 * If dev mode, the results from api mocking above are returned
 * @param {string} endpoint
 * @returns {array} data - data from the endpoint or []
 */
export function useFetch(endpoint) {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (endpoint !== "") {
      fetch(`${process.env.REACT_APP_BASE_URL}/${endpoint}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response.json();
        })
        .then((json) => {
          console.log({ json });
          setData(json);
        });
    } else {
      setData([]);
    }
  }, [endpoint]);

  return data;
}
