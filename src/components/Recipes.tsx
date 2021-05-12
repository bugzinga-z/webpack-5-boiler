import { useEffect, useState } from "react";
interface Recipe {
  strInstructions: string;
}
type RecipeResponse = {
  meals: Array<Recipe>;
};
const useFetch = (url: string): RecipeResponse => {
  const [data, setData] = useState<RecipeResponse>({ meals: [] });
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
    }
    fetchData();
  }, [url]);

  return data;
};

const Recipes = () => {
  const result = useFetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata",
  );

  return (
    <>
      {result.meals.length > 0 &&
        JSON.stringify(result.meals[0].strInstructions, null, 2)}
    </>
  );
};

export default Recipes;
