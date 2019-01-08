export default {

  init () {
    this._day = 0
  },

  get day () { return this._day },
  set day (value) {
    if (this._day !== value) {
      let oldValue = this._day
      this._day = value
      this.emit('day.change', value, oldValue)
    }
  },

  daysBefore (day) {
    return day - this.day
  },

  daysAfter (day) {
    return this.day - day
  },

  isPast (day) {
    return day < this.day
  },

  isFuture (day) {
    return day > this.day
  },

}
