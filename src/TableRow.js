export function TableRow({ item, setShown, search }) {
  if (search.length < 1 || item.name.includes(search))
    return (
      <tr>
        <td>
          <img className="main-img" src={item.image} alt={item.image} />
        </td>
        <td>
          <a
            href="#"
            onClick={() => setShown(item)}
            className="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
          >
            {item.name}
          </a>
        </td>
        <td>{item.species}</td>
        <td className={item.status}>{item.status}</td>
      </tr>
    );
}
