import { ReactComponent as Add } from './svg/add.svg'
import { ReactComponent as Code } from './svg/code.svg'
import { ReactComponent as Download } from './svg/download.svg'
import { ReactComponent as Eye } from './svg/eye.svg'
import { ReactComponent as EyeSlash } from './svg/eyeSlash.svg'
import { ReactComponent as Export } from './svg/export.svg'
import { ReactComponent as Horizontal } from './svg/horizontal.svg'
import { ReactComponent as Photo } from './svg/photo.svg'
import { ReactComponent as Upload } from './svg/upload.svg'
import { ReactComponent as Vertical } from './svg/vertical.svg'
import { ReactComponent as XMark } from './svg/xMark.svg'

import Icon, { IconPropsBase } from './Icon'

export const AddIcon = (props: IconPropsBase) => <Icon svg={Add} {...props} />
export const CodeIcon = (props: IconPropsBase) => <Icon svg={Code} {...props} />
export const DownloadIcon = (props: IconPropsBase) => <Icon svg={Download} {...props} />
export const EyeIcon = (props: IconPropsBase) => <Icon svg={Eye} {...props} />
export const EyeSlashIcon = (props: IconPropsBase) => <Icon svg={EyeSlash} {...props} />
export const ExportIcon = (props: IconPropsBase) => <Icon svg={Export} {...props} />
export const HorizontalIcon = (props: IconPropsBase) => <Icon svg={Horizontal} {...props} />
export const PhotoIcon = (props: IconPropsBase) => <Icon svg={Photo} {...props} />
export const UploadIcon = (props: IconPropsBase) => <Icon svg={Upload} {...props} />
export const VerticalIcon = (props: IconPropsBase) => <Icon svg={Vertical} {...props} />
export const XMarkIcon = (props: IconPropsBase) => <Icon svg={XMark} {...props} />
