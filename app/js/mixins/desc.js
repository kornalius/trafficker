export default {

  init () {
    this._desc = ''
  },

  get desc () { return this._desc },
  set desc (value) {
    if (this._desc !== value) {
      let oldValue = this._desc
      this._desc = value
      this.emit('desc.change', value, oldValue)
    }
  },

}
