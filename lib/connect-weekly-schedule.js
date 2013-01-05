/*
 * connect-weekly-schedule
 * https://github.com/scryptmouse/connect-weekly-schedule
 *
 * Copyright (c) 2013 Alexa Grey
 * Licensed under the MIT license.
 */
var WeeklySchedule = require('weekly-schedule');

// Will attempt to load a file if it exists
// and return the object, else, it returns an empty
// object.
function getFromFile(path) {
  'use strict';

  try {
    return require(path);
  } catch(e) {
    console.error('unknown path %s', path);
    return {};
  }
}

// Generate the middleware.
module.exports = function middleware(params) {
  'use strict';

  var schedule;

  if (params && typeof params === 'string')
    params = getFromFile(params);
  else
    params = params || {};

  schedule = new WeeklySchedule(params);

  return function(req, res, next) {
    res.locals.schedule = schedule;
    res.locals.today = schedule.today();
    res.locals.isOpen = res.locals.today.isOpen();
    next();
  };
};
