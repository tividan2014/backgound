import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface State {
  width: number
  height: number
}

const initialState: State = {
  width: 0,
  height: 0,
}

export const imageSlice = createSlice({
  name: 'app/image',
  initialState,
  reducers: {
    setImgeSize: (state, action: PayloadAction<{ width: number; height: number }>) => {
      state.width = action.payload.width
      state.height = action.payload.height
    },
  },
})

/* Actions */
export const { setImgeSize } = imageSlice.actions

export default imageSlice.reducer
