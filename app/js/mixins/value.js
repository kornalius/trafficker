export default {

  init () {
    this._value = 0
  },

  get value () { return this._value },
  set value (value) {
    if (this._value !== value) {
      let oldValue = this._value
      this._value = value
      this.emit('value.change', value, oldValue)
    }
  },

}
