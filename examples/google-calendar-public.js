var cal = require('../');

var privateLink = 'http://www.google.com/calendar/feeds/jgqs3n5kh7d327jq6bgok30klo%40group.calendar.google.com/private-8a799c80096cc93181d078f348ece8c2/basic'
  ,  calendar = new cal (privateLink);

calendar.remoteLoad(function(er, data, headers) {
  if(!er) console.log (data);
  else {
    console.log ('Error:');
    console.log (data);
  }
});