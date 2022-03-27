// code your solution here
function saturdayFun(fun="roller-skate"){
    return `This Saturday, I want to ${fun}!`
}
// saturdayFun('roller-skate')
//Bellow function is not completed
function mondayWork(activity){
   if (activity === undefined){
       return "This Monday, I will go to the office."

   }else{
       return "This Monday, I will work from home."
   }

}



 function wrapAdjective(name){
     if (name === undefined){
         return "*";
     }
     return function (string){
         if (string === undefined){
             return "special"
             
         }
         else return `You are ${name}${string}${name}!`
     }
 }