import { CSSProperties } from 'react'
import { Background, LinearBackground, SolidBackground } from '../store/imageSlice'

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
      width: '100%',
      height: '100%',
      backgroundColor: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
    }

    return <div style={style}>{generateNestedDivs(backgrounds, count - 1)}</div>
  }

  if (isLinearBackground(backgrounds[count - 1])) {
    const b = backgrounds[count - 1] as LinearBackground
    const turn = b.turn
    const tt = b.colors.map((bb) => `rgba(${bb.r},${bb.g},${bb.b},${bb.a})`).join(',')

    const style: CSSProperties = {
      width: '100%',
      height: '100%',
      background: `linear-gradient(${turn}deg, ${tt} )`,
    }

    return <div style={style}>{generateNestedDivs(backgrounds, count - 1)}</div>
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
