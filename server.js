var fs = require('fs');

var xml2js = require('xml2js');

var parser = new xml2js.Parser();

fs.readFile('testXMLformat.xml', function(err, data) {
    parser.parseString(data, function(err, result) { 
        console.log(result);
        var json1 = JSON.stringify(result);
        console.log(json1);
        //var json = JSON.parse(json1);
    });
});






