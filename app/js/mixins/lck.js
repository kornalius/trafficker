export default {

  init () {
    this._lck = 0
  },

  get lck () { return this._lck },
  set lck (value) {
    if (this._lck !== value) {
      let oldValue = this._lck
      this._lck = value
      this.emit('lck.change', value, oldValue)
    }
  },

}
