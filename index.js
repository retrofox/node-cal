// node-cal - Copyright Damian Suarez <rdsuarez@gmail.com> (MIT Licensed)

/**
 * Module dependencies.
 */

var http = require('http')
  ,  sys = require('sys');

Calendar = function (url, options, fn){

  var client = http.createClient(443, 'www.google.com', true)
    ,  request = client.request('GET', url, {
        'host': 'www.google.com'
      })
    ,  body = '';

  this.url = url;

  request.on('response', function (response) {
    response.setEncoding('utf8');

    response.on('data', function(chunk){ body+= chunk; });
    response.on('end', function(){
      if (response.statusCode == 200) fn(JSON.parse(body));
    });
  });

  request.end();
}


exports.Calendar = Calendar;