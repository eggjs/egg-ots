'use strict';

const assert = require('assert');
const OTS = require('ots2');

module.exports = app => {
  const config = app.config.ots;

  app.addSingleton('ots', (config, app) => {
    config = Object.assign({}, config);
    return new OTS(config);
  });

  app.createOts = app.ots.createInstance.bind(app.ots);
};