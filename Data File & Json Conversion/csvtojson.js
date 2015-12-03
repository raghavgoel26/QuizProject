fs = require('fs');


fs.readFile('datafile.csv', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  //console.log(data);
  var csv=data;
    //console.log(csv);
  var lines=csv.split("\r\n");

  //console.log(lines);
  var result = [];
  var headers=lines[0].split(",");
  //console.log(headers);
  for(var i=1; i<lines.length-2; i++){

    var obj = {};
    var currentline=lines[i].split(",");
    //console.log(currentline);
    for(var j=0;j<headers.length;j++){
    obj[headers[j]] =currentline[j];
      //console.log(obj[headers[j]]);
    }
    //console.log(obj);
    result.push(obj);
  }
  //console.log(result);
  //return result; //JavaScript object
console.log(JSON.stringify(result, null, 2)); //JSON
});
