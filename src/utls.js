
/**
 * 
 * @param {*} district 
 * @param {*} lang 
 */
export function mapDistrict(district, lang) {
  if (lang === "en") {
    return district.map(item => ({ value: item.Name, label: item.Name, meta: item }))
  }
  return district.map(item => ({ value: item.Nepali, label: item.Nepali, meta: item }))
}

/**
 * 
 * @param {*} metroPolitan 
 * @param {*} lang 
 */
export function mapMetropolitan(metroPolitan, lang) {
  return {};
}

/**
 * 
 * @param {*} ruralMunicipalities 
 * @param {*} lang 
 */
export function rural(ruralMunicipalities, lang) {
  return {};
}

export function mapProvinces(provinces, lang) {
  return {}
}

/**
 * 
 * @param {*} subMetropolitan 
 * @param {*} lang 
 */
export function subMetropolitan(subMetropolitan, lang) {
  return {};
}
