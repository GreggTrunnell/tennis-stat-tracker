import { useState } from "react";
import axios from "axios";

function StatsList() {
  const [statsList, setStatsList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const Search = () => {
    console.log("Fetching query:", searchQuery);
    axios
      .get(`/api/search?q=${searchQuery}`)
      .then((response) => {
        console.log("Response from GET", response.data);
        setStatsList(response.data);
      })
      .catch((error) => {
        console.log("Error on GET", error);
      });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      Search();
    }
  };

return (
  <div>
    <input
      type="text"
      placeholder="Search"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      onKeyDown={handleKeyDown}
    />
    <button onClick={Search}>Search</button>
    <div>
      {statsList.length === 0 ? (
        <p className="red-text">No results found.</p>
      ) : (
        statsList.map((stat, index) => (
          <div key={index} className="search-result">
            <p>
              <strong>Name:</strong> {stat.first_name} {stat.last_name}
            </p>
            <p>
              <strong>Playing Hand:</strong> {stat.playing_hand}
            </p>
            <p>
              <strong>Racquet:</strong> {stat.racquet_brand}
            </p>
            <p>
              <strong>Country:</strong> {stat.country}
            </p>
            <hr />
          </div>
        ))
      )}
    </div>
    <img src="public/images/magnifying_man.png" alt="Search illustration" className="w-50" />
  </div>
);
};
export default StatsList;
