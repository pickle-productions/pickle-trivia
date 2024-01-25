import categoriesJson from '../src/categories.json'
import questionsJson from '../src/questions.json'


export const fetchData = async (url, options = {}) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(
        `Fetch failed. ${response.status} ${response.statusText}`
      );
    }

    const isJson = (response.headers.get("content-type") || "").includes(
      "application/json"
    );
    let data = isJson ? await response.json() : await response.text();

    return [data, null];
  } catch (error) {
    console.error(error.message);

    return [null, error];
  }
};

// export const getCategories = async () => {

//   let [data, error] = await fetchData("https://opentdb.com/api_category.php");
//   // const [data, error] = await fetchData("https://api.jsonserve.com/_s8suy");

//   if (error) {
//     data = categoriesJson
//     console.error("Error fetching categories, using local JSON instead:", error);
//     return categoriesJson;
//   }

//   const triviaCategories = data.trivia_categories;

//   return triviaCategories;
// };

// export const getQuestions = async (id) => {
//   // const [data, error] = await fetchData(
//   //   `https://api.jsonserve.com/1Vpkmi`
//   // );
//   let [data, error] = await fetchData(
//     `https://opentdb.com/api.php?amount=10&category=${id}&difficulty=medium&type=multiple`
//   );

//   if (error) {
//     data = questionsJson
//     console.error("Error fetching, using local json instead:", error);
//     return;
//   }

//   return data;
// };

export const getCategories = async () => {
  // let [data, error] = await fetchData("https://opentdb.com/api_category.php");
  let [data, error] = [null, Error('fetch')]

  if (error) {
    console.error("Error fetching categories, using local JSON instead:", error);
    data = categoriesJson;
    console.log(data)
  }

  const triviaCategories = data.trivia_categories;
  return triviaCategories;
};

export const getQuestions = async (id) => {
  // let [data, error] = await fetchData(
  //   `https://opentdb.com/api.php?amount=10&category=${id}&difficulty=medium&type=multiple`
  // );

  let [data, error] = [null, Error('api down')]


  if (error) {
    console.error("Error fetching, using local json instead:", error);
    data = questionsJson;
  }

  return data;
};

