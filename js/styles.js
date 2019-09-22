
var day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var male = ["Kwasi","Kwandwo","Kwabena","Kwaku","Yaw"," Kofi"," Kwame"];
var female = ["Akosua"," Adwoa","Abenaa"," Akua","Yaa","Afua","Ama"];

function AkanName (){
    var Year1 = parseInt(document.getElementById("Year1").value);
    if(Year1 < 1900) {
        alert("Please,enter range(1900-present)!");
     }
    var Month1 = parseInt(document.getElementById("Month1").value);
 if{
    ((Month1 < 0) || (Month1 > 12)) {
       alert("Month not valid!")..);
    }
    var Date1 = parseInt(document.getElementById("Date1").value);
   
if((Date1 < 0) || (Date1 > 31)) {
        alert("Date not valid!");
    }
  

    var day =new day(Date1 +"-"+Month1 +"-"+Year1);
    var bd = day.getdate1();
    var AkanName;
  

 var gender = document.getElementById("gender"}.value};
 function getgender(){
     return gender;
        }
    if (gender==="male"){
        AkanName = maleName(bd);
    }
    else{
        AkanName = femaleName(bd);
    }
    alert("Your day of birth is" +day[bd]+"and you AKAN name is"+AkanName);
}