import provinceRaw from '../data/provinces.json'
import { ProvinceEnum } from '../types'

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

const getProvinceOption = (province: IProvince): ProvinceOption => ({
  meta: province,
  value: province.Provinces,
  label: province.Nepali,
})

export const provinceListEnglish = Province.map(getProvinceName)
export const provinceListNepali = Province.map(getProvinceNepali)
export const provinceOptions = Province.map(getProvinceOption)
