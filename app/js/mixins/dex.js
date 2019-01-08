export default {

  init () {
    this._dex = 0
  },

  get dex () { return this._dex },
  set dex (value) {
    if (this._dex !== value) {
      let oldValue = this._dex
      this._dex = value
      this.emit('dex.change', value, oldValue)
    }
  },

}
