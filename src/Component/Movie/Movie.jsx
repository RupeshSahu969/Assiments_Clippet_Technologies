import React, { useEffect, useState } from "react";

function Movie() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://hoblist.com/api/movieList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        category: "movies",
        language: "kannada",
        genre: "all",
        sort: "voting",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("API Response:", data); // Log the entire response
        if (data.result) {
          setMovies(data.result);
        } else {
          console.error("Unexpected response format:", data);
          setError("Unexpected response format");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
        setError("Failed to fetch movies");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Movies List</h1>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {movies.map((movie, index) => (
          <li
            key={index}
            style={{
              marginBottom: "20px",
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <div style={{ display: "flex" }}>
              <div>
                <img
                  src={movie.poster}
                  alt={movie.title}
                  style={{ width: "200px", height: "300px" }}
                />
              </div>
              <div style={{ marginLeft: "20px" }}>
                <h2>{movie.title}</h2>
                <p>
                  <strong>Genre:</strong> {movie.genre}
                </p>
                <p>
                  <strong>Director:</strong> {movie.director}
                </p>
                <p>
                  <strong>Starring:</strong> {movie.stars}
                </p>
                <p>
                  {movie.runTime} | {movie.language} | {movie.releasedDate}
                </p>
                <p>
                  <strong>Voting:</strong> {movie.voting}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Movie;
