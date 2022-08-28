export enum Politics {
  District = 'District',
  Metropolitan = 'Metropolitan',
  Municipalities = 'Municipalities',
  Province = 'Province',
  RuralMunicipalities = 'RuralMunicipalities',
  SubMetropolitan = 'SubMetropolitan',
}

export enum Language {
  en = 'EN',
  np = 'NP',
}

export enum Province {
  'ProvinceNo1' = 'Province No. 1',
  'MadheshProvince' = 'Madhesh',
  'BagmatiProvince' = 'Bagmati',
  'GandakiProvince' = 'Gandaki',
  'KarnaliProvince' = 'Karnali',
  'SudurpashchimProvince' = 'Sudurpashchim',
  'LumbiniProvince' = 'Lumbini',
}

export type LocalBodies = Pick<
  typeof Politics,
  'Metropolitan' | 'RuralMunicipalities' | 'SubMetropolitan'
>

export interface IDistrict {
  Name: string
  Nepali: string
  Headquarters: string
  'Population (2011)': string
  'Area(km2)': string
  Province: Province
  LocalBodiesType: LocalBodies[]
}
