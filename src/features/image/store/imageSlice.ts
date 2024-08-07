import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Background } from '../components/NestedDivs'

export interface State {
  width: number
  height: number
  backgrounds: Background[]
}

const initialState: State = {
  width: 0,
  height: 0,
  backgrounds: [
    {
      id: 0,
      isVisible: false,
      color: { r: 0, g: 0, b: 255, a: 0.1 },
    },
    {
      id: 1,
      isVisible: true,
      color: { r: 255, g: 0, b: 0, a: 0.2 },
    },
    {
      id: 2,
      isVisible: true,
      color: { r: 0, g: 255, b: 0, a: 0.3 },
    },
    {
      id: 3,
      isVisible: false,
      turn: 45,
      colors: [
        { r: 255, g: 0, b: 0, a: 0.6 },
        { r: 0, g: 0, b: 255, a: 0.7 },
      ],
    },
    {
      id: 4,
      isVisible: false,
      turn: 217,
      colors: [
        { r: 255, g: 0, b: 0, a: 0.7 },
        { r: 255, g: 255, b: 255, a: 0 },
      ],
    },
    {
      id: 5,
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

    addBackground: (state, action: PayloadAction<Background>) => {
      state.backgrounds.push(action.payload)
    },
    deleteBackground: (state, action: PayloadAction<Background>) => {},
    updateBackground: (state, action: PayloadAction<Background>) => {},
    showBackground: (state, action: PayloadAction<Background>) => {},
    hideBackground: (state, action: PayloadAction<Background>) => {},
  },
})

/* Actions */
export const {
  setImageSize,
  setImageWidth,
  setImageHeigth,
  addBackground,
  deleteBackground,
  updateBackground,
  showBackground,
  hideBackground,
} = imageSlice.actions

export default imageSlice.reducer
