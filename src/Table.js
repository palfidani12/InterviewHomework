import { TableRow } from "./TableRow";
export function Table({ inputData, setShown, currentSearch }) {
  return (
    <table className="table-main">
      <thead>
        <tr>
          <th>Avatar</th>
          <th>Name</th>
          <th>Species</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody className="align-middle">
        {inputData.results &&
          inputData.results.map((item) => {
            return (
              <TableRow
                key={item.id}
                item={item}
                setShown={setShown}
                search={currentSearch}
              />
            );
          })}
      </tbody>
    </table>
  );
}
