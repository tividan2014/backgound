import cx from 'classnames'

import { Input as AntInput } from 'antd'
import { ChangeEvent, WheelEvent, ReactNode, useState } from 'react'
import { wheelStepSize } from 'common/constants'

interface Props {
  className?: string
  initialValue: number
  placeholder: string
  icon?: ReactNode
  suffix?: string
  min?: number
  max?: number
  onChange: (value: number) => void
}

const Input = ({ className, initialValue, placeholder, icon, suffix, min, max, onChange }: Props) => {
  const [value, setValue] = useState<number>(initialValue)

  const handleOnWheel = (e: WheelEvent<HTMLInputElement>) => {
    const diectionSign = Math.sign(e.deltaY)
    const currentValue = value - diectionSign * wheelStepSize

    if (currentValue < min! || currentValue > max!) return

    setValue(currentValue)
    onChange(currentValue)
  }

  function handleOnChange(e: ChangeEvent<HTMLInputElement>): void {
    if (isNaN(Number(e.target.value))) return

    const currentValue = Number(e.target.value)
    if (currentValue < min! || currentValue > max!) return

    setValue(currentValue)
    onChange(currentValue)
  }

  return (
    <AntInput
      className={cx(className, 'group')}
      placeholder={placeholder}
      prefix={icon}
      suffix={suffix}
      value={value}
      defaultValue={initialValue}
      onChange={handleOnChange}
      onWheel={handleOnWheel}
    />
  )
}

export default Input
