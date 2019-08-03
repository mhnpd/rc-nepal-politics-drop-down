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
export function mapDistrict(district, lang) {
  if (lang === "en") {
    return district.map(item => ({ value: item.Name, label: item.Name, meta: item }))
  }
  return district.map(item => ({ value: item.Nepali, label: item.Nepali, meta: item }))
}

/**
 * 
 * @param {Object} metropolitan Json import of metropolitan of nepal.  
 * @param {String} lang stings that contains either "en" or npl.
 */
export function mapMetropolitan(metropolitan, lang) {
  if (lang === "en") {
    return metropolitan.map(item => ({ value: item.Name, label: item.Name, meta: item }))
  }
  return metropolitan.map(item => ({ value: item.Nepali, label: item.Nepali, meta: item }))
}

/**
 * 
 * @param {Object} Municipalities Json import of metropolitan of nepal.  
 * @param {String} lang stings that contains either "en" or npl.
 */
 export function mapMunicipalities(municipalities, lang) {
  if (lang === "en") {
    return municipalities.map(item => ({ value: item.Name, label: item.Name, meta: item }))
  }
  return municipalities.map(item => ({ value: item.Nepali, label: item.Nepali, meta: item }))
}

/**
 * 
 * @param {*} provinces 
 * @param {String} lang stings that contains either "en" or npl.
 */
 export function mapProvinces(provinces, lang) {
  if (lang === "en") {
    return provinces.map(item => ({ value: item.Provinces, label: item.Provinces, meta: item }))
  }
  return provinces.map(item => ({ value: item.Nepali, label: item.Nepali, meta: item }))
}

/**
 * 
 * @param {*} ruralMunicipalities 
 * @param {String} lang stings that contains either "en" or npl.
 */
export function mapRuralMunicipalities(ruralMunicipalities, lang) {
  if (lang === "en") {
    return ruralMunicipalities.map(item => ({ value: item.Name, label: item.Name, meta: item }))
  }
  return ruralMunicipalities.map(item => ({ value: item.Nepali, label: item.Nepali, meta: item }))
}


/**
 * 
 * @param {*} subMetropolitan 
 * @param {String} lang stings that contains either "en" or npl.
 */
export function mapSubMetropolitan(subMetropolitan, lang) {
  if (lang === "en") {
    return subMetropolitan.map(item => ({ value: item.Name, label: item.Name, meta: item }))
  }
  return subMetropolitan.map(item => ({ value: item.Nepali, label: item.Nepali, meta: item }))
}
