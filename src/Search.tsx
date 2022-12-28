import React from "react";

function Search() {
  const dummy_stations = [
    { name: "삼전", code: "123", line: [2], inner: true },
    { name: "삼성", code: "124", line: [1], inner: false },
    { name: "시청", code: "125", line: [1, 2], inner: true },
  ];

  const [stations, setStations] = React.useState(dummy_stations);
  const [search, setSearch] = React.useState("");

  const filterdStations = stations.filter((station) => {
    return station.name.includes(search);
  });

  return (
    <div>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
      {search && (
        <ul>
          {filterdStations.map((station) => (
            <li key={station.code}>{station.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;
