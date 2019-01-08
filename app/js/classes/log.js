import { mixin } from '../utils'

import Base from './base'

import Day from '../mixins/day'
import Source from '../mixins/source'
import Qty from '../mixins/qty'

export default class Log extends mixin(Base, Day, Source, Qty) {

}
