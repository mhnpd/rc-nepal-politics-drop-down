import { curry } from 'ramda'
import ruralMunRaw from '../data/ruralMunicipalities.json'
import { Language } from '../types'

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

const rural = (ruralMunRaw as unknown) as IRuralMunicipality[]
const getMunicipalityName = (rm: IRuralMunicipality) => rm.Name
const getMunicipalityNepali = (rm: IRuralMunicipality) => rm.Nepali

const getRuralMunicipalityOption = (
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

const getRuralMunicipalityInDistricts = (
  r: RuralMunicipalityOption,
  districts: string[]
) => {
  return districts.includes(r.meta.District)
}

const getRuralMunicipalityInDistrictsRaw = (
  ruralMunicipality: IRuralMunicipality[],
  districts: string[],
  language: Language
) => {
  ruralMunicipality
  .map(r=>getRuralMunicipalityOption(r, language))
  .filter(r=>getRuralMunicipalityInDistricts(r, districts))
}

export const getRuralMunicipalities = curry(getRuralMunicipalityInDistrictsRaw)(rural)

export const RuralMunicipalityListEnglish = rural.map(getMunicipalityName)
export const RuralMunicipalityListNepali = rural.map(getMunicipalityNepali)
