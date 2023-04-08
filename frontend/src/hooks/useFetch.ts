import { useCallback, useState } from "react";
import requestModel from "../models/requestModel";

interface fetchInterface {
  data: any;
  isLoading: boolean;
  error: boolean;
}

const useFetch = () => {
  const [fetchedData, setFetchedData] = useState<fetchInterface>({
    data: {},
    isLoading: false,
    error: false,
  });

  const fetchData = useCallback(async (requestConfig: requestModel) => {
    try {
      setFetchedData({
        data: {},
        isLoading: true,
        error: false,
      });
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });
      // console.log(response);
      if (!response.ok) {
        throw new Error("Error fetching data.");
      }

      const data = await response.json();

      if (data) {
        setFetchedData({
          data: data,
          isLoading: false,
          error: false,
        });
      }
    } catch (err) {
      setFetchedData({
        data: [],
        isLoading: false,
        error: true,
      });
    }
  }, []);

  const { data, isLoading, error } = fetchedData;
  return { data, isLoading, error, fetchData };
};

export default useFetch;
