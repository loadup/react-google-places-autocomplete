import React from 'react'
import Autocomplete from '@loadup/react-google-places-autocomplete' // Our library

const App = () => (
  <Autocomplete
    onPlaceChanged={console.log}
    fields={['address_components', 'formatted_address', 'place_id']}
    style={{
      fontSize: '1rem',
      marginLeft: 50,
      marginTop: 50,
      padding: 10,
      width: 300,
    }}
    types={['address']}
    placeholder="Pick a place. Any place."
  />
)

export default App
