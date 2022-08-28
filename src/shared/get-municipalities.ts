import { curry } from 'ramda'
import municipalityRaw from '../data/municipalities.json'
import { Language, LimiterType, ProvinceEnum } from '../types'

export interface IMunicipality {
  Name: string
  Nepali: string
  District: string
  Province: ProvinceEnum
  'Population (2011)': string
  'Area (km)': string
}

export type MunicipalityOption = {
  value: string
  label: string
  meta: IMunicipality
}

export const municipalities = (municipalityRaw as unknown) as IMunicipality[]
const getMunicipalityName = (mp: IMunicipality) => mp.Name
const getMunicipalityNepali = (mp: IMunicipality) => mp.Nepali

export const getMunicipalityOption = (
  municipality: IMunicipality,
  language: Language
): MunicipalityOption => ({
  meta: municipality,
  value: municipality.Name,
  label:
    language === Language.Nepali
      ? getMunicipalityNepali(municipality)
      : getMunicipalityName(municipality)
})

const isMunicipalityInDistrict = (
  districts: string[],
  municipality: MunicipalityOption
): boolean => {
  return districts.includes(municipality.meta.District)
}

const isMunicipalityInProvince = (
  province: string[],
  municipality: MunicipalityOption
): boolean => {
  return province.includes(municipality.meta.Province)
}

const getMetropolitanRaw = (
  municipalities: IMunicipality[],
  limiterType: LimiterType,
  values: ProvinceEnum[] | string[],
  language: Language
): MunicipalityOption[] => {
  const getter = limiterType === LimiterType.Province
    ? isMunicipalityInProvince
    : isMunicipalityInDistrict
  return municipalities
    .map(m => getMunicipalityOption(m, language))
    .filter(metropolitan => getter(values, metropolitan))
}

export const getMunicipalities = curry(getMetropolitanRaw)(municipalities)
export const municipalityListEnglish = municipalities.map(getMunicipalityName)
export const municipalityListNepali = municipalities.map(getMunicipalityNepali)

