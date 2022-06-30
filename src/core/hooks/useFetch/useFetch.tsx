import React, { useEffect, useState } from "react";
import { useJSONType } from "../../Typescript/types/types";

export function useFetch(cat: any) {
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
    console.log("Call API");
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
    setState((S) => ({
      ...S,
      loading: true,
    }));
    fetchData();
  }, [cat]);
  return [state];
}
