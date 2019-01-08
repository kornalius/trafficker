export default {

  init () {
    this._requirements = []
  },

  get requirements () { return this._requirements },

  hasRequirement (requirement) { return this.requirementIndex(requirement) !== -1 },

  requirementIndex (requirement) { return this._requirements.indexOf(requirement) },

  addRequirement (requirement) {
    if (_.isArray(requirement)) {
      _.each(requirement, (r) => this.addRequirement(r))
    }
    else if (!this.hasRequirement(requirement)) {
      this._requirements.push(requirement)
      this.emit('requirements.add', requirement)
    }
    return this
  },

  removeRequirement (requirement) {
    if (_.isArray(requirement)) {
      _.each(requirement, (r) => this.removeRequirement(r))
    }
    else if (this.hasRequirement(requirement)) {
      _.pull(this._requirements, requirement)
      this.emit('requirements.remove', requirement)
    }
    return this
  },

  clearRequirements () {
    for (var r of this._requirements) {
      this.emit('requirements.remove', r)
    }
    this._requirements = []
    return this
  },

}
