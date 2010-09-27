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
    ,  feedUrl = url.replace(/\/basic$/, '/full') + (url.split('?alt=json').length <= 1 ? '?alt=json' : '')
    
    ,  client = http.createClient(443, host, true)
    ,  request = client.request('GET', feedUrl, {'host': host});

  /*
   * remoteLoad(). Load a remote calendar
   */
  this.remoteLoad = function (fn, onlyH) {

    var  body = ''
      ,  self = this
      ,  onlyHeaders = onlyH ? onlyH : false;

    request.on('response', function (response) {
      response.setEncoding('utf8');

      if(!onlyHeaders) {
        response.on('data', function(chunk){body+= chunk;});
        response.on('end', function(){
          if (response.statusCode == 200) fn(false, self.processBody(body, response.headers), response.headers);
          else fn(true, body, response.headers);
        });
      }
      else return fn(response.headers, response.statusCode);

    });

    request.end();
  }

  /*
   * loadHeaders().
   */
  this.loadHeaders = function (fn) {
    return this.remoteLoad(fn, true);
  }

  /*
   * simplify().
   */

   this.simplify = function() {
     return this.jsonData;
   }

  this.processBody = function (body, headers) {    
    var conType = headers['content-type'].split('; ')[0];

    if(conType == 'application/json') return this.jsonData = JSON.parse(body);
    else return body;
  }
}


module.exports = Calendar;