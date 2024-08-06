import cx from 'classnames'

import { Input as AntInput } from 'antd'
import { ReactNode, useState } from 'react'

interface Props {
  className?: string
  initialValue?: string
  placeholder: string
  icon?: ReactNode
  onlyNumbers?: boolean
  suffix?: string
}

const Input = ({ className, initialValue, placeholder, icon, suffix }: Props) => {
  const [value, setValue] = useState(initialValue)

  return (
    <AntInput
      className={cx(className, 'group')}
      placeholder={placeholder}
      prefix={icon}
      suffix={suffix}
      value={value}
    />
  )
}

export default Input
