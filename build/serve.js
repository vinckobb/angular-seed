'use strict';

/**
 * Dependencies
 */
const path = require('path');
const url = require('url');
const browserSync = require('browser-sync').create();
const serveStatic = require('serve-static');
const proxy = require('http-proxy-middleware');
const build = require('./build');

/**
 * Build config
 */
const PORT = build.PORT;
const BASE_DIR = build.DEST_BUILD;
const API_PROXY = build.API_PROXY;
const WATCH_EXT = build.WATCH_EXT;

/**
 * Middleware
 */
const staticMiddleware = serveStatic(path.resolve(BASE_DIR));
const apiMiddleware = proxy(['/ipep-rest'], {target: 'http://localhost:8080', ws: true, changeOrigin: true});
const spaMiddleware = function(req, res, next) { //eslint-disable-line no-unused-vars
  req.url = '/index.html';
  next();
};

/**
 * Initialize browser sync
 */
browserSync.init({
  files: WATCH_EXT.map(ext => `${BASE_DIR}/**/*.${ext}`),
  reloadDebounce: 1500,
  ghostMode: false,
  port: PORT,
  server: {
    baseDir: BASE_DIR,
    middleware: [
      staticMiddleware,
      apiMiddleware,
      spaMiddleware,
    ],
  },
});
