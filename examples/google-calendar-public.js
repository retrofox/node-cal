var cal = require('../');

var one = new cal ('http://www.google.com/calendar/feeds/thianh%40rosepad.com/private-a37aea0fdbcdb6ae4cbf996e7422ca11/basic')
one.remoteLoad(function(error, calandar_data){
  console.log (calandar_data);
})

var two = new cal ('http://www.google.com/calendar/feeds/jgqs3n5kh7d327jq6bgok30klo%40group.calendar.google.com/public/basic');

two.remoteLoad(function(error, calandar_data, headers){
  if(!error) console.log (calandar_data);
  else {
    console.log ('Se ha producido un error de lectura:');
    console.log (calandar_data);
  }
});


var three = new cal ('http://www.google.com/calendar/feeds/jgqs3n5kh7d327jq6bgok30klo%40group.calendar.google.com/private-8a799c80096cc93181d078f348ece8c2/basic');

three.remoteLoad(function(error, calandar_data, headers){
  if(!error) console.log (calandar_data);
  else {
    console.log ('Se ha producido un error de lectura');
    console.log (calandar_data);
  }
});