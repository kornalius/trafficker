export default {

  init () {
    this._spd = 0
  },

  get spd () { return this._spd },
  set spd (value) {
    if (this._spd !== value) {
      let oldValue = this._spd
      this._spd = value
      this.emit('spd.change', value, oldValue)
    }
  },

}
