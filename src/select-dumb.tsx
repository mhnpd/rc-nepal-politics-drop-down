import React from 'react'
import Select from 'react-select'

export interface SelectDumpProps {
  options: any,
  testId?: string
}
export const SelectDump = ({
  testId,
  options,
  ...rest
}: SelectDumpProps) => {
  return (
    <div data-testid={testId}>
      <Select
        menuPortalTarget={document.body}
        menuPosition="fixed"
        {...rest}
        options={options}
      />
    </div>
  )
}