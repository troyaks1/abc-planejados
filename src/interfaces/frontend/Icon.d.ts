import { IconType } from "react-icons/lib"

export default interface Icon {
  type: Modal.Content['type']
  name_pt: string
  image: IconType
  size: number
  cursor: string
}