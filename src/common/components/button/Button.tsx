import cx from 'classnames'

import { Button as AntButton } from 'antd'
import { ReactNode } from 'react'

interface Props {
  className?: string
  label: string
  icon?: ReactNode
}

const Button = ({ className, label, icon }: Props) => {
  return (
    <AntButton className={cx(className, 'group')} type="primary" icon={icon}>
      {label}
    </AntButton>
  )
}

export default Button
