import { h, render } from 'preact'

import { mixin } from './utils'
import Base from './classes/base'
import ParentChildren from './mixins/parent-children'
import Game from './classes/game.jsx'

window.game = render(<Game />, document.body)

class MyClass extends mixin(Base, ParentChildren) {

  test () {
    this.on('test-event', (...args) => {
      console.log('test-event', this, ...args)
    })
    this.emit('test-event', 1, 2, 3, 4, 5, 6, 7, 8)
  }

}

var o = new MyClass()
console.log(o)
o.test()
o.defer(o.destroy)

for (let i = 0; i < 10; i++) {
  console.log(window.game._component.player.randomJob().description)
}

console.log(window.game._component.player.job.description)
