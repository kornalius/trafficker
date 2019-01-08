export default {

  init () {
    this._locations = []
  },

  get locations () { return this._locations },

  hasLocation (location) { return this.locationIndex(location) !== -1 },

  locationIndex (location) { return this._locations.indexOf(location) },

  addLocation (location) {
    if (_.isArray(location)) {
      _.each(location, (l) => this.addLocation(l))
    }
    else if (!this.hasLocation(location)) {
      this._locations.push(location)
      this.emit('locations.add', location)
    }
    return this
  },

  removeLocation (location) {
    if (_.isArray(location)) {
      _.each(location, (l) => this.removeLocation(l))
    }
    else if (this.hasLocation(location)) {
      _.pull(this._locations, location)
      this.emit('locations.remove', location)
    }
    return this
  },

  clearLocations () {
    for (let l of this._locations) {
      this.emit('locations.remove', l)
    }
    this._locations = []
    return this
  },

}
