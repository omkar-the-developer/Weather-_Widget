import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import './SearchBox.css';

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    updateInfo(city);
    setCity("");
  };

  return (
    <div className="search-container">
      <h2 className='main-heading'>
        🌍<i>Search the city for the Weather</i>
      </h2>
      <form onSubmit={handleSubmit} className="search-form">
        <div className="city-input">
          <TextField
            id="city"
            label="Enter City"
            variant="outlined"
            value={city}
            onChange={handleChange}
            required
          />
        </div>
        <Button
          variant="contained"
          type="submit"
          className="search-button"
        >
          Search
        </Button>
      </form>
    </div>
  );
}
