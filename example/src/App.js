import React, { Fragment } from 'react'
import { Autocomplete, SearchBox } from '@loadup/react-google-places-autocomplete' // Our library

const App = () => (
  <Fragment>
    <Autocomplete
      fields={['address_components', 'formatted_address', 'place_id']}
      id='example-autocomplete-input'
      onPlaceChanged={console.log}
      placeholder='Autocomplete Picker for Addresses...'
      style={{
        fontSize: '1rem',
        marginLeft: 50,
        marginTop: 50,
        padding: 10,
        width: 300
      }}
      types={['address']}
    />
    <SearchBox
      id='example-searchbox-input'
      onPlaceChanged={console.log}
      placeholder='SearchBox for Suggestions...'
      style={{
        fontSize: '1rem',
        marginLeft: 50,
        marginTop: 50,
        padding: 10,
        width: 300
      }}
    />
  </Fragment>
)

export default App
