import { useState, useEffect } from "react";
import { defaultCurrentSelectedDetails, errorCode } from "./Constants";
import {getData, storeData} from './LocalAsyncStorage';

const useFetchMemorisedShlokas = () => {
  const [memorisedShlokas, setMemorisedShlokas] = useState({});

  useEffect(() => {
    defaultCurrentSelectedDetails.error = errorCode;
    setMemorisedShlokas(defaultCurrentSelectedDetails);
    getData('@savedShlokas').then(value => populate(value));
    // const fetchHouse = async () => {
    //   try {
    //     const rsp = await fetch("http://localhost:8080/api/v1/shlokas");
    //     if (rsp.ok) {
    //       const memorisedShlokasResponse = await rsp.json();
    //       setMemorisedShlokas(memorisedShlokasResponse);
    //     } else {
    //       throw new Error("Something went wrong");
    //     }
    //   } catch (error) {
    //     console.error("Your existing list is not fetched");
    //     setMemorisedShlokas({ error: "Unable to fetch the existing shlokas!!" });
    //   }
    // };
    // fetchHouse();
  }, []);

  const populate = (value) => {
    console.log(value);
    if (value) {
      setMemorisedShlokas(value);
    }
  }

  return memorisedShlokas;
};

export default useFetchMemorisedShlokas;
