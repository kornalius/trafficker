export default {

  init () {
    this._qty = 0
  },

  get qty () { return this._qty },
  set qty (value) {
    if (this._qty !== value) {
      let oldValue = this._qty
      this._qty = value
      this.emit('qty.change', value, oldValue)
    }
  },

  incQty: (value) => {
    this.qty += value
    return this
  },

  decQty: (value) => {
    this.qty = Math.max(0, this.qty - value)
    return this
  },

}
