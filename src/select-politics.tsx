import React from "react";
import { SelectDump } from "./select-dumb"
import { getDistrictOptions, districtListEnglish } from "./shared/get-districts"
import { getLocalBodies } from "./shared/get-local-bodies"
import { getMetropolitan } from "./shared/get-metropolitan"
import { getMunicipalities } from "./shared/get-municipalities"
import { getProvince } from "./shared/get-province"
import { getRuralMunicipalities } from "./shared/get-rural-municipalities"
import { getSubMetropolitan } from "./shared/get-sub-metropolitan"
import { TestIds } from "./test-ids"
import { Language, Limiter, LimiterType, ProvinceEnum } from "./types"

export interface SelectPoliticsProps {
  language: Language,
  limiter: Limiter
}

export const SelectDistrict = (props:SelectPoliticsProps) => (
  <SelectDump
    {...props}
    testId={TestIds.SelectDistrict}
    options = {getDistrictOptions(
      props.limiter.values as ProvinceEnum[] || [...Object.values(ProvinceEnum)],
      props.language || Language.English
      )}
  />
)

export  const SelectMunicipality = (props:SelectPoliticsProps) => (
  <SelectDump
    {...props}
    testId={TestIds.SelectMunicipality}
    options = {getMunicipalities(
      props.limiter.type || LimiterType.District,
      props.limiter.values || districtListEnglish,
      props.language || Language.English
      )}
  />
)

export const SelectRuralMunicipalities = (props:SelectPoliticsProps) => (
  <SelectDump
    {...props}
    testId={TestIds.SelectRuralMunicipalities}
    options = {getRuralMunicipalities(
      props.limiter.type || LimiterType.District,
      props.limiter.values || districtListEnglish,
      props.language || Language.English
      )}
  />
)

export const SelectMetropolitan = (props:SelectPoliticsProps) => (
  <SelectDump
    {...props}
    testId={TestIds.SelectMetropolitan}
    options = {getMetropolitan(
      props.limiter.type || LimiterType.District,
      props.limiter.values || districtListEnglish,
      props.language || Language.English
      )}
  />
)

export const SelectSubMetropolitan = (props:SelectPoliticsProps) => (
  <SelectDump
    {...props}
    testId={TestIds.SelectSubMetropolitan}
    options = {getSubMetropolitan(
      props.limiter.type || LimiterType.District,
      props.limiter.values || districtListEnglish,
      props.language || Language.English
      )}
  />
)

export const SelectLocalBodies = (props:SelectPoliticsProps) => (
  <SelectDump
    {...props}
    testId={TestIds.SelectLocalBodies}
    options = {getLocalBodies(
      props.limiter.type || LimiterType.District,
      props.limiter.values || districtListEnglish,
      props.language || Language.English
    )}
  />
)

export const SelectProvince = (props:SelectPoliticsProps) => (
  <SelectDump
    {...props}
    testId={TestIds.SelectProvince}
    options = {getProvince(props.language || Language.English)}
  />
)