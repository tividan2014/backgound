import cx from 'classnames'

import { ColorPicker as AntColorPicker } from 'antd'
import { ReactNode, useState } from 'react'

interface Props {
  className?: string
  initialValue?: number
  placeholder: string
}

const ColorPicker = ({ className, initialValue, placeholder }: Props) => {
  const [value, setValue] = useState(initialValue)

  return <AntColorPicker className={cx(className, 'flex items-center')} defaultValue="#1677ff" showText disabledAlpha />
}

export default ColorPicker
