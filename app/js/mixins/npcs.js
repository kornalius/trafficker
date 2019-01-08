export default {

  init () {
    this._npcs = []
  },

  get npcs () { return this._npcs },

  hasNpc (npc) { return this.npcIndex(npc) !== -1 },

  npcIndex (npc) { return this._npcs.indexOf(npc) },

  addNpc (npc) {
    if (_.isArray(npc)) {
      _.each(npc, (n) => this.addNpc(n))
    }
    else if (!this.hasNpc(npc)) {
      this._npcs.push(npc)
      this.emit('npcs.add', npc)
    }
    return this
  },

  removeNpc (npc) {
    if (_.isArray(npc)) {
      _.each(npc, (n) => this.removeNpc(n))
    }
    else if (this.hasNpc(npc)) {
      _.pull(this._npcs, npc)
      this.emit('npcs.remove', npc)
    }
    return this
  },

  clearNpcs () {
    for (var n of this._npc) {
      this.emit('npcs.remove', n)
    }
    this._npcs = []
    return this
  },

}
