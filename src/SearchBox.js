import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { parseGooglePlace } from './utils'

class SearchBox extends Component {
  componentDidMount () {
    const { id, onPlaceChanged } = this.props

    this.searchbox = new window['google'].maps.places.SearchBox(
      document.getElementById(id),
      {}
    )

    this.searchbox.addListener('places_changed', () => {
      const places = this.searchbox.getPlaces()
      onPlaceChanged({ original: places, parsed: places.map(parseGooglePlace) })
    })
  }

  render () {
    const { fields, onPlaceChanged, ...rest } = this.props
    return <input type='text' {...rest} />
  }
}

SearchBox.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  onPlaceChanged: PropTypes.func.isRequired,
  style: PropTypes.object
}

SearchBox.defaultProps = {
  onPlaceChanged: place => {
    console.log(
      'This is a placeholder function for the `onPlaceChanged` prop. You should override this.'
    )
    console.log(place)
  }
}

export default SearchBox
