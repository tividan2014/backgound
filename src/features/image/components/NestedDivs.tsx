import { CSSProperties } from 'react'
import { Background, BackgroundType, LinearBackground, SolidBackground } from '../store/types'

const isSolidBackground = (background: Background) => {
  return background.type === BackgroundType.solid
}

const isLinearBackground = (background: Background) => {
  return background.type === BackgroundType.linear
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
    const background = backgrounds[count - 1] as LinearBackground
    const turn = background.turn

    const linearColors = background.colors
      .map((b) => `rgba(${b.r},${b.g},${b.b},${b.a})${b.p ? ` ${b.p}%` : ''}`)
      .join(',')
    const style: CSSProperties = {
      width: '100%',
      height: '100%',
      background: `linear-gradient(${turn}deg, ${linearColors} )`,
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
