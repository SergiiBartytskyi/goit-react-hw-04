import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";

import { fetchPicturesWithQuery } from "../../unsplash-api";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
// import css from './App.module.css'

export default function App() {
  const [pictures, setPictures] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [totalPages, setTotalPages] = useState(0);

  const handleSearch = async (newQuery) => {
    try {
      setPictures([]);
      setError(false);
      setLoading(true);
      setQuery(newQuery);
      setPage(1);
      const data = await fetchPicturesWithQuery(newQuery, 1);
      setPictures(data.results);
      setTotalPages(data.total_pages);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const loadMorePictures = async () => {
    try {
      setLoading(true);
      const nextPage = page + 1;
      const data = await fetchPicturesWithQuery(query, nextPage);
      setPictures((prevPictures) => [...prevPictures, ...data.results]);
      setPage(nextPage);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const shouldShowLoadMore =
    pictures.length > 0 && page < totalPages && !loading;

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {pictures.length > 0 && <ImageGallery items={pictures} />}
      {shouldShowLoadMore && <LoadMoreBtn onClick={loadMorePictures} />}
      {error && <ErrorMessage />}
      {loading && <Loader />}
    </>
  );
}
