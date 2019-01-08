export default {

  init () {
    this._atk = 0
  },

  get atk () { return this._atk },
  set atk (value) {
    if (this._atk !== value) {
      let oldValue = this._atk
      this._atk = value
      this.emit('atk.change', value, oldValue)
    }
  },

}
