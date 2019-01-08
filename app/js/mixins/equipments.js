export default {

  init () {
    this._equipments = []
  },

  get equipments () { return this._equipments },

  hasEquipment (equipment) { return this.equipmentIndex(equipment) !== -1 },

  equipmentIndex (equipment) { return this._equipments.indexOf(equipment) },

  addEquipment (equipment) {
    if (_.isArray(equipment)) {
      _.each(equipment, (e) => this.addEquipment(e))
    }
    else if (!this.hasEquipment(equipment)) {
      this._equipments.push(equipment)
      this.emit('equipments.add', equipment)
    }
    return this
  },

  removeEquipment (equipment) {
    if (_.isArray(equipment)) {
      _.each(equipment, (e) => this.removeEquipment(e))
    }
    else if (this.hasEquipment(equipment)) {
      _.pull(this._equipments, equipment)
      this.emit('equipments.remove', equipment)
    }
    return this
  },

  clearEquipments () {
    for (let e of this._equipments) {
      this.emit('equipments.remove', e)
    }
    this._equipments = []
    return this
  },

  isEquipped (item) {

  },

  canEquip (item) {

  },

  equip (item) {

  },

  canUnequip (item) {

  },

  unequip (item) {

  },

}
