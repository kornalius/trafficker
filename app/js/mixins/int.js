export default {

  init () {
    this._int = 0
  },

  get int () { return this._int },
  set int (value) {
    if (this._int !== value) {
      let oldValue = this._int
      this._int = value
      this.emit('int.change', value, oldValue)
    }
  },

  isSmart () {
    return this.int > 80
  },

  isAverage () {
    return this.int > 50 && this.int < 80
  },

  isDumb () {
    return this.int < 50
  },

  isIdiot () {
    return this.int < 25
  },

}
