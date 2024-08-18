import { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";

// import { fetchPicturesWithTopic } from "../../unsplash-api";
// import css from './App.module.css'

export default function App() {
  const [articles, setArticles] = useState([]);

  // useEffect(() => {
  //   async function fetchArticles() {
  //     try {
  //       // setLoading(true);
  //       // 2. Використовуємо HTTP-функцію
  //       const data = await fetchPicturesWithTopic("cat");
  //       setArticles(data);
  //       console.log(articles);
  //     } catch (error) {
  //       // setError(true);
  //     } finally {
  //       // setLoading(false);
  //     }
  //   }

  //   fetchArticles();
  // }, [articles]);

  return (
    <>
      {/* {loading && <p>Loading data, please wait...</p>} */}
      {/* {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )} */}
      {/* {articles.length > 0 && <ArticleList items={articles} />} */}
      <SearchBar />
    </>
  );
}
