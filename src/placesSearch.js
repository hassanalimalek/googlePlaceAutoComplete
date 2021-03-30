import React, {useRef} from 'react';
import {useEffect} from 'react';

function PlacesSearch(props) {
  let autoCompleteInput = useRef();
  let autoComplete = null;

  useEffect(() => {
    // eslint-disable-next-line
    autoComplete = new window.google.maps.places.Autocomplete(
      autoCompleteInput.current,
      {types: ['establishment', 'geocode']}
    );
    autoComplete.addListener('place_changed', handlePlaceChanged);
  }, []);

  let handlePlaceChanged = () => {
    // const place = autoComplete.getPlace();
  };

  return (
    <div className="placesSearchWrapper">
      <input
        className="searchInput"
        ref={autoCompleteInput}
        id="autoComplete"
        placeholder="Search Places"
        type="text"
      ></input>
    </div>
  );
}

export default PlacesSearch;
