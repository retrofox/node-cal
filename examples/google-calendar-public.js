var cal = require('../');

var publicLink = 'http://www.google.com/calendar/feeds/jgqs3n5kh7d327jq6bgok30klo%40group.calendar.google.com/public/basic'
  ,  calendar = new cal (publicLink);

calendar.remoteLoad(function(er, data, headers) {
  if(!er) console.log (data);
  else {
    console.log ('Error:');
    console.log (data);
  }
});