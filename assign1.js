var https = require('https');

function getAndPrintHTMLChunks () {
  
  var requestOptions = {
  	host: 'sytantris.github.io',
  	path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function(response) {
  
    response.setEncoding('utf8');

    response.on('data', function (data) {
      var emptyString = ""
      emptyString += data
      return emptyString
      
      console.log('Chunk Received', data, '/n');

    });
  
    response.on('end', function () {
      console.log('We are done receiving');
    });
  
  });




};

getAndPrintHTMLChunks(process.argv);