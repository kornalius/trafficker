import { _, mixin_extend } from '../utils'
import Articles from 'articles'
import Random from './random'
import Adjectives from './adjectives'
import Adverbs from './adverbs'
import Common from './common'

export default mixin_extend (Random, Adjectives, Adverbs, Common, {

  sentence (s) {
    return _.template(s, {
      very:       this.adjectives.very(),
      a_very:     Articles.articlize(this.adjectives.very()),
      very_adv:   this.adverbs.very(),
      slightly:   this.adjectives.slightly(),
      a_slightly: Articles.articlize(this.adjectives.slightly()),
      large:      this.adjectives.large(),
      a_large:    Articles.articlize(this.adjectives.large()),
      small:      this.adjectives.small(),
      a_small:    Articles.articlize(this.adjectives.small()),
      size:       this.adjectives.size(),
      a_size:     Articles.articlize(this.adjectives.size()),
      strong:     this.adjectives.strong(),
      a_strong:   Articles.articlize(this.adjectives.strong()),
      weak:       this.adjectives.weak(),
      a_weak:     Articles.articlize(this.adjectives.weak()),
      force:      this.adjectives.force(),
      a_force:    Articles.articlize(this.adjectives.force()),
      greeting:   this.greetings(),
      farewell:   this.farewells(),
      pleased:    this.pleased(),
    })
  },

})
