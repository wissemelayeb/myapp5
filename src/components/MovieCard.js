import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div  className="movie-card" style={{ width: '250px', margin: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', textAlign: 'center' }}>
    
      <img src={movie.posterURL} alt={movie.title} style={{ width: '100%', maxHeight: '300px', objectFit: 'cover', borderRadius: '5px', marginBottom: '10px' }}/>
      <h3 style={{ fontSize: '18px', marginBottom: '5px' }}>{movie.title}</h3>
      <p style={{ fontSize: '14px', marginBottom: '10px' }}>{movie.description}</p>
      <div className="movie-rating" style={{ backgroundColor: '#f8f8f8', padding: '5px', fontSize: '14px', borderRadius: '3px' }}>{movie.rating}</div>

    </div>
  );
};

export default MovieCard;




