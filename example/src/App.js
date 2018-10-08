import React from 'react'
import Autocomplete from '@loadup/react-google-places-autocomplete' // Our library

const App = () => (
  <Autocomplete
    fields={['address_components', 'formatted_address', 'place_id']}
    id="example-autocomplete-input"
    onPlaceChanged={console.log}
    placeholder="Pick a place. Any place."
    style={{
      fontSize: '1rem',
      marginLeft: 50,
      marginTop: 50,
      padding: 10,
      width: 300,
    }}
    types={['address']}
  />
)

export default App
