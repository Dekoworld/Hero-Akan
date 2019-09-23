//Initialize Days of Week Array
var days = ['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY'];
//Initialize Akan names Array 
var male = ["Kwasi","Kwandwo","Kwabena","Kwaku","Yaw"," Kofi"," Kwame"];
//Initialize Akan names Array
var female = ["Akosua"," Adwoa","Abenaa"," Akua","Yaa","Afua","Ama"];
//Initialize Months Week Array 
var monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
                    
function giveAkanName(){
    var year = parseInt(document.getElementById("year").value);
    var month = parseInt(document.getElementById("month").value);
    var day = parseInt(document.getElementById("day").value);
    var gender = getGender;
    VarDate = newDate(year + "/" + month +"/" +day);
    var dateBorn = date.getDay();
    var akanName;
}
// Form validation.
function validate() {
      
    if(gender === "male" ) {
       akanName = male[dayBorn];
    }
    else{
        akanName = female[dayBorn]
    }

    alert("You were born on" + days[dayBorn] + "and your Akan name is"+ akanName);
}

    function gender(){
        var gender = document.getElementsByName("gender");

        for(i=0; i<gender.length; i++){
            if (gender[i].checked){
                return (gender[i].value);
            }
        }
    }