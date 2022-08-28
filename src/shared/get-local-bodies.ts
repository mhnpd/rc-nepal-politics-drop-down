import { curry } from 'ramda'
import { Language, LimiterType } from '../types'
import { getMetropolitanOption, IMetropolitan, metropolitan } from './get-metropolitan'
import { getMunicipalityOption, municipalities } from './get-municipalities'
import { getRuralMunicipalityOption, rural } from './get-rural-municipalities'
import { getSubMetroOption, subMetros } from './get-sub-metropolitan'


type LocalBodyOption = {
  value: string
  label: string
  meta: IMetropolitan
}

const getLocalBodiesOptions = (language: Language):LocalBodyOption[] => {
  const metropolitanOptions = metropolitan.map(m =>
    getMetropolitanOption(m, language)
  )
  const municipalityOptions = municipalities.map(m =>
    getMunicipalityOption(m, language)
  )
  const ruralMunicipalityOptions = rural.map(m =>
    getRuralMunicipalityOption(m, language)
  )
  const subMetroOptions = subMetros.map(m => getSubMetroOption(m, language))
  return [
    ...metropolitanOptions,
    ...municipalityOptions,
    ...ruralMunicipalityOptions,
    ...subMetroOptions,
  ] as unknown as  LocalBodyOption[]
}

const isLocalBodyInDistrict = (
  districts: string[],
  localBody: LocalBodyOption
) => {
  return districts.includes(localBody.meta.District)
}

const isLocalBodyInProvince = (
  districts: string[],
  localBody: LocalBodyOption
) => {
  return districts.includes(localBody.meta.Province)
}

const getLocalBodiesRaw = (
  limiterType: LimiterType,
  values: string[],
  language: Language
): LocalBodyOption[]=> {
  const localBodies = getLocalBodiesOptions(language)
  const getter = limiterType === LimiterType.Province
    ? isLocalBodyInProvince
    : isLocalBodyInDistrict
  return localBodies
    .filter(localBody => getter(values, localBody))
}

export const getLocalBodies = curry(getLocalBodiesRaw)
