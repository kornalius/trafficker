import { mixin } from '../utils'

import Base from './base'

import Name from '../mixins/name'
import Desc from '../mixins/desc'
import Icon from '../mixins/icon'
import Parent from '../mixins/parent-children'
import Qty from '../mixins/qty'
import Value from '../mixins/value'
import Mods from '../mixins/mods'
import Hp from '../mixins/hp'

export default class Item extends mixin(Base, Name, Desc, Icon, Parent, Mods, Qty, Value, Hp) {

}
