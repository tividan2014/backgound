import cx from 'classnames'

import { Button as AntButton } from 'antd'
import { ReactNode } from 'react'

interface Props {
  className?: string
  label: string
  icon?: ReactNode
  onClick: () => void
}

const Button = ({ className, label, icon, onClick }: Props) => {
  return (
    <AntButton className={cx(className, 'group')} type="primary" icon={icon} onClick={onClick}>
      {label}
    </AntButton>
  )
}

export default Button
