import { useMemo } from "react";

function useGetParamsUrl() {
  const params = useMemo(() => {
    const objParams = {};
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const entries = urlParams.entries();
    for (const [key, value] of entries) {
      objParams[key] = value;
    }
    return objParams;
  }, []);
  return params;
}

export default useGetParamsUrl;
