import { curry } from 'ramda'
import subMetroRaw from '../data/subMetropolitan.json'
import { Language } from '../types'

export interface ISubMetropolitan {
  Name: string
  Nepali: string
  District: string
  Province: string
  'Population (2011)': string
  Area: string
}

export type SubMetroOption = {
  value: string
  label: string
  meta: ISubMetropolitan
}

const subMetros = (subMetroRaw as unknown) as ISubMetropolitan[]
const getSubMetroName = (sm: ISubMetropolitan) => sm.Name
const getSubMetroNepali = (sm: ISubMetropolitan) => sm.Nepali

const getSubMetroOption = (
  subMetro: ISubMetropolitan,
  language: Language
): SubMetroOption => ({
  meta: subMetro,
  value: getSubMetroName(subMetro),
  label:
    Language.Nepali === language
      ? getSubMetroNepali(subMetro)
      : getSubMetroName(subMetro),
})

const isSubMetroInDistrict = (
  subMetro: SubMetroOption,
  districts: string[]
) => districts.includes(subMetro.meta.District)

const getSubMetroInDistrictsRaw = (
  subMetropolitan: ISubMetropolitan[],
  districts: string[],
  language: Language
) => {
  return subMetropolitan
    .map(sm => getSubMetroOption(sm, language))
    .filter(sm => isSubMetroInDistrict(sm, districts))
}

export const getSubMetropolitan = curry(getSubMetroInDistrictsRaw)(subMetros)
export const subMetrosEnglish = subMetros.map(getSubMetroName)
export const subMetrosNepali = subMetros.map(getSubMetroNepali)
