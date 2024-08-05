import { ReactComponent as Add } from './svg/add.svg'
import { ReactComponent as Horizontal } from './svg/horizontal.svg'
import { ReactComponent as Vertical } from './svg/vertical.svg'

import Icon, { IconPropsBase } from './Icon'

export const AddIcon = (props: IconPropsBase) => <Icon svg={Add} {...props} />
export const HorizontalIcon = (props: IconPropsBase) => <Icon svg={Horizontal} {...props} />
export const VerticalIcon = (props: IconPropsBase) => <Icon svg={Vertical} {...props} />
