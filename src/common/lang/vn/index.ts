import button_vn from './button'
import common_vn from './common'
import grid_vn from './grid'
import home_vn from './home'
import icon_vn from './icon'
import menu_vn from './menu'
import pagination_vn from './pagination'
import table_vn from './table'
import tabs_vn from './tabs'

const vn = {
  common: common_vn,
  menu: menu_vn,
  home: home_vn,
  table: table_vn,
  tabs: tabs_vn,
  button: button_vn,
  grid: grid_vn,
  pagination: pagination_vn,
  icon: icon_vn
}

export type VN = typeof vn

export default vn
