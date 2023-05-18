import React, { useContext } from 'react';
import { MovieContext } from '../components/MovieContext';

const Filter = () => {
const { titleFilter, ratingFilter, setTitleFilter, setRatingFilter } =
useContext(MovieContext);

const handleTitleChange = (event) => {
setTitleFilter(event.target.value);
};

const handleRatingChange = (event) => {
setRatingFilter(event.target.value);
};

return (
<div className="filters">
<input
    type="text"
    placeholder="Title"
    value={titleFilter}
    onChange={handleTitleChange}
  />
<input
    type="number"
    placeholder="Minimum Rating"
    value={ratingFilter}
    onChange={handleRatingChange}
  />
</div>
);
};

export default Filter;