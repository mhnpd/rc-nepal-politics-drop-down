import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select';


export const DropDownSelect = ({ mapper, data, searchable,error, ...rest }) => {
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
  lang:PropTypes.oneOf["en", "npl"],
  searchable: PropTypes.bool,
  "aria-label": PropTypes.string,
  autoFocus:PropTypes.bool,
  className:PropTypes.string,
  hideSelectedOptions:PropTypes.bool,
  id:PropTypes.id,
  isMulti:PropTypes.bool,
  isSearchable:PropTypes.bool,
  minMenuHeight:PropTypes.number,
  maxMenuHeight:PropTypes.number,
  menuShouldBlockScroll:PropTypes.bool,
  onBlur:PropTypes.func,
  onChange:PropTypes.func,
  onFocus:PropTypes.func,
  onInputChange:PropTypes.func,
  onKeyDown:PropTypes.func,
  onMenuOpen:PropTypes.func,
  onMenuClose:PropTypes.func,
  placeholder:PropTypes.string

}

DropDownSelect.defaultProps = {
  searchable: false,
  isClearable: false,
  isDisabled:false,
  isLoading:false,
  "aria-label": "",
  lang:"npl"
}

