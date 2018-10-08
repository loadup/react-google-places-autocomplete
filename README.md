# @loadup/react-google-places-autocomplete

> A configurable wrapper around Google Maps Autocomplete Widget with built in session support.

[![NPM](https://img.shields.io/npm/v/@loadup/react-google-places-autocomplete.svg)](https://www.npmjs.com/package/@loadup/react-google-places-autocomplete) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @loadup/react-google-places-autocomplete
```

## Usage

#### Step 1:

Ensure the Google API Script is loaded in your `index.html`. You must have access to the global `window['google']` object.

```javascript
<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places"></script>
```

#### Step 2: Use the Autocomplete

```jsx
import React, { Component } from 'react'
import Autocomplete from '@loadup/react-google-places-autocomplete'  
 
class Example extends Component {
  render () {
    return (
      <Autocomplete
        fields={['address_components', 'formatted_address', 'place_id']}
        id="example-autocomplete-id"
        onPlaceChanged={({ original, parsed }) => {
          // Do whatever you want
          // original is the Google Maps PlaceResult Object
          // parsed is the parsed version of the address components
        }}
        types={['address']}
      />
    )
  }
}
 
export default Example
```

## License

MIT © [Loadup Technologies](https://github.com/loadup)
