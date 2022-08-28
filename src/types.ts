export enum Politics {
  District = 'District',
  Metropolitan = 'metropolitan',
  Municipalities = 'Municipalities',
  Province = 'Province',
  RuralMunicipalities = 'RuralMunicipalities',
  SubMetropolitan = 'SubMetropolitan',
}

export enum Language {
  English = 'en',
  Nepali = 'np',
}

export enum ProvinceEnum {
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



