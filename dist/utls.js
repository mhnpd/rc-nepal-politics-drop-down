(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.utls = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.mapDistrict = mapDistrict;
  exports.mapMetropolitan = mapMetropolitan;
  exports.mapMunicipalities = mapMunicipalities;
  exports.mapProvinces = mapProvinces;
  exports.mapRuralMunicipalities = mapRuralMunicipalities;
  exports.mapSubMetropolitan = mapSubMetropolitan;
  /**
   * @author @mhnpd [Mohan Upadhyay]
   * @email mhnpd@outlook.com
   * @create date 2019-08-03 13:08:49
   * @modify date 2019-08-03 13:08:49
   * @desc [description]
   */

  /**
   * 
   * @param {Object} district json import of district in nepal.
   * @param {String} lang stings that contains either "en" or npl.
   */
  function mapDistrict(district, lang) {
    if (lang === "en") {
      return district.map(function (item) {
        return { value: item.Name, label: item.Name, meta: item };
      });
    }
    return district.map(function (item) {
      return { value: item.Nepali, label: item.Nepali, meta: item };
    });
  }

  /**
   * 
   * @param {Object} metropolitan Json import of metropolitan of nepal.  
   * @param {String} lang stings that contains either "en" or npl.
   */
  function mapMetropolitan(metropolitan, lang) {
    if (lang === "en") {
      return metropolitan.map(function (item) {
        return { value: item.Name, label: item.Name, meta: item };
      });
    }
    return metropolitan.map(function (item) {
      return { value: item.Nepali, label: item.Nepali, meta: item };
    });
  }

  /**
   * 
   * @param {Object} Municipalities Json import of metropolitan of nepal.  
   * @param {String} lang stings that contains either "en" or npl.
   */
  function mapMunicipalities(municipalities, lang) {
    if (lang === "en") {
      return municipalities.map(function (item) {
        return { value: item.Name, label: item.Name, meta: item };
      });
    }
    return municipalities.map(function (item) {
      return { value: item.Nepali, label: item.Nepali, meta: item };
    });
  }

  /**
   * 
   * @param {*} provinces 
   * @param {String} lang stings that contains either "en" or npl.
   */
  function mapProvinces(provinces, lang) {
    if (lang === "en") {
      return provinces.map(function (item) {
        return { value: item.Provinces, label: item.Provinces, meta: item };
      });
    }
    return provinces.map(function (item) {
      return { value: item.Nepali, label: item.Nepali, meta: item };
    });
  }

  /**
   * 
   * @param {*} ruralMunicipalities 
   * @param {String} lang stings that contains either "en" or npl.
   */
  function mapRuralMunicipalities(ruralMunicipalities, lang) {
    if (lang === "en") {
      return ruralMunicipalities.map(function (item) {
        return { value: item.Name, label: item.Name, meta: item };
      });
    }
    return ruralMunicipalities.map(function (item) {
      return { value: item.Nepali, label: item.Nepali, meta: item };
    });
  }

  /**
   * 
   * @param {*} subMetropolitan 
   * @param {String} lang stings that contains either "en" or npl.
   */
  function mapSubMetropolitan(subMetropolitan, lang) {
    if (lang === "en") {
      return subMetropolitan.map(function (item) {
        return { value: item.Name, label: item.Name, meta: item };
      });
    }
    return subMetropolitan.map(function (item) {
      return { value: item.Nepali, label: item.Nepali, meta: item };
    });
  }
});