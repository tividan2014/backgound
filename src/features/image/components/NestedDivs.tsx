import { CSSProperties } from 'react'

type Color = {
  r: number
  b: number
  g: number
  a: number
}

interface BackgroundBase {
  isVisible: boolean
}

interface SolidBackground extends BackgroundBase {
  color: Color
}

interface LinearBackground extends BackgroundBase {
  turn: number
  colors: Color[]
}

export type Background = SolidBackground | LinearBackground

const isSolidBackground = (background: unknown): background is SolidBackground => {
  return typeof (background as SolidBackground).color !== 'undefined'
}

const isLinearBackground = (background: unknown): background is LinearBackground => {
  return typeof (background as LinearBackground).turn !== 'undefined'
}

const generateNestedDivs = (backgrounds: Background[], count: number): JSX.Element => {
  if (count === 0) {
    return <></>
  }

  if (backgrounds[count - 1].isVisible === false) {
    return <>{generateNestedDivs(backgrounds, count - 1)}</>
  }

  if (isSolidBackground(backgrounds[count - 1])) {
    const color = (backgrounds[count - 1] as SolidBackground).color

    const style: CSSProperties = {
      backgroundColor: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
    }

    return (
      <div className="w-full h-full bg-opacity-20" style={style}>
        {generateNestedDivs(backgrounds, count - 1)}
      </div>
    )
  }

  if (isLinearBackground(backgrounds[count - 1])) {
    const b = backgrounds[count - 1] as LinearBackground
    const turn = b.turn
    const tt = b.colors.map((bb) => `rgba(${bb.r},${bb.g},${bb.b},${bb.a})`).join(',')

    const style: CSSProperties = {
      background: `linear-gradient(${turn}deg, ${tt} )`,
    }

    return (
      <div className="w-full h-full bg-opacity-20" style={style}>
        {generateNestedDivs(backgrounds, count - 1)}
      </div>
    )
  }

  return <>{generateNestedDivs(backgrounds, count - 1)}</>
}

export interface Props {
  backgrounds: Background[]
}

export function NestedDivs({ backgrounds }: Props) {
  const reversedBackgrounds = [...backgrounds].reverse()
  return <>{generateNestedDivs(reversedBackgrounds, backgrounds.length)}</>
}
