import parse from 'parse-google-place'

export const parseGooglePlace = (place = {}) => parse(place)
