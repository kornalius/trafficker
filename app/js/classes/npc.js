import { mixin } from '../utils'

import Base from './base'

import Name from '../mixins/name'
import Desc from '../mixins/desc'
import Icon from '../mixins/icon'
import Parent from '../mixins/parent-children'
import Locations from '../mixins/locations'
import Requirements from '../mixins/requirements'
import Mods from '../mixins/mods'
import Missions from '../mixins/missions'
import Equipments from '../mixins/equipments'
import Inventory from '../mixins/inventory'
import Logs from '../mixins/logs'

import Hp from '../mixins/hp'
import Atk from '../mixins/atk'
import Def from '../mixins/def'
import Str from '../mixins/str'
import Int from '../mixins/int'
import Dex from '../mixins/dex'
import Spd from '../mixins/spd'
import Lck from '../mixins/lck'

import Jobs from '../mixins/jobs'

export default class Npc extends mixin(Base, Name, Desc, Icon, Parent, Hp, Atk, Def, Str, Int, Dex, Spd, Lck, Logs, Locations, Requirements, Mods, Missions, Equipments, Inventory, Jobs) {

  get job () {
    if (!this._job) {
      this._job = this.randomJob()
    }
    return this._job
  }

}
