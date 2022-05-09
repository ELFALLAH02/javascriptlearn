function f12(){
  //var d=document.getElementsByTagName("input");
  var dd=document.forms["form1"]["oll"].value;
  var ss = document.getElementById("ok")
  var df=   document.getElementById("okf")
 
 
 
 
 
 
 
 
 
  if(dd==""){
       ss.style.visibility="visible"
       ss.style.color="red"
       df.style.visibility="visible"
       df.style.color="red"
  }
   else{
    ss.style.visibility="visible"
    ss.style.color="green"
    df.style.visibility="visible"
    df.style.color="gre"
   }

}