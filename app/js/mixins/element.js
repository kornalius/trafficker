export default {

  init () {
    this._el = null
  },

  get element () { return this._el },
  get hasElement () { return this._el !== null },
  get parentNode () { return this.hasElement ? this._el.parentNode : null },

  childElements (deep = false) {
    if (this.hasElement) {
      let children = Array.from(this._el.children)
      if (deep) {
        for (let c of children) {
          children = children.concat(c.childElements(true))
          children.push(c)
        }
      }
      return children
    }
    return []
  },

  querySelector (selector) {
    if (this.hasElement) {
      return this._el.querySelector(selector)
    }
    else {
      return null
    }
  },

  querySelectorAll (selector) {
    if (this.hasElement) {
      return Array.from(this._el.querySelectorAll(selector))
    }
    else {
      return []
    }
  },

  hasChildElements () { return this.childElements().length > 0 },

  removeChildElements () {
    if (this.hasElement) {
      this._el.textContent = ''
    }
    return this
  },

  insertBefore (before, el) {
    if (this.hasElement) {
      this._el.insertBefore(before, el)
      this.emit('element.insert', el)
    }
    return this
  },

  insertAfter (before, el) {
    if (this.hasElement) {
      this._el.insertAfter(before, el)
      this.emit('element.insert', el)
    }
    return this
  },

  appendChild (el) {
    if (this.hasElement) {
      this._el.appendChild(el)
      this.emit('element.append', el)
    }
    return this
  },

  removeChild (el) {
    if (this.hasElement) {
      this.emit('element.remove', el)
      this._el.removeChild(el)
    }
    return this
  },

  remove () {
    if (this.hasElement) {
      let p = this._el.parentNode
      if (p) {
        p.removeChild(this._el)
      }
    }
    return this
  },

  childElementIndex (el) { return this.hasElement ? Array.from(this._el.children).indexOf(el) : -1 },

  hasChildElement (el) { return this.hasElement ? this.childElementIndex(el) !== -1 : false },

  forEachElement (cb, deep = false) {
    if (this.hasElement) {
      let children = this.childElements(deep)
      let len = children.length
      for (let idx = 0; idx < len; idx++) {
        cb.call(this, children[idx], idx)
      }
    }
    return this
  },

  addClass (name) {
    if (this.hasElement) {
      this._el.classList.add(...name.split(' '))
      this.emit('class.add', name)
    }
    return this
  },

  removeClass (name) {
    if (this.hasElement) {
      this._el.classList.remove(...name.split(' '))
      this.emit('class.remove', name)
    }
    return this
  },

  toggleClass (name) {
    if (this.hasElement) {
      this._el.classList.toggle(...name.split(' '))
      this.emit('class.toggle', name)
    }
    return this
  },

  hasClass (name) {
    if (this.hasElement) {
      for (let n of name.split(' ')) {
        if (!this._el.classList.contains(n)) {
          return false
        }
      }
      return true
    }
    return false
  },

  attr (name, value) {
    if (this.hasElement) {
      if (!value) {
        return this._el.getAttribute(name)
      }
      else {
        this._el.setAttribute(name, value)
        this.emit('attr.set', name, value)
      }
    }
    return this
  },

  removeAttr (name) {
    if (this.hasElement) {
      this._el.removeAttribute(name)
      this.emit('attr.remove', name)
    }
    return this
  },

  hasAttr (name) { return this.hasElement ? this._el.hasAttribute(name) : false },

}
