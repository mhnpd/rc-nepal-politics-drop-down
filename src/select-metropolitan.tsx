import React from 'react'
import Select, { Props, GroupBase } from 'react-select'
import { districtListEnglish } from './shared/get-districts'
import { getMetropolitan, MetropolitanOption } from './shared/get-metropolitan'
import { TestIds } from './test-ids'
import { Language } from './types'

export type SelectMetropolitanProps = Props<
  MetropolitanOption,
  false,
  GroupBase<MetropolitanOption>
> & {
  language?: Language
  districts?: string[] 
}

export const SelectMetropolitan = ({
  language = Language.English,
  districts = districtListEnglish,
  ...rest
}: SelectMetropolitanProps) => {
  return (
    <div data-testid={TestIds.MetropolitanSelection}>
      <Select
        menuPortalTarget={document.body}
        menuPosition="fixed"
        {...rest}
        options={getMetropolitan(districts, language)}
      />
    </div>
  )
}
