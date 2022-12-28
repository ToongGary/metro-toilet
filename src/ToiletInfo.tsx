import React from "react";

function ToiletInfo() {
  const dummy_stations = { name: "삼전", code: "123", line: [2], location: "출구옆어딘가" };

  return (
    <div>
      <h1>{dummy_stations.name}</h1>
      <p>위치: {dummy_stations.location}</p>
    </div>
  );
}

export default ToiletInfo;
