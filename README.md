# connect-weekly-schedule

Connect middleware for the weekly-schedule library.

## Getting Started
Install the module with: `npm install connect-weekly-schedule`

```javascript
	// In a connect / express app
	app.use(require('connect-weekly-schedule')(config.schedule));
	// Or pass a path to a JSON file, or JS file that
	// returns a valid object
	app.use(require('connect-weekly-schedule')(__dirname + '/config/schedule.json'));
```

## Documentation
_(Coming soon)_


## Examples
_(Coming soon)_


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](https://github.com/gruntjs/grunt).

## Release History
v 0.0.1 - Initial release

## License
Copyright (c) 2013 Alexa Grey
Licensed under the MIT license.
