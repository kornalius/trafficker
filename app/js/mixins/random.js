import faker from 'faker'
import Chance from 'chance'

export default {

  get chance () {
    if (!this._chance) {
      this._chance = new Chance()
    }
    return this._chance
  },

  gender () { return this.chance.gender() },

  firstName (gender) { return this.chance.first({ gender }) },
  lastName (gender) { return this.chance.last({ gender }) },
  alias (gender) { return faker.random.arrayElement([]) },

  dice (formula) { return this.chance.rpg(formula) },

}
