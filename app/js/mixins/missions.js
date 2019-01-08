export default {

  init () {
    this._missions = []
  },

  get missions () { return this._missions },

  hasMission (mission) { return this.missionIndex(mission) !== -1 },

  missionIndex (mission) { return this._missions.indexOf(mission) },

  addMission (mission) {
    if (_.isArray(mission)) {
      _.each(mission, (m) => this.addMission(m))
    }
    else if (!this.hasMission(mission)) {
      this._missions.push(mission)
      this.emit('missions.add', mission)
    }
    return this
  },

  removeMission (mission) {
    if (_.isArray(mission)) {
      _.each(mission, (m) => this.removeMission(m))
    }
    else if (this.hasMission(mission)) {
      _.pull(this._missions, mission)
      this.emit('missions.remove', mission)
    }
    return this
  },

  clearMissions () {
    for (let m of this._missions) {
      this.emit('missions.remove', m)
    }
    this._missions = []
    return this
  },

}
