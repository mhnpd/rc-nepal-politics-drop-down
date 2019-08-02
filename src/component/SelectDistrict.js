import React, { Component } from 'react'
import { DropDownSelect } from './Select';
import { mapDistrict } from '../utls';
import { district } from '../json/district';

export const SelectDistrict = (props) => {
  return (<DropDownSelect {...props} mapper={mapDistrict} data={district} />);
};
