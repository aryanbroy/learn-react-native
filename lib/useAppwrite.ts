import { Data } from "@/app/(tabs)/home";
import { useEffect, useState } from "react";
import { Alert } from "react-native";

const useAppwrite = (fn: () => Promise<Data[] | undefined>) => {
  const [data, setData] = useState<Data[] | undefined>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = (await fn()) as Data[] | undefined;
      setData(res);
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Something went wrong while fetching videos");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => fetchData();

  return { data, isLoading, refetch };
};

export default useAppwrite;
