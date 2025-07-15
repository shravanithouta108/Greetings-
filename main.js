var date=new Date();
var hr=date.getHours();

if(hr>=0 && hr<12){
  alert ('Good Morning!!');
}

else if(hr>=12 && hr<16){
    alert('Good Afternoon!!');

}

else if(hr>21 && hr<24)
{
      alert('Good Night!!');
}

else{
  alert('Good Evening!!');
}
