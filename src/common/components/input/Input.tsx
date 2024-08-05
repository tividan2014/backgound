import cx from 'classnames'

import { Input as AntInput } from 'antd'
import { ReactNode, useState } from 'react'

interface Props {
  className?: string
  initialValue?: string
  placeholder: string
  icon?: ReactNode
  onlyNumbers?: true
}

const Input = ({ className, initialValue, placeholder, icon }: Props) => {
  const [value, setValue] = useState(initialValue)

  return <AntInput className={cx(className, 'group')} placeholder={placeholder} prefix={icon} value={value} />
}

export default Input
