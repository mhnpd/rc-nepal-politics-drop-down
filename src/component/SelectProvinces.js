import React, { Component } from 'react'
import { DropDownSelect } from './Select';
import { mapProvinces } from '../utls';
import { provinces } from '../json/provinces';

export const SelectProvinces = (props) => {
  return (<DropDownSelect {...props} mapper={mapProvinces} data={provinces} />);
};