export const parseGooglePlace = (place = {}) => {
  const byType = placeAttrsByType(place.address_components)
  const getter = placeGet(byType)

  return {
    address: [getter('street_number'), getter('route')].join(' ').trim(),
    streetNumber: getter('street_number'),
    streetName: getter('route'),
    city: getter('locality') ||
      getter('sublocality') ||
      getter('sublocality_level_1') ||
      getter('neighborhood') ||
      getter('administrative_area_level_3') ||
      getter('administrative_area_level_2'),
    county: getter('administrative_area_level_2'),
    stateShort: getter('administrative_area_level_1', true),
    stateLong: getter('administrative_area_level_1'),
    countryShort: getter('country', true),
    countryLong: getter('country'),
    zipCode: getter('postal_code')
  }
}

const placeAttrsByType = (addrComponents) => (
  (addrComponents || []).reduce(function (acc, data) {
    data.types.forEach(function (type) {
      acc[type] = data
    })
    return acc
  }, {})
)

const placeGet = byType => (key, short) => {
  if (!(key in byType)) return ''

  return short ? byType[key].short_name : byType[key].long_name
}
