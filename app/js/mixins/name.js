export default {

  init () {
    this._name = 0
  },

  get name () { return this._name },
  set name (value) {
    if (this._name !== value) {
      let oldValue = this._name
      this._name = value
      this.emit('name.change', value, oldValue)
    }
  },

}
