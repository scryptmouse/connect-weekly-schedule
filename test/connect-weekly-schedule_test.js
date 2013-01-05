var connect_weekly_schedule = require('../lib/connect-weekly-schedule.js')
  , WeeklySchedule = require('weekly-schedule')
;

exports['middleware generator'] = {
  setUp: function(done) {
    // setup here
    done();
  },
  'no args': function(test) {
    test.expect(1);
    // tests here
    test.equal(typeof connect_weekly_schedule(), 'function', 'generator should return a function');
    test.done();
  }
};

exports['middleware'] = {
  setUp: function(done) {
    this.mw = connect_weekly_schedule();
    this.res = {locals: {}};
    done();
  },

  'adds properties': function(test) {
    test.expect(3);
    this.mw(null, this.res, (function() {
      test.ok(this.res.locals.schedule instanceof WeeklySchedule, 'should be a WeeklySchedule');
      test.ok(this.res.locals.today instanceof WeeklySchedule.Day, 'should be a WeeklySchedule.Day');
      test.equal(typeof this.res.locals.isOpen, 'boolean', 'should be a boolean');
      test.done();
    }).bind(this));
  }
};
