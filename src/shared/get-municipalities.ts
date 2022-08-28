import { curry } from 'ramda'
import municipalityRaw from '../data/municipalities.json'
import { Language, ProvinceEnum } from '../types'

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

const municipalities = (municipalityRaw as unknown) as IMunicipality[]
const getMunicipalityName = (mp: IMunicipality) => mp.Name
const getMunicipalityNepali = (mp: IMunicipality) => mp.Nepali

const getMunicipalityOption = (
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

const getMunicipalityInDistricts = (
  districts: string[],
  municipality: MunicipalityOption
): boolean => {
  return districts.includes(municipality.meta.District)
}

const getMetropolitanRaw = (
  municipalities: IMunicipality[],
  districts: string[],
  language: Language
): MunicipalityOption[] => {
  return municipalities
    .map(m => getMunicipalityOption(m, language))
    .filter(metropolitan => getMunicipalityInDistricts(districts, metropolitan))
}

export const getMunicipalities = curry(getMetropolitanRaw)(municipalities)
export const municipalityListEnglish = municipalities.map(getMunicipalityName)
export const municipalityListNepali = municipalities.map(getMunicipalityNepali)

