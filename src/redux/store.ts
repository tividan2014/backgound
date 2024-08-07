import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'

export const generateStore = () =>
  configureStore({
    ...rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: true,
        immutableCheck: true,
      }),
  })

export const store = generateStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
