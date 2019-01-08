export default {

  init () {
    this._hp = 0
  },

  get hp () { return this._hp },
  set hp (value) {
    if (this._hp !== value) {
      let oldValue = this._hp
      this._hp = value
      this.emit('hp.change', value, oldValue)
    }
  },

}
