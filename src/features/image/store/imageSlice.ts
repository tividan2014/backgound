import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Background, ExportAs, SolidBackground } from './types'

export interface State {
  exporting: ExportAs | null
  isImageExporting: boolean
  isHtmlExporting: boolean
  activeBackground: number
  width: number
  height: number
  backgrounds: Background[]
}

const initialState: State = {
  exporting: null,
  isImageExporting: false,
  isHtmlExporting: false,
  activeBackground: 0,
  width: 0,
  height: 0,
  backgrounds: [
    {
      isVisible: false,
      color: { r: 0, g: 0, b: 255, a: 0.1 },
    },
    {
      isVisible: true,
      color: { r: 255, g: 0, b: 0, a: 0.2 },
    },
    {
      isVisible: true,
      color: { r: 0, g: 255, b: 0, a: 0.3 },
    },
    {
      isVisible: false,
      turn: 45,
      colors: [
        { r: 255, g: 0, b: 0, a: 0.6 },
        { r: 0, g: 0, b: 255, a: 0.7 },
      ],
    },
    {
      isVisible: false,
      turn: 217,
      colors: [
        { r: 255, g: 0, b: 0, a: 0.7 },
        { r: 255, g: 255, b: 255, a: 0 },
      ],
    },
    {
      isVisible: true,
      turn: 336,
      colors: [
        { r: 0, g: 0, b: 255, a: 0.7 },
        { r: 255, g: 255, b: 255, a: 0 },
      ],
    },
  ],
}

export const imageSlice = createSlice({
  name: 'app/image',
  initialState,
  reducers: {
    setImageSize: (state, action: PayloadAction<{ width: number; height: number }>) => {
      state.width = action.payload.width
      state.height = action.payload.height
    },
    setImageWidth: (state, action: PayloadAction<number>) => {
      state.width = action.payload
    },
    setImageHeigth: (state, action: PayloadAction<number>) => {
      state.height = action.payload
    },

    exportContent: (state, action: PayloadAction<ExportAs | null>) => {
      state.exporting = action.payload
    },

    addBackground: (state, action: PayloadAction<Background>) => {
      state.backgrounds.push(action.payload)
      state.activeBackground = state.backgrounds.length - 1
    },
    deleteBackground: (state, action: PayloadAction<number>) => {
      state.backgrounds.splice(action.payload, 1)
    },
    updateBackground: (state, action: PayloadAction<{ background: SolidBackground; index: number }>) => {
      const { background: current, index } = action.payload

      const background = state.backgrounds[index] as SolidBackground
      background.color = current.color
    },
    showBackground: (state, action: PayloadAction<number>) => {
      const background = state.backgrounds[action.payload]
      background.isVisible = true
    },
    hideBackground: (state, action: PayloadAction<number>) => {
      const background = state.backgrounds[action.payload]
      background.isVisible = false
    },

    setActiveBackground: (state, action: PayloadAction<number>) => {
      state.activeBackground = action.payload
    },
  },
})

/* Actions */
export const {
  setImageSize,
  setImageWidth,
  setImageHeigth,

  exportContent,

  addBackground,
  deleteBackground,
  updateBackground,
  showBackground,
  hideBackground,
} = imageSlice.actions

export default imageSlice.reducer
