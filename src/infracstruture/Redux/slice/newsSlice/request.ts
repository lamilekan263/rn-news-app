export type FetchTopHeadlinesType = {
  category: string | undefined;
};

export const fetchTopHeadlines = async (category: string) => {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=ac80f53f243240ee8c057d031e1bee67`,
  );
  const json = await response.json();

  return {
    response,
    json,
  };
};
