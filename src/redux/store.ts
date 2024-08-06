import { configureStore } from '@reduxjs/toolkit'
import reducers from './reducers'

export const generateStore = () =>
  configureStore({
    ...reducers,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: true,
        immutableCheck: true,
      }),
  })

export const store = generateStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
