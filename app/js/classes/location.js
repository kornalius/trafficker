import { mixin } from '../utils'

import Base from './base'

import Name from '../mixins/name'
import Desc from '../mixins/desc'
import Icon from '../mixins/icon'
import Parent from '../mixins/parent-children'
import Locations from '../mixins/locations'
import Requirements from '../mixins/requirements'
import Mods from '../mixins/mods'

export default class Location extends mixin(Base, Name, Desc, Icon, Parent, Locations, Requirements, Mods) {

}
