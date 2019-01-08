export default {

  init () {
    this._source = 0
  },

  get source () { return this._source },
  set source (value) {
    if (this._source !== value) {
      let oldValue = this._source
      this._source = value
      this.emit('source.change', value, oldValue)
    }
  },

}
