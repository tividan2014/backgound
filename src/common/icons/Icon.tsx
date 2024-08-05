import React, { CSSProperties, FunctionComponent, SVGProps } from 'react'
import cx from 'classnames'

type Svg = FunctionComponent<SVGProps<SVGSVGElement> & { title?: string | undefined }>

interface IconPropsBase {
  size?: number
  className?: string
  isDefaultColor?: boolean

  role?: React.AriaRole
}

interface IconProps extends IconPropsBase {
  svg: Svg
}

function Icon({ svg: DefaultSvg, size = 6, className, isDefaultColor = true, role }: IconProps) {
  const defaultColorClasses = cx('text-gray-200 hover:text-blue-500 group-hover:text-blue-500')
  const fullClassName = cx('inline-block', { [`${defaultColorClasses}`]: isDefaultColor }, className)

  const style: CSSProperties = {
    width: size * 4,
    height: size * 4,
  }

  return <DefaultSvg className={fullClassName} style={style} role={role} />
}

export default Icon

export type { IconPropsBase }
