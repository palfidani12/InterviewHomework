export function SearchBar({ searchInput, setSearchInput }) {
  return (
    <>
      <input
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        type="text"
        className="main-search-bar"
        placeholder="Type here to search on this page"
        aria-label="Username"
        aria-describedby="addon-wrapping"
      />
    </>
  );
}
