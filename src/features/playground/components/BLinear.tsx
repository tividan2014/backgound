import { useDispatch } from '../../../redux/hooks'
import { updateBackground } from 'features/image/store/imageSlice'
import ColorPicker from 'common/components/colorPicker'
import Slider from 'common/components/slider'
import { Background, Color, LinearBackground } from 'features/image/store/types'

interface Props {
  background: LinearBackground
  index: number
}

const BackSolid = ({ background, index }: Props) => {
  const dispatch = useDispatch()

  const handleColorChange = (color: Color) => {
    const bSolid: Background = { ...background, color }
    dispatch(updateBackground({ background: bSolid, index }))
  }

  return (
    <div className="grid grid-cols-2">
      <span className="w-fit">Color</span>
      {/* <ColorPicker className="w-fit" colors={background.colors} onChange={(color) => handleColorChange(color)} />*/}
      <span>Angle</span>
      <Slider value={50} onChange={() => {}} />
    </div>
  )
}

export default BackSolid
