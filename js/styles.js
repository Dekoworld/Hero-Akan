
var day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var male = ["Kwasi". "Kwadwo","Kwabena","Kwaku","Yaw"," Kofi"," Kwame"];
var female = ["Akosua"," Adwoa","Abenaa"," Akua","Yaa","Afua","Ama"];

function AkanName(){
    var Year1 = parseInt(document.getElementById("Year1"));
    var Month1 = parseInt(document.getElementById("Month1"));
    var Date1 = parseInt(document.getElementById("Date1"));
    var gender = getgender();

    if((Date1 < 0) || (Date1 > 31)) {
        alert("Date not valid!");
     } 
     
     else if((Month1 < 0) || (Month1 > 12)) {
            alert("Month not valid!");
         }
         
         else(Year1 < 1900) {
            alert("Please,enter range(1900-present)!");

         } var Date1 =new Date(Date1+ "-"+Month1+"-" +Year1);
         var bd = date.getdate();
         var getAkanName;
     
     }
function getgender(){
    if (gender==="male"){
        AkanName = maleName(day);
    }
    else{
        AkanName = femaleName(day);
    }