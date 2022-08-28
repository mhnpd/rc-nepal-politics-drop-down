import { curry } from 'ramda'
import provinceRaw from '../data/provinces.json'
import { Language, ProvinceEnum } from '../types'

export interface IProvince {
  Provinces: string
  Nepali: string
  Capital: string
  'Area (km2)': string
  'Population (2011)': string
}

export type ProvinceOption = {
  value: string
  label: string
  meta: IProvince
}

const Province = (provinceRaw as unknown) as IProvince[]

const getProvinceName = (province: IProvince): ProvinceEnum =>
  province.Provinces as ProvinceEnum

const getProvinceNepali = (province: IProvince) => province.Nepali

const getProvinceOption = (
  province: IProvince,
  language: Language
): ProvinceOption => ({
  meta: province,
  value: province.Provinces,
  label:
    language === Language.Nepali
      ? getProvinceNepali(province)
      : getProvinceName(province),
})

const getProvinceRaw = (
  province:IProvince[], 
  language: Language) => {
  return province.map(province => getProvinceOption(province, language))
}

export const provinceListEnglish = Province.map(getProvinceName)
export const provinceListNepali = Province.map(getProvinceNepali)
export const getProvince = curry(getProvinceRaw)(Province)