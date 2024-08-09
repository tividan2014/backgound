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

  const handleColorChange = (colors: Color[]) => {
    const bLinear: Background = { ...background, colors }
    //TODO   dispatch(updateBackground({ background: bLinear, index }))
  }

  const handleAngleChange = (angle: number) => {}

  return (
    <div className="grid grid-cols-2">
      <span className="w-fit">Color</span>
      <span>asdf</span>
      {/* <ColorPicker className="w-fit" color={background.colors[0]} onChange={(color) => handleColorChange([color])} /> */}
      <span>Angle</span>
      <Slider
        value={50}
        onChange={(value) => {
          handleAngleChange(value)
        }}
      />
    </div>
  )
}

export default BackSolid
