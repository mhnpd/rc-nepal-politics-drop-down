import { curry } from 'ramda'
import districtRaw from '../data/districts.json'
import { ProvinceEnum, LocalBodies, Language } from '../types'
import { provinceListEnglish } from './get-province'

export interface DistrictOption {
  value: string
  label: string
  meta: IDistrict
}

export interface IDistrict {
  Name: string
  Nepali: string
  Headquarters: string
  'Population (2011)': string
  'Area(km2)': string
  Province: ProvinceEnum
  LocalBodiesType: LocalBodies[]
}

const districts = (districtRaw as unknown) as IDistrict[]
const getDistrictName = (district: IDistrict) => district.Name
const getDistrictNepali = (district: IDistrict) => district.Nepali

const getDistrictOption = (
  district: IDistrict,
  language: Language
): DistrictOption => ({
  meta: district,
  value: getDistrictName(district),
  label:
    language === Language.English
      ? getDistrictName(district)
      : getDistrictNepali(district),
})

const isDistrictInProvince = (
  district: DistrictOption,
  province: ProvinceEnum[]
) => {
  return province.includes(district.meta.Province)
}

const districtFromProvinces = (
  districts: IDistrict[],
  province: ProvinceEnum[],
  language: Language
): DistrictOption[] => {
  return districts
    .map(d => getDistrictOption(d, language))
    .filter(district => isDistrictInProvince(district, province))
}

export const getDistrictOptions = curry(districtFromProvinces)(districts)

export const districtListEnglish = districts.map(getDistrictName)
export const districtListNepali = districts.map(getDistrictNepali)
