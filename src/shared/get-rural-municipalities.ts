import { curry } from 'ramda'
import ruralMunRaw from '../data/ruralMunicipalities.json'
import { Language, LimiterType } from '../types'

export interface IRuralMunicipality {
  Name: string
  Nepali: string
  District: string
  'Population (2011)': string
  'Area(km2)': string
  Density: string
  Province: string
}

export type RuralMunicipalityOption = {
  value: string
  label: string
  meta: IRuralMunicipality
}

export const rural = (ruralMunRaw as unknown) as IRuralMunicipality[]
const getMunicipalityName = (rm: IRuralMunicipality) => rm.Name
const getMunicipalityNepali = (rm: IRuralMunicipality) => rm.Nepali

export const getRuralMunicipalityOption = (
  rm: IRuralMunicipality,
  language: Language
): RuralMunicipalityOption => ({
  meta: rm,
  value: rm.Name,
  label:
    language === Language.Nepali
      ? getMunicipalityNepali(rm)
      : getMunicipalityName(rm),
})

const isRuralMunicipalityInDistrict = (
  r: RuralMunicipalityOption,
  districts: string[]
) => {
  return districts.includes(r.meta.District)
}

const isRuralMunicipalityInProvince = (
  r: RuralMunicipalityOption,
  province: string[]
) => {
  return province.includes(r.meta.Province)
}

const getRuralMunicipalityInDistrictsRaw = (
  ruralMunicipality: IRuralMunicipality[],
  type: LimiterType,
  values: string[],
  language: Language
) => {
  const getter =
    type === LimiterType.Province
      ? isRuralMunicipalityInProvince
      : isRuralMunicipalityInDistrict
  return ruralMunicipality
    .map(r => getRuralMunicipalityOption(r, language))
    .filter(r => getter(r, values))
}

export const getRuralMunicipalities = curry(getRuralMunicipalityInDistrictsRaw)(
  rural
)

export const RuralMunicipalityListEnglish = rural.map(getMunicipalityName)
export const RuralMunicipalityListNepali = rural.map(getMunicipalityNepali)
