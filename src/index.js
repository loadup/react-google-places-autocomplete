import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { parseGooglePlace } from './utils'

const INPUT_COMPONENT_ID = 'loadup-react-google-places-autocomplete-input'

class Autocomplete extends Component {
  componentDidMount() {
    const { fields, onPlaceChanged, types } = this.props

    this.autocomplete = new window['google'].maps.places.Autocomplete(
      document.getElementById(INPUT_COMPONENT_ID),
      {
        types,
      },
    )

    this.autocomplete.setFields(fields)

    this.autocomplete.addListener('place_changed', () => {
      const place = this.autocomplete.getPlace()
      onPlaceChanged({ original: place, parsed: parseGooglePlace(place) })
    })
  }

  componentWillUnmount() {
    this.autocomplete.removeListener('place_changed')
  }

  render() {
    const { fields, onPlaceChanged, ...rest } = this.props
    return <input id={INPUT_COMPONENT_ID} type="text" {...rest} />
  }
}

Autocomplete.propTypes = {
  className: PropTypes.string,
  fields: PropTypes.arrayOf(PropTypes.string).isRequired,
  onPlaceChanged: PropTypes.func.isRequired,
  style: PropTypes.object,
  types: PropTypes.arrayOf(PropTypes.string).isRequired,
}

Autocomplete.defaultProps = {
  fields: ['address_components', 'formatted_address', 'place_id'],
  onPlaceChanged: place => {
    console.log(
      'This is a placeholder function for the `onPlaceChanged` prop. You should override this.',
    )
    console.log(place)
  },
  types: ['address']
}

export default Autocomplete
