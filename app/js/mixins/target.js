export default {

  init () {
    this._target = 0
  },

  get target () { return this._target },
  set target (value) {
    if (this._target !== value) {
      let oldValue = this._target
      this._target = value
      this.emit('target.change', value, oldValue)
    }
  },

}
