export default {

  init () {
    this._inventory = []
  },

  get inventory () { return this._inventory },

  hasItem (item) { return this.itemIndex(item) !== -1 },

  itemIndex (item) { return this._inventory.indexOf(item) },

  addItem (item) {
    if (_.isArray(item)) {
      _.each(item, (i) => this.addItem(i))
    }
    else if (!this.hasItem(item)) {
      this._inventory.push(item)
      this.emit('inventory.add', item)
    }
    return this
  },

  removeItem (item) {
    if (_.isArray(item)) {
      _.each(item, (i) => this.removeItem(i))
    }
    else if (this.hasItem(item)) {
      _.pull(this._inventory, item)
      this.emit('inventory.remove', item)
    }
    return this
  },

  clearInventory () {
    for (let i of this._inventory) {
      this.emit('inventory.remove', i)
    }
    this._inventory = []
    return this
  },

}
