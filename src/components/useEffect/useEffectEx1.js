import { useEffect, useState } from "react";
import axios from "axios";
import { RecipieTable } from "../TableCompo";

import React from 'react';


export const UseEffectExample = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/recipes');
      
      const recipesList = response.data.recipes
      
      if (response.status === 200) {
        setData(recipesList);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <RecipieTable data={data} />
    </>
  );
};
