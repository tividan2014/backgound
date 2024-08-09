export type Color = {
  r: number
  g: number
  b: number
  a: number
}

interface BackgroundBase {
  isVisible: boolean
}

export interface SolidBackground extends BackgroundBase {
  color: Color
}

export interface LinearBackground extends BackgroundBase {
  turn: number
  colors: Color[]
}

export type Background = SolidBackground | LinearBackground
