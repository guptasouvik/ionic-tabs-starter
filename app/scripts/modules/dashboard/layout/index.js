'use strict';

module.exports = angular.module('dashboard.layout', [])
  .config(require('./routers/router'))
  .run(function() {
    console.log("in dashboard   ");
  });
