
var day = ["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"]
var male = ["Kwasi","Kwandwo","Kwabena","Kwaku","Yaw"," Kofi"," Kwame"]
var female = ["Akosua"," Adwoa","Abenaa"," Akua","Yaa","Afua","Ama"]
                    
function giveAkanName(){
    var year = parseInt(document.getElementById("year").value);
    var month = parseInt(document.getElementById("month").value);
    var day = parseInt(document.getElementById("day").value);
    var gender = getGender();

    var date = new Date(year + "/" + month +"/" +day);
    var dayBorn = date.getDay();
    var akanName;
      
    if(gender === "male" ) {
       akanName = male[dayBorn];
    }
    else{

        akanName = female[dayBorn];
    }
    alert("You were born on " + dayBorn + "and your Akan name is"+ akanName);
    }

    function getGender(){
        var gender = document.getElementsByName("gender");

        for(i=0; i <gender.length; i++){
            if (gender[i].checked){
                return (gender[i].value)
            }
        }
    }