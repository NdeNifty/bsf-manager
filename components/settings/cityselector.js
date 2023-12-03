import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';

const CitySelector = ({ onLocationSelected }) => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    if (value.length >= 3) {
      fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=42c9336b75eb857b70115f879df245d7`)
        .then(response => response.json())
        .then(data => {
          const results = data.map(city => ({
            name: city.name,
            state: city.state || '',
            country: city.country
          }));
          setSuggestions(results);
        })
        .catch(error => {
          console.error('Error fetching city suggestions:', error);
        });
    }
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const getSuggestionValue = suggestion => `${suggestion.name}, ${suggestion.state ? suggestion.state + ', ' : ''}${suggestion.country}`;

  const renderSuggestion = suggestion => (
    <div>
      {`${suggestion.name}, ${suggestion.state ? suggestion.state + ', ' : ''}${suggestion.country}`}
    </div>
  );

  const onSuggestionSelected = (event, { suggestion }) => {
    const locationString = `${suggestion.name},${suggestion.state},${suggestion.country}`;
  onLocationSelected(locationString);
  console.log('Location selected: ', locationString);
  };

  const inputProps = {
    placeholder: "Type a city name",
    value,
    onChange: onChange,
    className: "border border-gray-300 rounded py-2 px-4 block  leading-normal focus:border-blue-500 focus:ring-blue-500"
  };

  return (
    <Autosuggest
    className="border border-gray-300 rounded"
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      onSuggestionSelected={onSuggestionSelected}
      inputProps={inputProps}
    />
  );
};

export default CitySelector;
