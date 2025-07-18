import type { VN } from './lang/vn'
import type { EN } from './lang/en/ui'

export type Lang = VN | EN

export type ComponentShape = 'square' | 'circle' | 'round'

export type ComponentSize = 'sm' | 'md' | 'lg'

export type ComponentColor =
  | 'blue'
  | 'green'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'purple'
  | 'pink'
  | 'black'
  | 'white'
  | 'gray'

export type ComponentJustify = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'

export type ComponentAligns = 'top' | 'middle' | 'bottom' | 'baseline'

export type ComponentPlacement = 'left' | 'right' | 'top' | 'bottom'

export type ComponentApi = {
  id: string
  props: string
  desc: string
  default: string
  required: string
  type: {
    elType: 'default' | 'anchor' | 'router'
    codes: string[]
    link?: string
  }
}
