export default {

  init () {
    this._def = 0
  },

  get def () { return this._def },
  set def (value) {
    if (this._def !== value) {
      let oldValue = this._def
      this._def = value
      this.emit('def.change', value, oldValue)
    }
  },

}
