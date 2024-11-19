import React, { useState } from 'react';

const MoviesList = () => {
    // State for hardcoded list of movies
    const [movies, setMovies] = useState([
        { id: 1, title: "Inception", genre: "Action", description: "A mind-bending thriller about dreams." },
        { id: 2, title: "The Godfather", genre: "Drama", description: "A mafia family saga." },
        { id: 3, title: "Interstellar", genre: "Sci-Fi", description: "A journey to save humanity." },
        { id: 4, title: "Mad Max: Fury Road", genre: "Action", description: "A high-octane action movie in a post-apocalyptic world." },
    ]);

    const [viewActionOnly, setViewActionOnly] = useState(false); // View state for toggling genre
    const [toggleDetails, setToggleDetails] = useState({}); // Tracks toggled details per movie

    // Toggle details visibility for a specific movie
    const handleToggleDetails = (id) => {
        setToggleDetails((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    // Remove a movie by ID
    const handleRemoveMovie = (id) => {
        setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
    };

    // Toggle view between all movies and action genre
    const toggleView = () => {
        setViewActionOnly((prev) => !prev);
    };

    // Filter movies based on the selected view
    const filteredMovies = viewActionOnly
        ? movies.filter((movie) => movie.genre === "Action")
        : movies;

    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <h1>Favorite Movies</h1>
            <button
                onClick={toggleView}
                style={{
                    padding: "10px 20px",
                    marginBottom: "20px",
                    backgroundColor: "#007bff",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}
            >
                {viewActionOnly ? "Show All Movies" : "Show Action Movies"}
            </button>
            <ul style={{ listStyle: "none", padding: 0 }}>
                {filteredMovies.map((movie) => (
                    <li
                        key={movie.id}
                        style={{
                            marginBottom: "15px",
                            padding: "10px",
                            border: "1px solid #ccc",
                            borderRadius: "5px",
                            position: "relative",
                        }}
                    >
                        <span
                            style={{
                                cursor: "pointer",
                                fontWeight: "bold",
                                color: "#007bff",
                                textDecoration: "underline",
                            }}
                            onClick={() => handleToggleDetails(movie.id)}
                        >
                            {movie.title}
                        </span>
                        {toggleDetails[movie.id] && (
                            <p style={{ marginTop: "10px", marginBottom: "5px", color: "#555" }}>
                                {movie.description}
                            </p>
                        )}
                        <button
                            onClick={() => handleRemoveMovie(movie.id)}
                            style={{
                                position: "absolute",
                                right: "10px",
                                top: "10px",
                                padding: "5px 10px",
                                backgroundColor: "#dc3545",
                                color: "white",
                                border: "none",
                                borderRadius: "3px",
                                cursor: "pointer",
                            }}
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MoviesList;
