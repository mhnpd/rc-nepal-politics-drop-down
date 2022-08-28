import { curry } from 'ramda'
import metropolitanRaw from '../data/metropolitan.json'
import { Language, LimiterType, ProvinceEnum } from '../types'

export interface IMetropolitan {
  Name: string
  Nepali: string
  District: string
  Province: ProvinceEnum
  'Population (2011)': string
  'Area (km)': string
}

export type MetropolitanOption = {
  value: string
  label: string
  meta: IMetropolitan
}

export const metropolitan = (metropolitanRaw as unknown) as IMetropolitan[]
const getMetropolitanName = (metropolitan: IMetropolitan) => metropolitan.Name
const getMetropolitanNepali = (metropolitan: IMetropolitan) =>
  metropolitan.Nepali

export const getMetropolitanOption = (
  metropolitan: IMetropolitan,
  language: Language
): MetropolitanOption => ({
  meta: metropolitan,
  value: metropolitan.Name,
  label:
    language === Language.Nepali
      ? getMetropolitanNepali(metropolitan)
      : getMetropolitanName(metropolitan),
})

const isMetropolitanInDistrict = (
  districts: string[],
  metropolitan: MetropolitanOption
): boolean => {
  return districts.includes(metropolitan.meta.District)
}

const isMetropolitanInProvince = (
  province: string[],
  metropolitan: MetropolitanOption
): boolean => {
  return province.includes(metropolitan.meta.Province)
}

const getMetropolitanInDistrict = (
  metropolitan: IMetropolitan[],
  type: LimiterType,
  values: string[],
  language: Language
): MetropolitanOption[] => {
  const getter =
    type === LimiterType.Province
      ? isMetropolitanInProvince
      : isMetropolitanInDistrict
  return metropolitan
    .map(m => getMetropolitanOption(m, language))
    .filter(metropolitan => getter(values, metropolitan))
}

export const getMetropolitan = curry(getMetropolitanInDistrict)(metropolitan)
export const metropolitanListEnglish = metropolitan.map(getMetropolitanName)
export const metropolitanListNepali = metropolitan.map(getMetropolitanNepali)
