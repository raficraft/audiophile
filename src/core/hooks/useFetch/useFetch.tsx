import React, { useEffect, useState } from "react";
import { ConsumedProduct } from "../../Typescript/types/types";

export function useFetch(relaunch: any) {
  const [state, setState] = useState<{
    error: boolean;
    currentData: ConsumedProduct[];
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
          currentData: data,
        }));

        setTimeout(() => {
          setState((S) => ({
            ...S,
            loading: false,
          }));
        }, 500);
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
  }, [relaunch]);
  return [state];
}
