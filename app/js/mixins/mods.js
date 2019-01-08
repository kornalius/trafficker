import { _ } from '../utils'

export default {

  init () {
    this._mods = []
    this.emit('mods.init')
  },

  get mods () { return this._mods },

  hasMod (mod) { return this.modIndex(mod) !== -1 },

  modIndex (mod) { return this._mods.indexOf(mod) },

  addMod (mod) {
    if (_.isArray(mod)) {
      _.each(mod, (m) => this.addMod(m))
    }
    else if (!this.hasMod(mod)) {
      this._mods.push(mod)
      this.emit('mods.add', mod)
    }
    return this
  },

  removeMod (mod) {
    if (_.isArray(mod)) {
      _.each(mod, (m) => this.removeMod(m))
    }
    else if (this.hasMod(mod)) {
      _.pull(this._mods, mod)
      this.emit('mods.remove', mod)
    }
    return this
  },

  clearMods () {
    for (let m of this._mods) {
      this.emit('mods.remove', m)
    }
    this._mods = []
    return this
  },

}
