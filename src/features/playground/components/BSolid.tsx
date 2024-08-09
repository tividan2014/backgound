import { useDispatch } from '../../../redux/hooks'
import { updateBackground } from 'features/image/store/imageSlice'
import ColorPicker from 'common/components/colorPicker'
import { Background, Color, SolidBackground } from 'features/image/store/types'

interface Props {
  background: SolidBackground
  index: number
}

const BSolid = ({ background, index }: Props) => {
  const dispatch = useDispatch()

  const handleColorChange = (color: Color) => {
    const bSolid: Background = { ...background, color }
    dispatch(updateBackground({ background: bSolid, index }))
  }

  return (
    <div className="grid grid-cols-2">
      <span className="w-fit">Color</span>
      <ColorPicker className="w-fit" color={background.color} onChange={(color) => handleColorChange(color)} />
    </div>
  )
}

export default BSolid
