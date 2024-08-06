import cx from 'classnames'

import { Slider as AntSlider } from 'antd'
import { ReactNode, useState } from 'react'

interface Props {
  className?: string
  initialValue?: number
  placeholder: string
}

const Slider = ({ className, initialValue, placeholder }: Props) => {
  const [value, setValue] = useState(initialValue)

  return (
    <div className={cx(className, 'flex items-center')}>
      <span>{placeholder}</span>
      <div className="w-full pl-4">
        <AntSlider className={cx(className, 'group')} value={value} />
      </div>
    </div>
  )
}

export default Slider
