import { useDispatch } from '../../../redux/hooks'
import { updateBackground2, updateBLinearTurn } from 'features/image/store/imageSlice'
import Slider from 'common/components/slider'
import { Background, Color, LinearBackground } from 'features/image/store/types'
import MultiColorPicker from 'common/components/multiColorPicker'

interface Props {
  background: LinearBackground
  index: number
}

const BLinear = ({ background, index }: Props) => {
  const dispatch = useDispatch()

  const handleColorsChange = (colors: Color[]) => {
    const bLinear: Background = { ...background, colors }
    dispatch(updateBackground2({ background: bLinear, index }))
  }

  const handleTurnChange = (turn: number, index: number) => {
    dispatch(updateBLinearTurn({ turn, index }))
  }

  return (
    <div className="grid grid-cols-2">
      <span className="w-fit">Color</span>
      <MultiColorPicker colors={background.colors} onChange={(colors) => handleColorsChange(colors)} />
      <span className="w-fit">Turn</span>
      <Slider
        value={background.turn}
        min={0}
        max={359}
        onChange={(value) => {
          handleTurnChange(value, index)
        }}
      />
    </div>
  )
}

export default BLinear
