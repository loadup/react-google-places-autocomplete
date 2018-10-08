import { parseGooglePlace } from './utils'

const HAPPY_PATH_DATA = {
  address_components: [
    { long_name: '235', short_name: '235', types: ['street_number'] },
    {
      long_name: 'Maple Hill Road',
      short_name: 'Maple Hill Rd',
      types: ['route'],
    },
    {
      long_name: 'Glencoe',
      short_name: 'Glencoe',
      types: ['locality', 'political'],
    },
    {
      long_name: 'New Trier Township',
      short_name: 'New Trier Township',
      types: ['administrative_area_level_3', 'political'],
    },
    {
      long_name: 'Cook County',
      short_name: 'Cook County',
      types: ['administrative_area_level_2', 'political'],
    },
    {
      long_name: 'Illinois',
      short_name: 'IL',
      types: ['administrative_area_level_1', 'political'],
    },
    {
      long_name: 'United States',
      short_name: 'US',
      types: ['country', 'political'],
    },
    { long_name: '60022', short_name: '60022', types: ['postal_code'] },
    { long_name: '1257', short_name: '1257', types: ['postal_code_suffix'] },
  ],
  formatted_address: '235 Maple Hill Rd, Glencoe, IL 60022, USA',
  place_id:
    'EikyMzUgTWFwbGUgSGlsbCBSZCwgR2xlbmNvZSwgSUwgNjAwMjIsIFVTQSIxEi8KFAoSCQvbiN7zww-IEXGP43ighOOQEOsBKhQKEgkF3JgE88MPiBGK9IteeYsmoA',
  html_attributions: [],
}

const HAPPY_PATH_RESULT = {
  address: '235 Maple Hill Road',
  city: 'Glencoe',
  countryLong: 'United States',
  countryShort: 'US',
  county: 'Cook County',
  stateLong: 'Illinois',
  stateShort: 'IL',
  streetName: 'Maple Hill Road',
  streetNumber: '235',
  zipCode: '60022',
}

const EMPTY_PATH_RESULT = {
  address: ' ', // Note address always gets parsed as an empty string
  city: '',
  countryLong: '',
  countryShort: '',
  county: '',
  stateLong: '',
  stateShort: '',
  streetName: '',
  streetNumber: '',
  zipCode: '',
}

describe('Package Tests', () => {
  describe('utils', () => {
    describe('parseGooglePlace', () => {
      it('should parse address components on the happy path', () => {
        expect(parseGooglePlace(HAPPY_PATH_DATA)).toEqual(HAPPY_PATH_RESULT)
      })
      it('should parse an empty object', () => {
        expect(parseGooglePlace()).toEqual(EMPTY_PATH_RESULT)
      })
    })
  })
})
