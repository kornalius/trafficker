import { mixin } from '../utils'

import Base from './base'

import Timer from '../mixins/timer'
import Value from '../mixins/value'

export default class Mod extends mixin(Base, Timer, Value) {

}
