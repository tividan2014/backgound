import cx from 'classnames'

import { Radio, RadioChangeEvent } from 'antd'
import { ReactNode, useState } from 'react'

type Item = { label: ReactNode; value: string }

interface Props {
  className?: string
  items: Item[]
}

const RadioGroup = ({ className, items }: Props) => {
  const [value3, setValue3] = useState('Apple')

  const onChange3 = ({ target: { value } }: RadioChangeEvent) => {
    console.log('radio3 checked', value)
    setValue3(value)
  }
  return (
    <Radio.Group
      className={cx(className, 'group')}
      options={items}
      onChange={onChange3}
      value={value3}
      optionType="button"
      size="small"
    />
  )
}

export default RadioGroup
