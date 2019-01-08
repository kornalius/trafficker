import Log from '../classes/log'
import { q } from '../utils'

export default {

  init () {
    this._logs = []
  },

  get logs () { return this._logs },

  hasLog (log) { return this.logIndex(log) !== -1 },

  logIndex (log) { return this._logs.indexOf(log) },

  findAllLogs (source, action, qty) {
    let qs = ''
    if (source) {
      qs += '*source~/^' + source + '$/i'
    }
    if (action) {
      qs += ' & *action~/^' + action + '$/i'
    }
    if (qty) {
      qs += ' & *qty=' + qty
    }
    return q(qs, this._logs)
  },

  findLog (source, action, qty) {
    let qs = ''
    if (source) {
      qs += 'source~/^' + source + '$/i'
    }
    if (action) {
      qs += ' & action~/^' + action + '$/i'
    }
    if (qty) {
      qs += ' & qty=' + qty
    }
    return _.first(q(qs, this._logs))
  },

  log (source, action, qty, note) {
    if (!this.findLog(source, action, qty)) {
      let l = new Log(source, action, qty, note)
      this.addLog(l)
      return l
    }
    return null
  },

  addLog (log) {
    if (_.isArray(log)) {
      _.each(log, (l) => this.addLog(l))
    }
    else if (!this.hasLog(log)) {
      this._logs.push(log)
      this.emit('logs.add', log)
    }
    return this
  },

  removeLog (log) {
    if (_.isArray(log)) {
      _.each(log, (l) => this.removeLog(l))
    }
    else if (!this.hasLog(log)) {
      _.pull(this._logs, log)
      this.emit('logs.remove', log)
    }
    return this
  },

  clearLogs () {
    for (let l of this._logs) {
      this.emit('logs.remove', l)
    }
    this._logs = []
    return this
  },

}
