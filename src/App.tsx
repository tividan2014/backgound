import useScreenSize from 'common/hooks/useScreenSize'
import { setImageSize } from 'features/image/store/imageSlice'
import Playground from 'features/playground'
import { useEffect } from 'react'
import { useDispatch } from './redux/hooks'

function App() {
  const dispatch = useDispatch()
  const { width, height } = useScreenSize()

  useEffect(() => {
    if (width && height) {
      dispatch(setImageSize({ width, height }))
    }
  }, [width, height, dispatch])

  return (
    <div className="h-screen relative bg-body">
      <Playground />
    </div>
  )
}

export default App
