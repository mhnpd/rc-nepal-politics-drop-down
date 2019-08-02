import React, { Component } from 'react'
import Select from 'react-select';
import { mapDistrict } from './utls';
import { district } from './json/district';




export const SelectDistrict = (props) => {
  return (
      <Select options={mapDistrict(district)} />
  )
}



