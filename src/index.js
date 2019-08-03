import React from 'react'
import PropTypes from 'prop-types';
import Select from 'react-select';

import district from "./json/districts.json";
import metropolitan from "./json/metropolitan.json";
import municipalities from "./json/municipalities.json";
import provinces from "./json/provinces.json";
import ruralMunicipalities from "./json/ruralMunicipalities.json";
import subMetropolitan from "./json/subMetropolitan.json";
import { mapDistrict, mapMetropolitan, mapMunicipalities, mapProvinces, mapRuralMunicipalities, mapSubMetropolitan } from './utls.js';




/** DropDownSelect */
const DropDownSelect = ({ mapper, data, searchable, error, ...rest }) => {
  return (
    <React.Fragment>
      <Select {...rest} options={mapper(data, rest.lang)} />
      {error && <span>{error}</span>}
    </React.Fragment>
  )
}

DropDownSelect.propTypes = {
  mapper: PropTypes.func.isRequired,
  data: PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    meta: PropTypes.any.isRequired
  }),
  lang: PropTypes.oneOf["en", "npl"],
  searchable: PropTypes.bool,
  "aria-label": PropTypes.string,
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  hideSelectedOptions: PropTypes.bool,
  id: PropTypes.id,
  isMulti: PropTypes.bool,
  isSearchable: PropTypes.bool,
  minMenuHeight: PropTypes.number,
  maxMenuHeight: PropTypes.number,
  menuShouldBlockScroll: PropTypes.bool,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onInputChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  onMenuOpen: PropTypes.func,
  onMenuClose: PropTypes.func,
  placeholder: PropTypes.string

}

DropDownSelect.defaultProps = {
  searchable: false,
  isClearable: false,
  isDisabled: false,
  isLoading: false,
  "aria-label": "",
  lang: "npl"
}

/** District */
export const SelectDistrict = (props) => {
  return (<DropDownSelect {...props} mapper={mapDistrict} data={district} />);
};

/**Metropolitan */
export const SelectMetropolitan = (props) => {
  return (<DropDownSelect {...props} mapper={mapMetropolitan} data={metropolitan} />);
}


/** Municipality */
export const SelectMunicipality = (props) => {
  return (<DropDownSelect {...props} mapper={mapMunicipalities} data={municipalities} />);
}
/**Provinces */
export const SelectProvinces = (props) => {
  return (<DropDownSelect {...props} mapper={mapProvinces} data={provinces} />);
};


/** Rural Metropolitan */
export const SelectRuralMetropolitan = (props) => {
  return (<DropDownSelect {...props} mapper={mapRuralMunicipalities} data={ruralMunicipalities} />);
};

/** Sub Metropolitan  */
export const SelectSubMetropolitan = (props) => {
  return (<DropDownSelect {...props} mapper={mapSubMetropolitan} data={subMetropolitan} />);
};





