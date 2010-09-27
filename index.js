// node-cal - Copyright Damian Suarez <rdsuarez@gmail.com> (MIT Licensed)

// *** Module dependencies. ****

var http = require('http')
  ,  sys = require('sys');

// *** Constructor ****
Calendar = function (url){

  // retrieve host from url
  var _dom = url.substr(0, url.search('.com/') + 4)
    ,  _hasP = _dom.search('://')
    ,  protocol = _hasP >= 0 ? _dom.substring(0, _hasP) : undefined
    ,  isSecure = protocol && protocol == 'https' ? true : false

    ,  host = _hasP >= 0 ? _dom.substring(_hasP + 3) : _dom
    ,  feedUrl = url.replace(/\/basic$/, '/full') + (url.split('?alt=json').length <= 1 ? '?alt=json' : '');

  /*
   * load(). Load a remote calendar
   */
  this.remoteLoad = function (fn) {

    var  client = http.createClient(443, host, true)
      ,  request = client.request('GET', feedUrl, {'host': host})
      ,  body = ''
      ,  self = this;

    request.on('response', function (response) {
      response.setEncoding('utf8');

      response.on('data', function(chunk){body+= chunk;});
      response.on('end', function(){

        if (response.statusCode == 200) fn(false, self.processBody(body, response.headers), response.headers);
        else fn(true, body, response.headers);
      });
    });

    request.end();
  }


  this.processBody = function (body, headers) {    
    var conType = headers['content-type'].split('; ')[0];

    if(conType == 'application/json') return JSON.parse(body);
    else return body;
  }
}


module.exports = Calendar;