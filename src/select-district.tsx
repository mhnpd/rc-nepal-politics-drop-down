import React from 'react'
import Select, {Props, GroupBase} from 'react-select'
import districtList from './data/districts.json'
import { IDistrict, Language, Province } from './types'

export interface DistrictOption {
  value: string
  label: string
  meta: IDistrict
}

const getDistrictOptions = (
  lang: Language, 
  province: Province | undefined
  ): DistrictOption[] => {
  return ((districtList as unknown) as IDistrict[])
  .filter(d=> province?d.Province === province:true)
  .map(district => {
    return {
      label: lang === Language.np ? district.Nepali : district.Name,
      value: district.Name,
      meta: district,
    }
  })
}

export type SelectProps = Props<DistrictOption, false, GroupBase<DistrictOption>> & {
  lang?: Language,
  /** Limit the district to certain province */
  province?: Province | undefined
}

export const SelectDistrict =({
  lang = Language.en,
  province,
  ...rest
}:SelectProps) => {
  return <Select 
  menuPortalTarget={document.body}
  menuPosition="fixed"
  {...rest} 
  options={getDistrictOptions(lang, province)} />
}

