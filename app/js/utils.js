const electron = require('electron')
const { remote, screen } = electron
const { app, BrowserWindow } = remote

// let win = new BrowserWindow({width: 800, height: 600});
// win.loadURL('https://github.com');

const _ = require('underscore-plus')
_.extend(_, require('lodash'))

_.templateSettings.interpolate = /{{([\s\S]+?)}}/g

const q = require('json-query')
const EventEmitter = require('eventemitter2').EventEmitter2
const fs = remote.require('fs-plus')

import path from 'path'
import { mixin, mixin_extend } from './mixin'
import raf from 'raf'
import { ArrayObserver, PathObserver, ObjectObserver } from 'observe-js'

const EE = new EventEmitter({ delimiter: '.' })

let userPath = path.join(path.dirname(module.filename), '../user')
if (!fs.existsSync(userPath)) {
  fs.makeTreeSync(userPath)
}

let IS_WIN = /^win/.test(process.platform)
let IS_OSX = process.platform === 'darwin'
let IS_LINUX = process.platform === 'linux'
let dirs = {
  home:         app.getPath('home'),
  app:          app.getPath('appData'),
  user:         userPath,
  tmp:          app.getPath('temp'),
  root:         app.getPath('exe'),
  module:       path.dirname(module.filename),
  node_modules: path.join(userPath, 'node_modules'),
  user_pkg:     path.join(userPath, 'package.json'),
}

export {
  _,
  electron,
  remote,
  mixin,
  mixin_extend,
  EventEmitter,
  EE,
  screen,
  BrowserWindow,
  app,
  fs,
  path,
  q,
  userPath,
  IS_WIN,
  IS_OSX,
  IS_LINUX,
  dirs,
  ArrayObserver,
  PathObserver,
  ObjectObserver,
  raf,
}
