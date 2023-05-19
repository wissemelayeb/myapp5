import React, { useState } from 'react';
import MovieCard from './MovieCard';

// MovieList component
const MovieList = () => {
  // State for movies array
  const [movies, setMovies] = useState([
    // Initial movies data
    {
      title: 'The Shawshank Redemption',
      description:
        'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg',
      rating: 9.3,
    },
    {
      title: 'The Godfather',
      description:
        "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
      rating: 9.2,
    },
  ]);

  // State for title filter
  const [titleFilter, setTitleFilter] = useState('');
  // State for rating filter
  const [ratingFilter, setRatingFilter] = useState(0);

  // Event handler for title filter change
  const handleTitleFilterChange = (event) => {
    setTitleFilter(event.target.value);
  };

  // Event handler for rating filter change
  const handleRatingFilterChange = (event) => {
    setRatingFilter(event.target.value);
  };

  // Event handler for adding a new movie
  const handleAddMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  // Filter movies based on title and rating
  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= ratingFilter
  );

  return (
    <div>
      {/* Filter inputs */}
      <div className="filters" style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Title"
          value={titleFilter}
          onChange={handleTitleFilterChange}
        />
        <input
          type="number"
          placeholder="Minimum Rating"
          value={ratingFilter}
          onChange={handleRatingFilterChange}
        />
      </div>
      {/* Movie list */}
      <div className="movie-list">
        {/* Render MovieCard component for each filtered movie */}
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </div>
      {/* Add movie button */}
      <button onClick={() => handleAddMovie({ title: 'New Movie', rating: 0 })}>
        Add Movie
      </button>
    </div>
  );
};

export default MovieList;
