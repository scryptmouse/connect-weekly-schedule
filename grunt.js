var fs = require('fs');

var jshint_config = JSON.parse(fs.readFileSync('.jshintrc', 'utf8'));

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    test: {
      files: ['test/**/*.js']
    },
    lint: {
      files: ['lib/**/*.js', 'test/**/*.js']
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'default'
    },
    jshint: {
      options: jshint_config
    }
  });

  // Default task.
  grunt.registerTask('default', 'lint test');

};
