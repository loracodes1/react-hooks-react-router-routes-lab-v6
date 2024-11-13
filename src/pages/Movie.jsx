import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  // Get the movie ID from the URL
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  // Fetch movie data when the component is mounted or when the ID changes
  useEffect(() => {
    fetch(`/movies/${id}`)
      .then((response) => response.json())
      .then((data) => setMovie(data))
      .catch((error) => console.error("Error fetching movie data:", error));
  }, [id]);

  // Show loading message if movie data is not yet available
  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>Time: {movie.time} minutes</p>
        <div>
          <h3>Genres:</h3>
          {movie.genres.map((genre, index) => (
            <span key={index} style={{ marginRight: "10px" }}>
              {genre}
            </span>
          ))}
        </div>
      </main>
    </>
  );
}

export default Movie;
