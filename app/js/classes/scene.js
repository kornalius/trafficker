import { mixin } from '../utils'

import Base from './base'

export default class Scene extends mixin(Base) {

  enter () {
    this.emit('scene.enter')
  }

  exit () {
    this.emit('scene.exit')
  }

  update (interval, time) {
    this.emit('scene.update', interval, time)
  }

  draw (frameState) {
    this.emit('scene.draw', frameState)
  }

}
