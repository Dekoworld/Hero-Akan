//Initialize Days of Week Array
var days = ['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY'];
//Initialize Akan names Array 
var male = ["Kwasi","Kwandwo","Kwabena","Kwaku","Yaw"," Kofi"," Kwame"];
//Initialize Akan names Array
var female = ["Akosua"," Adwoa","Abenaa"," Akua","Yaa","Afua","Ama"];
//Initialize Months Week Array 
var monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
                      
var today = new Date();
var dd   = today.getDate();
var mm   = monthNames[today.getMonth()]; 
var yyyy = today.getFullYear();
var day  = days[today.getDay()];
today = 'Date is :' + dd + '-' + mm + '-' + yyyy;
document.write(today +"<br>");
document.write('Day is : ' + day );
}
currentDate()
var val4 = parseInt(((val2x+1)*3)/5, 10)
var val5 = parseInt(val3/4, 10)
var val6 = parseInt(val3/100, 10)
var val7 = parseInt(val3/400, 10)
var val8 = val1+(val2x*2)+val4+val3+val5-val6+val7+2
var val9 = parseInt(val8/7, 10)
var val0 = val8-(val9*7)
form.result1.value = months[val2]+" "+form.day.value +", "+form.year.value
form.result2.value = days[val0]