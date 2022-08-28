import React from 'react'
import Select, { Props, GroupBase } from 'react-select'
import { districtListEnglish } from './shared/get-districts'
import {
  getRuralMunicipalities,
  RuralMunicipalityOption,
} from './shared/get-rural-municipalities'
import { TestIds } from './test-ids'
import { Language } from './types'

export type SelectRuralMunicipalitiesProps = Props<
  RuralMunicipalityOption,
  false,
  GroupBase<RuralMunicipalityOption>
> & {
  language?: Language
  districts?: string[]
}

export const SelectRuralMunicipalities = ({
  language = Language.English,
  districts = districtListEnglish,
  ...rest
}: SelectRuralMunicipalitiesProps) => {
  return (
    <div data-testid={TestIds.SelectRuralMunicipalities}>
      <Select
        menuPortalTarget={document.body}
        menuPosition="fixed"
        {...rest}
        options={getRuralMunicipalities(districts, language)}
      />
    </div>
  )
}
