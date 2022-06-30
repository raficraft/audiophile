import React, { useEffect, useState } from "react";
import { useJSONType } from "../../Typescript/types/types";
import { useParams } from "react-router";

export function useFetch() {
  const [state, setState] = useState<{
    error: boolean;
    currentData: useJSONType[];
    loading: boolean;
  }>({
    currentData: [],
    loading: true,
    error: false,
  });

  async function fetchData() {
    try {
      const res = await fetch("/data.json");

      const data = await res.json();
      if (res.ok) {
        setState((S) => ({
          ...S,
          loading: false,
          currentData: data,
        }));
      } else {
        setState((S) => ({
          ...S,
          error: data.error,
          loading: true,
        }));
      }
    } catch (error) {
      console.log("Error parsing JSON:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  return [state];
}
