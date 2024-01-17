import { useEffect, useState } from "react";
import axios from "axios";

const useFatch = (url) => {
  const [data, setData] = useState([]);
  const [loding, setLoding] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fachData = async () => {
      setLoding(true);
      try {
        const res = await axios.get(url);
        setData(res.data);
      } catch (error) {
        setError(error);
      }
      setLoding(false);
    };
    fachData();
  }, [url]);

  const refFach = async () => {
    setLoding(true);
    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (error) {
      setError(error);
    }
    setLoding(false);
  };
  return { data, loding, error, refFach };
};
export default useFatch;
