//var helloworld = require('helloworld_js');
//var hi = new helloworld.HelloWorldJs();
//console.log(hi.hello()); // prints "Hello World" to stdou

var Cal = require('../').Calendar
  ,  calendar = new Cal ('/calendar/feeds/thianh%40rosepad.com/private-a37aea0fdbcdb6ae4cbf996e7422ca11/basic?alt=json', {host: 'www.google..com'}, function(cal){
      console.log (cal);
    });