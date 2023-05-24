import axios from "axios";
import { useState, useEffect } from "react";
import { Profile } from "./Profile";
import { Pagination } from "./Pagination";
import { SearchBar } from "./SearchBar";
import { Table } from "./Table";
import "./style.css";

export default function Home() {
  const [inputData, setInputData] = useState([]); //Data fetched from API
  const [shown, setShown] = useState(null); //Currently shown character (Profile page)
  const [currentPage, setCurrentPage] = useState(1); //Currently loaded page
  const [currentSearch, setCurrentSearch] = useState(""); //Current search

  //Load current page
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character?page=${currentPage}`)
      .then((response) => {
        setInputData(response.data);
      });
  }, [currentPage]);

  //Profile page view
  if (shown) return <Profile shown={shown} setShown={setShown} />;

  //Homepage view
  return (
    <>
      <h1 className="main-title">Rick and Morty fanbase database:</h1>
      <SearchBar
        searchInput={currentSearch}
        setSearchInput={setCurrentSearch}
      />
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Table
        inputData={inputData}
        setShown={setShown}
        currentSearch={currentSearch}
      />
    </>
  );
}
