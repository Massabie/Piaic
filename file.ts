
 var num:any=22;
 var num2:any=44;
 var resolt:any= 22<44;
 console.log(resolt);

// var useName:any = "massab";
// var age:any=19
// var Nationality :any ="faisalabad";
// var result:any =age>19 && useName=="massab";
// console.log(result);


// function cTofTemperature (tempF:any){
//  var resultf :any =tempF*(9/5)+32;
// console.log(resultf);
//  }

//  cTofTemperature(39);
//  cTofTemperature(58);

// function percentage (numbers:any,total:any){
// var result:any = (numbers*100)/total ;
// console.log(result);
// }

// percentage(347,500);

// function sum (num1:any,num2:any){
// var result:any= (num1+num2);
// return result;
// }


// var addResult:any=sum(50,40);
// addResult +=5;
// console.log(addResult);
var studentsNames:any []=[`massab`,`haris`,`saad`,`shoaib`,`osama`]
console.log(studentsNames.length);
function pushnewiteminarray(studentsName:any){
studentsNames[studentsNames.length] = studentsName

}
pushnewiteminarray(`hammad`)
pushnewiteminarray(`zeshan`)
pushnewiteminarray(`zufishan`)

console.log(studentsNames);

