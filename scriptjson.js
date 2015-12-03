(function(){

  console.log("Hello");
  $.getJSON( "datajson.json", function( data ) {

  console.log(data);


  var l=data.length;
  //console.log(l);


    var cname=data[0]["Category Name"];
    var x=$('.topic-category-name');
    x.text(cname);
  //  console.log(x);
    var i;

     console.log("Hello");

    //z=($('.collection-widget:nth-child(1)'));
    //z.next();
    //console.log(z);
    //k=z.find('.topic-name');

  //console.log("k="+k);
  //k.text("He3llo");
   //r=$('body');
    //console.log(z);
    for(j=0;j<2;++j)
    {
    //  console.log(z);
      k=j+1;
      z=($('.collection-widget:nth-child('+ k +')'));
      y=z.find($('.topic')).first();
      for(i=0;i<5;++i)
      {
        console.log(i);
        r=y.find('.topic-name');
        r.text(data[j]["Category Topics"][i]["Topic Name"]);
        r.css('line-height','0');
        r=y.find('.category-name');
        r.text(data[j]["Category Topics"][i]["Topic Category"]);


        y=y.next();
      }
    //console.log(x);
//  z=z.next();
  //  console.log(z);
  }

  });

})();
