export default {

  greetings: () => {
    return this.chance.pickone([
      'hello',
      'hi',
      'hey',
      'you there',
    ])
  },

  farewells: () => {
    return this.chance.pickone([
      'bye',
      'see ya',
      'take care',
    ])
  },

  pleased: () => {
    return this.chance.pickone([
      'pleased',
      'happy',
      'glad',
    ])
  },

}
