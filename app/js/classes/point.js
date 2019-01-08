import { mixin } from '../utils'
import PointMixin from '../mixins/point'

class P {}

export default class Point extends mixin(P, PointMixin) {

  constructor (x = 0, y = 0) {
    super()
    if (x instanceof Point) {
      this.x = x.x
      this.y = x.y
    }
    else {
      this.x = x
      this.y = y
    }
  }

}

Point.prototype.fromArray = (a) => { return new Point(a[0], a[1]) }

Point.prototype.lerp = (a, b, fraction) => { return b.sub(a).multiply(fraction).add(a) }

Point.prototype.max = (a, b) => { return new Point(Math.max(a.x, b.x), Math.max(a.y, b.y)) }

Point.prototype.min = (a, b) => { return new Point(Math.min(a.x, b.x), Math.min(a.y, b.y)) }

Point.prototype.randomDirection = () => { return Point.fromAngle(Math.random() * Math.PI * 2) }

Point.prototype.fromAngle = (theta) => { return new Point(Math.cos(theta), Math.sin(theta)) }

Point.prototype.distance = (a, b) => { return Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2)) }
