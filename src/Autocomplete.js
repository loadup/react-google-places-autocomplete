import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { intervalSetAutocomplete, parseGooglePlace } from './utils'

class Autocomplete extends Component {
  componentDidMount () {
    const { fields, id, onPlaceChanged, types } = this.props

    const elem = document.getElementById(id)
    this.autocomplete = new window['google'].maps.places.Autocomplete(
      elem,
      {
        types,
        componentRestrictions: {
          country: 'us'
        }
      }
    )

    this.autocomplete.setFields(fields)

    this.autocomplete.addListener('place_changed', () => {
      const place = this.autocomplete.getPlace()
      onPlaceChanged({ original: place, parsed: parseGooglePlace(place) })
    })

    // Yeah, this sucks. There is no way to know when Google Autcomplete
    // finishes loading. We also need to keep resetting the autocomplete
    // value since they keep setting it to "off". We need it to be something
    // else to actually turn autocomplete offa
    this.autocompleteInterval = intervalSetAutocomplete(elem)
  }

  componentWillUnmount () {
    clearInterval(this.autocompleteInterval)
  }

  render () {
    const { fields, onPlaceChanged, ...rest } = this.props
    const inputAutoComplete = window.chrome ? 'nope' : 'off'
    return <input type='text' autoComplete={inputAutoComplete} {...rest} />
  }
}

Autocomplete.propTypes = {
  className: PropTypes.string,
  fields: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.string.isRequired,
  onPlaceChanged: PropTypes.func.isRequired,
  style: PropTypes.object,
  types: PropTypes.arrayOf(PropTypes.string).isRequired
}

Autocomplete.defaultProps = {
  fields: ['address_components', 'formatted_address', 'place_id'],
  onPlaceChanged: place => {
    console.log(
      'This is a placeholder function for the `onPlaceChanged` prop. You should override this.'
    )
    console.log(place)
  },
  types: ['address']
}

export default Autocomplete
