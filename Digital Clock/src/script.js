
var t1,t2;
function get12hrTime()
{
      
      var date=new Date();
      var hh=date.getHours();
      var mm=date.getMinutes();
      var ss=date.getSeconds();
      var session="AM";
      if(hh==0)
      {
            hh=12;
      }
      if(hh>12)
      {
            hh=hh-12;
            session = "PM";
      }
      hh=(hh<10)? "0" + hh : hh;
      mm=(mm<10)? "0" + mm : mm;
      ss=(ss<10)? "0" + ss : ss;

      let time = hh + ":" + mm + ":" + ss + " "+session;
      document.getElementById("time").innerHTML = time;
      if(t2)
      {
            clearTimeout(t2);
      }
      t1=setTimeout(function(){
            get12hrTime()
      },1000);
}
function get24hrTime()
{
      
      var date=new Date();
      var hh=date.getHours();
      var mm=date.getMinutes();
      var ss=date.getSeconds();
      var session="AM";
      
      if(hh>12)
      {
            session = "PM";
      }
      hh=(hh<10)? "0" + hh : hh;
      mm=(mm<10)? "0" + mm : mm;
      ss=(ss<10)? "0" + ss : ss;

      let time = hh + ":" + mm + ":" + ss + " "+session;
      document.getElementById("time").innerHTML = time;
      if(t1)
      {
            clearTimeout(t1);
      }
      t2=setTimeout(function(){
            get24hrTime()
      },1000);
}