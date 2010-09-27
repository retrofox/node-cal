# node-cal

A simple manager for the calendars

## How to use

#### add Module
var cal = require('../');

#### create calendar object
    var link = 'http://www.google.com/calendar/feeds/jgqs3n5kh7d327jq6bgok30klo%40group.calendar.google.com/public/basic'
      , calendar = new cal (link);

#### loads calendar
    calendar.remoteLoad(function(er, data, headers) {
      if(!er) console.log (data);
      else {
        console.log ('Error:');
        console.log (data);
      }
    });


## Examples:

  Check out the [examples](http://github.com/retrofox/node-cal/tree/master/examples/) directory to play around.

## License 

(The MIT License)

Copyright (c) 2010 [Damian Suarez](rdsuarez@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
