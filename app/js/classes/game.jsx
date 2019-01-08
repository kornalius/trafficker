import { h } from 'preact'
import { mixin, EE } from '../utils'

import BaseElement from './base-element'
import Player from './player'

import ParentChildren from '../mixins/parent-children'

export default class Game extends mixin(BaseElement, ParentChildren) {

  constructor () {
    super({ count: 0 })

    this._player = new Player()

    EE.on('key.*', e => {
      this.keyboardElements().forEach(el => {
        if (el._component) {
          el._component.emit(this.event, e)
        }
      })
    })

    EE.on('mouse.*', e => {
      this.mouseElements().forEach(el => {
        if (el._component) {
          el._component.emit(this.event, e)
        }
      })
    })

    EE.on('object.destroy', child => {
      if (child && child._el) {
        child._el.remove()
      }
    })
  }

  destroy () {
    EE.off('key.*')
    EE.off('mouse.*')
    EE.off('object.destroy')
    this.clearChildren()
  }

  get player () { return this._player }

  keyboardElements () { return this.querySelectorAll('.keyboard') }

  mouseElements () { return this.querySelectorAll('.mouse') }

  start () {
    this.emit('game.start')
  }

  stop () {
    this.emit('game.stop')
  }

  update () {
    this.children(true).forEach(o => {
      o.emit('game.update')
    })
    this.emit('game.update')
  }

  componentDidMount () {
    super.componentDidMount()
    this.timer = setInterval(() => { this.setState({ count: this.state.count + 1 }) }, 1000)
  }

  componentWillUnmount () {
    super.componentWillUnmount()
    clearInterval(this.timer)
  }

  style () {
    return {
      root: {
        '& span': {
          fontSize:   20,
          fontFamily: 'Helvetica'
        },
        '& .test': {
          color: 'red',
        }
      }
    }
  }

  // shouldComponentUpdateStylesheet () {
    // return true
  // }

  render (props, state) {
    return <div>
             <span>Game Element, WooHoo! <span class='test'>{ state.count }</span></span>
           </div>
  }

}
