export default {

  adjectives: {

    large: () => {
      return this.chance.pickone([
        'big',
        'large',
        'huge',
        'enormous',
        'massive',
        'colossal',
        'great',
      ])
    },

    small: () => {
      return this.chance.pickone([
        'small',
        'tiny',
        'little',
        'compact',
        'miniature',
      ])
    },

    size: pct => {
      return this.chance.bool({ likelihood: pct }) ? this.large() : this.small()
    },

    strong: () => {
      return this.chance.pickone([
        'strong',
        'though',
        'powerful',
        'sturdy',
        'rugged',
        'robust',
      ])
    },

    weak: () => {
      return this.chance.pickone([
        'weak',
        'wimpy',
        'fragile',
        'gentle',
        'puny',
        'flimsy',
        '',
      ])
    },

    force: pct => {
      return this.chance.bool({ likelihood: pct }) ? this.strong() : this.weak()
    },

    very: () => {
      return this.chance.pickone([
        'very',
        'extremely',
        'highly',
        'really',
        '',
      ])
    },

    slightly: () => {
      return this.chance.pickone([
        'slightly',
        'somewhat',
        'rather',
        '',
      ])
    },

  },
  _
}
