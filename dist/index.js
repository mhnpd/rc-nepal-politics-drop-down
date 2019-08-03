(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', 'react-select', './json/districts.json', './json/metropolitan.json', './json/municipalities.json', './json/provinces.json', './json/ruralMunicipalities.json', './json/subMetropolitan.json', './utls.js'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('react-select'), require('./json/districts.json'), require('./json/metropolitan.json'), require('./json/municipalities.json'), require('./json/provinces.json'), require('./json/ruralMunicipalities.json'), require('./json/subMetropolitan.json'), require('./utls.js'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.reactSelect, global.districts, global.metropolitan, global.municipalities, global.provinces, global.ruralMunicipalities, global.subMetropolitan, global.utls);
    global.index = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _reactSelect, _districts, _metropolitan, _municipalities, _provinces, _ruralMunicipalities, _subMetropolitan, _utls) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.SelectSubMetropolitan = exports.SelectRuralMetropolitan = exports.SelectProvinces = exports.SelectMunicipality = exports.SelectMetropolitan = exports.SelectDistrict = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _reactSelect2 = _interopRequireDefault(_reactSelect);

  var _districts2 = _interopRequireDefault(_districts);

  var _metropolitan2 = _interopRequireDefault(_metropolitan);

  var _municipalities2 = _interopRequireDefault(_municipalities);

  var _provinces2 = _interopRequireDefault(_provinces);

  var _ruralMunicipalities2 = _interopRequireDefault(_ruralMunicipalities);

  var _subMetropolitan2 = _interopRequireDefault(_subMetropolitan);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  function _objectWithoutProperties(obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  }

  /** DropDownSelect */
  var DropDownSelect = function DropDownSelect(_ref) {
    var mapper = _ref.mapper,
        data = _ref.data,
        searchable = _ref.searchable,
        error = _ref.error,
        rest = _objectWithoutProperties(_ref, ['mapper', 'data', 'searchable', 'error']);

    return _react2.default.createElement(
      _react2.default.Fragment,
      null,
      _react2.default.createElement(_reactSelect2.default, _extends({}, rest, { options: mapper(data, rest.lang) })),
      error && _react2.default.createElement(
        'span',
        null,
        error
      )
    );
  };

  DropDownSelect.propTypes = {
    mapper: _propTypes2.default.func.isRequired,
    data: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      value: _propTypes2.default.string,
      label: _propTypes2.default.string,
      meta: _propTypes2.default.any
    })),
    lang: _propTypes2.default.string,
    searchable: _propTypes2.default.bool,
    "aria-label": _propTypes2.default.string,
    autoFocus: _propTypes2.default.bool,
    className: _propTypes2.default.string,
    hideSelectedOptions: _propTypes2.default.bool,
    id: _propTypes2.default.string,
    isMulti: _propTypes2.default.bool,
    isSearchable: _propTypes2.default.bool,
    minMenuHeight: _propTypes2.default.number,
    maxMenuHeight: _propTypes2.default.number,
    menuShouldBlockScroll: _propTypes2.default.bool,
    onBlur: _propTypes2.default.func,
    onChange: _propTypes2.default.func,
    onFocus: _propTypes2.default.func,
    onInputChange: _propTypes2.default.func,
    onKeyDown: _propTypes2.default.func,
    onMenuOpen: _propTypes2.default.func,
    onMenuClose: _propTypes2.default.func,
    placeholder: _propTypes2.default.string

  };

  DropDownSelect.defaultProps = {
    searchable: false,
    isClearable: false,
    isDisabled: false,
    isLoading: false,
    "aria-label": "",
    lang: "npl"

    /** District */
  };var SelectDistrict = exports.SelectDistrict = function SelectDistrict(props) {
    return _react2.default.createElement(DropDownSelect, _extends({}, props, { mapper: _utls.mapDistrict, data: _districts2.default }));
  };

  /**Metropolitan */
  var SelectMetropolitan = exports.SelectMetropolitan = function SelectMetropolitan(props) {
    return _react2.default.createElement(DropDownSelect, _extends({}, props, { mapper: _utls.mapMetropolitan, data: _metropolitan2.default }));
  };

  /** Municipality */
  var SelectMunicipality = exports.SelectMunicipality = function SelectMunicipality(props) {
    return _react2.default.createElement(DropDownSelect, _extends({}, props, { mapper: _utls.mapMunicipalities, data: _municipalities2.default }));
  };
  /**Provinces */
  var SelectProvinces = exports.SelectProvinces = function SelectProvinces(props) {
    return _react2.default.createElement(DropDownSelect, _extends({}, props, { mapper: _utls.mapProvinces, data: _provinces2.default }));
  };

  /** Rural Metropolitan */
  var SelectRuralMetropolitan = exports.SelectRuralMetropolitan = function SelectRuralMetropolitan(props) {
    return _react2.default.createElement(DropDownSelect, _extends({}, props, { mapper: _utls.mapRuralMunicipalities, data: _ruralMunicipalities2.default }));
  };

  /** Sub Metropolitan  */
  var SelectSubMetropolitan = exports.SelectSubMetropolitan = function SelectSubMetropolitan(props) {
    return _react2.default.createElement(DropDownSelect, _extends({}, props, { mapper: _utls.mapSubMetropolitan, data: _subMetropolitan2.default }));
  };
});