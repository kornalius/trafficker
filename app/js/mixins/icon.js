export default {

  init () {
    this._icon = 0
  },

  get icon () { return this._icon },
  set icon (value) {
    if (this._icon !== value) {
      let oldValue = this._icon
      this._icon = value
      this.emit('icon.change', value, oldValue)
    }
  },

}
