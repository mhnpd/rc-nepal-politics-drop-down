import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen, fireEvent } from '@testing-library/react'
import {  SelectDistrict } from '../src/'
import { TestIds } from '../src/test-ids'
import { Language } from '../src/types'

describe('District Selection', () => {
  it('should render district selection', () => {
    render(<SelectDistrict />)
    const districtSelect = screen.getByTestId(TestIds.DistrictSelection)
    expect(districtSelect).not.toBeNull()
    districtSelect
      .querySelectorAll('div[class^="indicator"]')
      .forEach(indicator => {
        fireEvent.click(indicator)
        expect(districtSelect).toHaveTextContent('Bhojpur')
      })
  })

  it('Should show the text in Nepali when language is Nepali', () => {
    render(<SelectDistrict 
      language={Language.Nepali}
    />)
    const districtSelect = screen.getByTestId(TestIds.DistrictSelection)
    expect(districtSelect).not.toBeNull()
    districtSelect
      .querySelectorAll('div[class^="indicator"]')
      .forEach(indicator => {
        fireEvent.click(indicator)
        expect(districtSelect).toHaveTextContent('भोजपुर जिल्ला')
      })
  })
})
