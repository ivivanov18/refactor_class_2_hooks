import React, { useEffect, useState } from "react";

export function useFetch(endpoint) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`/api/${endpoint}`)
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
  }, [endpoint]);

  return data;
}
