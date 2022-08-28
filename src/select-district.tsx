import React from 'react'
import Select, { Props, GroupBase } from 'react-select'
import { getDistrictOptions, DistrictOption } from './shared/get-districts'
import { TestIds } from './test-ids'
import { Language, ProvinceEnum } from './types'

export type DistrictProps = Props<
  DistrictOption,
  false,
  GroupBase<DistrictOption>
> & {
  language?: Language
  province?: ProvinceEnum[] 
}

export const SelectDistrict = ({
  language = Language.English,
  province = [...Object.values(ProvinceEnum)],
  ...rest
}: DistrictProps) => {
  return (
    <div data-testid={TestIds.DistrictSelection}>
      <Select
        menuPortalTarget={document.body}
        menuPosition="fixed"
        {...rest}
        options={getDistrictOptions(province, language)}
      />
    </div>
  )
}
