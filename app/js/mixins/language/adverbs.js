export default {

  adverbs: {

    very: () => {
      return this.chance.pickone([
        'very',
        'exact',
        'precise',
        '',
      ])
    },

  },

}
