import { mixin } from '../utils'

import Equipment from './equipment'

import Atk from '../mixins/atk'

export default class Weapon extends mixin(Equipment, Atk) {

}
