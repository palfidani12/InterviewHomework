export function Profile({ shown, setShown }) {
  return (
    <div className="profile">
      <img className="profile-img" src={shown.image} alt={shown.image} />
      <h1 className="profile-name">{shown.name}</h1>
      <table className="profile-table">
        <tbody>
          <tr>
            <td className="profile-table-left">Id:</td>
            <td>{shown.id || "N/A"}</td>
          </tr>
          <tr>
            <td className="profile-table-left">Status:</td>
            <td>{shown.status || "N/A"}</td>
          </tr>
          <tr>
            <td className="profile-table-left">Species:</td>
            <td>{shown.species || "N/A"}</td>
          </tr>
          <tr>
            <td className="profile-table-left">Type:</td>
            <td>{shown.type || "N/A"}</td>
          </tr>
          <tr>
            <td className="profile-table-left">Gender:</td>
            <td>{shown.gender || "N/A"}</td>
          </tr>
          <tr>
            <td className="profile-table-left">Origin:</td>
            <td>{shown.origin.name || "N/A"}</td>
          </tr>
          <tr>
            <td className="profile-table-left">Location:</td>
            <td>{shown.location.name || "N/A"}</td>
          </tr>
          <tr>
            <td className="profile-table-left">Number of episodes:</td>
            <td>{shown.episode.length || "N/A"}</td>
          </tr>
        </tbody>
      </table>
      <button className="profile-back-btn" onClick={() => setShown(null)}>
        Back
      </button>
    </div>
  );
}
