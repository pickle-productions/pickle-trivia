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

export const getCategories = async () => {
  const [data, error] = await fetchData("https://opentdb.com/api_category.php");

  if (error) {
    console.error("Error fetching categories:", error);
    return;
  }

  const triviaCategories = data.trivia_categories;

  //console.log("First json response before doing anything", data);
  //console.log(triviaCategories);

  return triviaCategories
};

export const getQuestions = async (id) => {
    const [data, error] = await fetchData(`https://opentdb.com/api.php?amount=10&category=${id}&difficulty=medium&type=multiple`);

    if (error) {
      console.error("Error fetching:", error);
      return;
    }

    return data
}


