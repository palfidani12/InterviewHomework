export function Pagination({ currentPage, setCurrentPage }) {
  return (
    <div className="main-pagination">
      {currentPage !== 1 ? (
        <button
          className="btn btn-outline-success"
          onClick={() => {
            setCurrentPage(currentPage - 1);
          }}
        >
          Back
        </button>
      ) : null}
      <p>Page: {currentPage}</p>
      {currentPage !== 42 ? (
        <button
          className="btn btn-outline-success"
          onClick={() => {
            setCurrentPage(currentPage + 1);
          }}
        >
          Next
        </button>
      ) : null}
    </div>
  );
}
