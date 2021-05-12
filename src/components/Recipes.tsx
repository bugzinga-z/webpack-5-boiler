import React, { ReactElement, useEffect, useState } from "react";

interface Recipe {
  strInstructions: string;
}
type RecipeResponse = {
  meals: Array<Recipe>;
  error: string;
};

const testFetch = async (url: string): Promise<RecipeResponse> => {
  const response = await fetch(url);
  const data = (await response.json()) as RecipeResponse;
  if (response.ok) {
    return data;
  } else {
    const error = new Error("Errore");
    return Promise.reject(error);
  }
};

const useFetch = (url: string): Recipe | undefined => {
  const [data, setData] = useState<Recipe>();
  useEffect(() => {
    async function fetchData(): Promise<RecipeResponse> {
      const response = await fetch(url);
      const data = (await response.json()) as RecipeResponse;
      if (response.ok) {
        return data;
      } else {
        const error = new Error("Errore");
        return Promise.reject(error);
      }
    }

    fetchData()
      .then((res) => setData(res.meals[0]))
      .catch((err) => console.log("Errore", err));
  }, [url]);

  return data;
};

const Recipes: React.FC = (): ReactElement => {
  const recipe = useFetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`,
  );
  const [ricetta, setRicetta] = useState<Recipe>();
  const [error, setError] = useState<string>();
  const getRicetta = (ricetta: string): void => {
    testFetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${ricetta}`,
    )
      .then((res: RecipeResponse) => {
        setRicetta(res.meals[0]);
        setError("");
      })
      .catch(() => {
        setRicetta(undefined);
        setError("Nessuna ricetta trovata");
      });
  };
  return (
    <div>
      <h3>Current Recipes:</h3>
      <button onClick={(): void => getRicetta("Arrabiata")}>
        Lasagna
      </button>
      <button onClick={(): void => getRicetta("error")}>
        Errore
      </button>
      <hr />
      {JSON.stringify(ricetta?.strInstructions)}
      {error && JSON.stringify(error)}
      <hr />
      {recipe ? (
        JSON.stringify(recipe.strInstructions, null, 2)
      ) : (
        <p>Errore chiamata API</p>
      )}
    </div>
  );
};

export default Recipes;
