export default {

  init () {
    this._str = 0
  },

  get str () { return this._str },
  set str (value) {
    if (this._str !== value) {
      let oldValue = this._str
      this._str = value
      this.emit('str.change', value, oldValue)
    }
  },

}
