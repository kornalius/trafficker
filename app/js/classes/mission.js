import { mixin } from '../utils'

import Base from './base'

import Name from '../mixins/name'
import Desc from '../mixins/desc'
import Icon from '../mixins/icon'
import Parent from '../mixins/parent-children'
import Qty from '../mixins/qty'
import Source from '../mixins/source'
import Target from '../mixins/target'
import Requirements from '../mixins/requirements'

export default class Mission extends mixin(Base, Name, Desc, Icon, Parent, Requirements, Source, Target, Qty) {

}
